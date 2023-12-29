import Image from "next/image";
import { RxExternalLink, RxGithubLogo } from "react-icons/rx";

interface Props {
  src: string;
  imgsrc: boolean;
  title: string;
  description: string;
  githubURL: string;
  siteURL: string;
}

const ProjectCard = ({
  src,
  imgsrc,
  title,
  description,
  githubURL,
  siteURL,
}: Props) => {
  return !imgsrc ? (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <video
        autoPlay
        muted
        loop
        width={1000}
        height={1000}
        className="object-contain"
      >
        <source src={src} type="video/webm" />
      </video>

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>

      <div className="flex items-center justify-center gap-10">
        <a
          href={githubURL}
          target="_blank"
          className="flex items-center justify-center my-[15px] cursor-pointer z-[10] text-white text-2xl"
        >
          <RxGithubLogo />
        </a>
        <a
          href={siteURL}
          target="_blank"
          className="flex items-center justify-center my-[15px] cursor-pointer z-[10] text-white text-2xl"
        >
          <RxExternalLink />
        </a>
      </div>
    </div>
  ) : (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
      <div className="flex items-center justify-center gap-10">
        <a
          href={githubURL}
          target="_blank"
          className="flex items-center justify-center my-[15px] cursor-pointer z-[10] text-white text-2xl"
        >
          <RxGithubLogo />
        </a>
        <a
          href={siteURL}
          target="_blank"
          className="flex items-center justify-center my-[15px] cursor-pointer z-[10] text-white text-2xl"
        >
          <RxExternalLink />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
