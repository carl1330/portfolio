interface SectionProps {
  title: string;
  children?: React.ReactNode;
}

export default function Section(props: SectionProps) {
  return (
    <div
      id={props.title}
      className="flex flex-col w-screen h-screen justify-center items-center"
    >
      <div
        id={props.title.toLowerCase()}
        className="flex flex-col w-screen h-screen justify-center items-center"
      >
        <h2>{props.title}</h2>
        <div className="border border-black w-7/12 border-dashed" />
        <div className="w-2/3 pt-4 text-center">{props.children}</div>
      </div>
    </div>
  );
}
