import Navbar from "./components/navbar";
import Section from "./components/section";

export default function App() {
  return (
    <main>
      <Navbar />
      <div className="flex h-screen w-screen justify-evenly">
        <div className="flex flex-col w-full h-full items-center justify-center">
          <div className="w-96">
            <h1>Carl</h1>
            <h1>Gulliksson</h1>
            <p>
              Software developer, insert rest of cool intro here bla lba bla
              blabalbalbalb al bal bal lba lbala bla bla blal aaaaaaa aaaaaaa
              aaaa a a a a aaaaaaa aaaa
            </p>
          </div>
        </div>
        <div className="w-[1080px] h-full overflow-hidden bg-black bg-[url('src/assets/profilepic.jpg')] bg-[center_right_45rem] bg-[length:180%]"></div>
      </div>
      <Section title="About">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Section>
      <Section title="Projects"></Section>
      <Section title="Contact"></Section>
    </main>
  );
}
