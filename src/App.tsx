function App() {

  const IntroComponent = () => {
    return (
    <div className="flex flex-row items-center justify-center gap-8">
      <div className="text-slate-100">
        <h1 className="text-2xl font-bold">Hey there! I'm <span className="text-amber-500">Carl</span></h1>
        <p className="">Passionate about all things code 💻</p>
        <p className="">Constantly learning 🔭</p>
        <p className="">Ramen lover 🍜</p>
      </div>
      <div>
        <img className="w-48 rounded-lg" src="src/assets/IMG_0812.jpg"/>
      </div>
    </div>
    )
  }

  return (
    <div className="App">
      <IntroComponent />
    </div>
  )
}

export default App
