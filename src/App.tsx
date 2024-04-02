import LandingPage from "./components/landingpage";
import Navbar from "./components/navbar";
import ProjectNote from "./components/projectnote";
import Section from "./components/section";

export default function App() {
  const technologies = [
    "Golang",
    "TypeScript",
    "React",
    "CloudFlare",
    "Gorilla/Websockets",
    "PostgreSQL",
    "Docker",
    "GitHub Actions",
  ];
  return (
    <main>
      <Navbar />
      <LandingPage />
      <Section id="about" title="01. About">
        <p className="border border-black border-dashed p-4 shadow-md">
          My name is <strong>Carl</strong> and for as long as I can remember I
          have been interested in technology and computers. My love for software
          development started when I started watching youtube tutorials on how
          to make games in Game Maker, after that I was hooked.
          <br />
          <br />
          I'm graduating from <strong>Umeå University</strong> with a bachelor
          degree in Computer Science this summer. I love learning new things and
          trying the latest technologies. When I am working on new projects I
          enjoy the entire process from designing in Figma to implementing the
          backend in languages like Golang.
          <br />
          <br />
          <strong>Besides coding</strong> I enjoy photography, snowboarding and
          learning Japanese (and a lot more).
          <br />
          <br />
          Here are some technologies I have been working with recently:
          <div className="flex gap-2 justify-center flex-wrap">
            {technologies.map((technology) => (
              <div
                className="border border-black border-dashed px-2"
                key={technology}
              >
                {technology}
              </div>
            ))}
          </div>
        </p>
      </Section>
      <Section id="projects" title="02. Projects">
        <ProjectNote
          title="Oshirigame"
          technologies={[
            "Golang",
            "React",
            "TypeScript",
            "TailwindCSS",
            "WebSockets",
            "CloudFlare",
            "Linode",
          ]}
          projectUrl="https://oshiri.carlgulliksson.dev"
          githubUrl="https://github.com/carl1330/oshirigame"
          screenshot="https://lh3.googleusercontent.com/pw/AP1GczN0Mox7t3UcmUpPK7_tsxEDEtZifsCNbywBqoroCCdGDRSHl8xBXD1elbC9hOxSxvZXFIILa49ooj9QrzUeG3v7gjm9ksxLmLlxcmYU8PJq8_dJ7qlZUsLJlsxBikWjPhEbYLBT_uiwswOt1dzHAiKxPQ=w1060-h913-s-no-gm"
        >
          A word game inspired by the Japanese game show バナナサンド (Banana
          Sando), where players try to create the longest words possible to earn
          points.
        </ProjectNote>
      </Section>
      <Section id="contact" title="03. Contact">
        <a
          className="p-2 border hover:border-dotted border-black border-dashed shadow-md"
          href="mailto:gulliksson.carl@gmail.com"
        >
          gulliksson.carl@gmail.com
        </a>
      </Section>
    </main>
  );
}
