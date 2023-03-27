function App() {

  const IntroComponent = () => {
    return (
    <div className="h-screen items-center flex justify-center -mt-14">
      <div className="flex flex-row items-center justify-center gap-8">
        <div className="text-slate-100">
          <h1 className="text-2xl font-bold">Hey there! I'm <span className="text-amber-500">Carl</span></h1>
          <p className="">Constantly learning 🔭</p>
          <p className="">Passionate about all things code 💻</p>
          <p className="">Ramen lover 🍜</p>
        </div>
        <div>
          <img className="w-48 rounded-lg" src="https://lh3.googleusercontent.com/pw/AMWts8AqgdGMydJ0vi8RsW2nDvFPRhMUDpLZc9UkKCUuewsVzNVJUenoqimqkcB0HUzqWHUzjexbRvgSXl9ITcHeICvr5UmT2oSoGMaB_oByeMoAJxn5T9sO0sW9SYqS7Zj90GA1VdPAeml6_I20OPgf55TK0Q=w839-h903-no?authuser=0"/>
        </div>
      </div>
    </div>
    )
  }

  const Navbar = () => {
    return (
      <div className="flex justify-center items-center text-slate-100 h-14">
        <div className="flex justify-evenly w-1/2">
          <div className="flex flex-row items-center gap-4">
            <div className="cursor-pointer">Home</div>
            <div className="cursor-pointer">About</div>
          </div>
          <div className="text-xl whitespace-nowrap">
            Carl Gulliksson
          </div>
          <div className="flex flex-row items-center gap-4">
            <div className="cursor-pointer">Projects</div>
            <div className="cursor-pointer">Contact</div>
          </div>
        </div>
      </div>
    )
  }

  const Projects = () => {
    return(
      <div className="h-10 bg-slate-800 flex justify-center">
        <div className="flex flex-col w-1/2">
          <div className="text-slate-100 text-2xl">Projects</div>

          </div>
      </div>
    )
  }

  return (
    <div className="App">
      <Navbar />
      <IntroComponent />
      <Projects />
    </div>
  )
}

export default App
