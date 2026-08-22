"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type PlayerStatus = "off" | "waiting" | "playing";

export default function AmbientPlayer() {
  const [isMotionPage, setIsMotionPage] = useState(false);
  const [isProjectPage, setIsProjectPage] = useState(false);
  const [enabled, setEnabled] = useState(true);
  const [status, setStatus] = useState<PlayerStatus>("waiting");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const stop = useCallback((updateStatus = true) => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    if (updateStatus) setStatus("off");
  }, []);

  const start = useCallback(async (force = false) => {
    if (isMotionPage || (!enabled && !force)) return;
    let audio = audioRef.current;
    if (!audio) {
      audio = new Audio("/audio/ambient-light.wav");
      audio.loop = true;
      audio.preload = "auto";
      audio.volume = 0.42;
      audioRef.current = audio;
    }

    try {
      await audio.play();
      setStatus("playing");
    } catch {
      setStatus("waiting");
    }
  }, [enabled, isMotionPage]);

  useEffect(() => {
    const motion = window.location.pathname.replace(/\/$/, "").endsWith("/motion");
    const projectPage = window.location.pathname.includes("/work/");
    const preference = window.localStorage.getItem("portfolio-ambient-music") !== "off";
    queueMicrotask(() => {
      setIsMotionPage(motion);
      setIsProjectPage(projectPage);
      setEnabled(preference);
      if (motion || !preference) setStatus("off");
    });
    if (motion || !preference) return;

    const unlock = () => void start();
    const autoplayTimer = window.setTimeout(() => void start(), 0);
    window.addEventListener("pointerdown", unlock, { once: true });
    window.addEventListener("keydown", unlock, { once: true });
    return () => {
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
      window.clearTimeout(autoplayTimer);
      stop(false);
    };
  }, [start, stop]);

  const toggle = () => {
    if (enabled && status === "waiting") {
      void start();
      return;
    }
    if (enabled) {
      window.localStorage.setItem("portfolio-ambient-music", "off");
      setEnabled(false);
      stop();
      return;
    }
    window.localStorage.setItem("portfolio-ambient-music", "on");
    setEnabled(true);
    setStatus("waiting");
    void start(true);
  };

  if (isMotionPage) return null;

  const label = !enabled ? "音乐已关闭" : status === "playing" ? "舒缓轻音乐" : "点击播放音乐";
  return (
    <button
      className={`ambient-player${isProjectPage ? " is-project" : ""}${enabled && status === "playing" ? " is-playing" : ""}`}
      type="button"
      onClick={toggle}
      aria-pressed={enabled}
      aria-label={enabled ? "关闭背景音乐" : "开启背景音乐"}
    >
      <span className="ambient-icon" aria-hidden="true"><i /><i /><i /></span>
      <span>{label}</span>
      <small>{enabled ? "ON" : "OFF"}</small>
    </button>
  );
}
