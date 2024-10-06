interface ProjectCardProps {
  title: string;
  text: string;
}

export const ProjectCardDetails = (props: ProjectCardProps) => {
  return (
    <>
      <span className="mb-1 md:mb-4 inline-flex items-center justify-center rounded-md  p-2 shadow-lg">
        <img
          src="./github-logo.svg"
          width={64}
          height={64}
          alt="GitHub Icon"
          className="fill-slate-100"
        ></img>
      </span>
      <h2 className="mb-2 font-medium tracking-tight text-white">
        {props.title}
      </h2>
      <p className="text-sm text-slate-400">{props.text}</p>
    </>
  );
};
