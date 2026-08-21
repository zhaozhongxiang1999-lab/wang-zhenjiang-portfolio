"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type PlayerStatus = "off" | "waiting" | "playing";

const chords = [
  [48, 55, 59, 64],
  [45, 52, 57, 60],
  [41, 48, 52, 57],
  [43, 50, 55, 59],
];

const midiToFrequency = (note: number) => 440 * Math.pow(2, (note - 69) / 12);

export default function AmbientPlayer() {
  const [isMotionPage, setIsMotionPage] = useState(false);
  const [enabled, setEnabled] = useState(true);
  const [status, setStatus] = useState<PlayerStatus>("waiting");
  const contextRef = useRef<AudioContext | null>(null);
  const outputRef = useRef<GainNode | null>(null);
  const timerRef = useRef<number | null>(null);
  const chordRef = useRef(0);

  const stop = useCallback((updateStatus = true) => {
    if (timerRef.current !== null) window.clearInterval(timerRef.current);
    timerRef.current = null;
    outputRef.current = null;
    const context = contextRef.current;
    contextRef.current = null;
    if (context && context.state !== "closed") void context.close();
    if (updateStatus) setStatus("off");
  }, []);

  const playNextChord = useCallback(() => {
    const context = contextRef.current;
    const output = outputRef.current;
    if (!context || !output || context.state !== "running") return;

    const now = context.currentTime;
    const notes = chords[chordRef.current % chords.length];
    chordRef.current += 1;

    notes.forEach((note, index) => {
      const oscillator = context.createOscillator();
      const voice = context.createGain();
      oscillator.type = index % 2 === 0 ? "sine" : "triangle";
      oscillator.frequency.value = midiToFrequency(note);
      oscillator.detune.value = index % 2 === 0 ? -3 : 3;
      voice.gain.setValueAtTime(0.0001, now);
      voice.gain.exponentialRampToValueAtTime(0.014, now + 1.8);
      voice.gain.setValueAtTime(0.014, now + 4.8);
      voice.gain.exponentialRampToValueAtTime(0.0001, now + 7.4);
      oscillator.connect(voice).connect(output);
      oscillator.start(now);
      oscillator.stop(now + 7.5);
    });

    const bell = context.createOscillator();
    const bellGain = context.createGain();
    bell.type = "sine";
    bell.frequency.value = midiToFrequency(notes[2] + 12);
    bellGain.gain.setValueAtTime(0.0001, now + 1.2);
    bellGain.gain.exponentialRampToValueAtTime(0.009, now + 1.24);
    bellGain.gain.exponentialRampToValueAtTime(0.0001, now + 4.6);
    bell.connect(bellGain).connect(output);
    bell.start(now + 1.2);
    bell.stop(now + 4.7);
  }, []);

  const beginSequence = useCallback(() => {
    if (timerRef.current !== null) return;
    playNextChord();
    timerRef.current = window.setInterval(playNextChord, 6200);
    setStatus("playing");
  }, [playNextChord]);

  const start = useCallback(async (force = false) => {
    if (isMotionPage || (!enabled && !force)) return;
    let context = contextRef.current;
    if (!context) {
      const AudioContextClass = window.AudioContext ||
        (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) {
        setStatus("off");
        return;
      }
      context = new AudioContextClass();
      const output = context.createGain();
      const filter = context.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = 1800;
      output.gain.value = 0.72;
      output.connect(filter).connect(context.destination);
      contextRef.current = context;
      outputRef.current = output;
    }

    try {
      await context.resume();
      if (context.state === "running") beginSequence();
      else setStatus("waiting");
    } catch {
      setStatus("waiting");
    }
  }, [beginSequence, enabled, isMotionPage]);

  useEffect(() => {
    const motion = window.location.pathname.replace(/\/$/, "").endsWith("/motion");
    const preference = window.localStorage.getItem("portfolio-ambient-music") !== "off";
    queueMicrotask(() => {
      setIsMotionPage(motion);
      setEnabled(preference);
      if (motion || !preference) setStatus("off");
    });
    if (motion || !preference) {
      return;
    }

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

  const label = !enabled ? "音乐已关闭" : status === "playing" ? "氛围音乐" : "点击播放音乐";
  return (
    <button
      className={`ambient-player ${enabled && status === "playing" ? "is-playing" : ""}`}
      type="button"
      onClick={toggle}
      aria-pressed={enabled}
      aria-label={enabled ? "关闭背景音乐" : "开启背景音乐"}
    >
      <span className="ambient-icon" aria-hidden="true">
        <i /><i /><i />
      </span>
      <span>{label}</span>
      <small>{enabled ? "ON" : "OFF"}</small>
    </button>
  );
}
