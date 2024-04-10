import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface ProjectNoteProps {
  title: string;
  technologies: string[];
  children?: React.ReactNode;
  screenshot?: string;
  githubUrl: string;
  projectUrl?: string;
}

export default function ProjectNote(props: ProjectNoteProps) {
  return (
    <div className="flex gap-4 border justify-between border-black border-dashed p-4 shadow-md">
      <div className="flex-col flex">
        <div className="text-left max-w-96 grow">
          <h3>{props.title}</h3>
          <div>{props.children}</div>
          <div className="flex gap-2 mt-2 flex-wrap">
            {props.technologies.map((technology) => (
              <div
                key={technology}
                className="border border-black border-dashed px-2"
              >
                {technology}
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-2 self-start">
          <a href={props.githubUrl} target="_blank">
            <FaGithub />
          </a>
          <a href={props.projectUrl} target="_blank">
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
      <a href={props.projectUrl} target="_blank" className="w-2/5">
        <img
          className="rounded-md hover:grayscale-0 grayscale transition-all cursor-pointer"
          src={props.screenshot}
        />
      </a>
    </div>
  );
}
