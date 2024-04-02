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
          <br />I recently graduated from <strong>Umeå University</strong> with
          a bachelor degree in Computer Science. I love learning new things and
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
          screenshot="https://lh3.googleusercontent.com/pw/AP1GczOmSJx3gLnpmHIeMcpDE6nAtI0UE2Oqjj5a4h6lcgcPi6twf7v1Z9LvA_jW5Xu3-KGGHkHXu8KydvtON-6O8Cp0oYc0pWnr0kAeF9vP59ahRvxmyYcQMIxbP42vHEF3EhpSmsCk9EZC14tW3_AUCJiGl7z-FBGkVYxjbAJOVz-PSehw9kG5IPurysQlGYg87WTU-xEQ7aADoaKfgRCksZaQ_dUwxEdyRZHzfFfLx4_ptDwo-2Vjo1sA3UQ7aQGYR12w-9ij08Do_hqIr5d1RFQ852JNby8HC-1CPjyuO6VRNzJyYdpSkwWgyR47YmPFjtqbXpc5ssfbM1a1jKuVoTftYYKyArsYFjPs16OXI6_4PW24N7AocHSTkjbyrmlPmIUR9EezuHp4hzyY_bInDmbDDiDdVZnseTMigFo-TZsIiQ3JGKvyIDjurOoYPGp7ktAlFRdnhpJ83HK_c1BYcIQ3PisX9NNxLibxxBqQupBndw2FJY9Sezd4jwf0Z-MMRRWIN0kp1954Rat-sPb4MIWeVY9g53h_73DKlwTVvmMBa33g0g7RUo2Q0GeXZZSlUhNjex8zqXKGHlDa9EFWkb8kLf0WD8TfEk_u-OFwtBGpmDhxVmTmNS0SHnzE391ORQunYZATlFI26J8lp_68jHX9gCDhtBYR5YUXFjNYXjPYhl3x8y-BKExe5SZd8NC3WwZcG15PKN_AcxXsmmt5cnPaT08qlqyDjuqBrEBmuKuah1sThsxl1pCjdHwrN1OkHoQosh3Atqq4DKi7qStekDZKXQ3hVkxSjVqJKdV2O1nKk335puusC-rLJAompRRyuh-ogqQxnV8uELRmiBPnTafADXWgbYGwIqA09KfqEMMiqqXE6VPrrHj7VtOODoAA0w6flUic7jo3BkaZ0F8ayQGQ4LJwkEGM1J0XGaSh8isU3nckSPU5-pGRAb8GiOC7bnCHpUtmx1aNhj0gVDW2uUqR3Dywt4Lo=w1734-h1492-s-no-gm?authuser=0"
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
