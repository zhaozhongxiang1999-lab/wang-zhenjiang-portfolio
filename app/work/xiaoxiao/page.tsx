import ProjectDetail from "../ProjectDetail";
import { getProject } from "../project-data";
export default function Page() { return <ProjectDetail project={getProject("xiaoxiao")} />; }
