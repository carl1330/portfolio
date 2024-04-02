export default function LandingPage() {
  return (
    <div className="flex h-screen w-full justify-center items-center">
      <div className="absolute overflow-hidden w-full h-full blur-md -m-3 grayscale">
        <img src="background.jpg" />
      </div>
      <div className="w-96 text-white z-10">
        <h1>Carl</h1>
        <h1>Gulliksson</h1>
        <p>
          Software developer, hobbyist photographer and Japanese language
          learner.
        </p>
      </div>
    </div>
  );
}
