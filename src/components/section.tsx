interface SectionProps {
  title: string;
  id: string;
  children?: React.ReactNode;
  className?: string;
}

export default function Section(props: SectionProps) {
  return (
    <div
      id={props.id}
      className={
        "flex flex-col w-full h-screen justify-center items-center gap-4 "
      }
    >
      <h2>{props.title}</h2>
      <div className={"w-2/3 text-center " + props.className}>
        {props.children}
      </div>
    </div>
  );
}
