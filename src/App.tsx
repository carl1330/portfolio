import { animate, motion } from "framer-motion"

function App() {

  const IntroComponent = () => {
    return (
    <div className="h-screen items-center flex justify-center -mt-14">
      <motion.div className="flex flex-row items-center justify-center gap-8"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
      >
        <div className="text-slate-100">
          <h1 className="text-2xl font-bold">Hey there! I'm <span className="text-amber-500">Carl</span></h1>
          <p className="">Constantly learning 🔭</p>
          <p className="">Passionate about all things code 💻</p>
          <p className="">Ramen lover 🍜</p>
        </div>
        <div>
          <img className="w-48 rounded-lg" src="https://lh3.googleusercontent.com/pw/AMWts8AqgdGMydJ0vi8RsW2nDvFPRhMUDpLZc9UkKCUuewsVzNVJUenoqimqkcB0HUzqWHUzjexbRvgSXl9ITcHeICvr5UmT2oSoGMaB_oByeMoAJxn5T9sO0sW9SYqS7Zj90GA1VdPAeml6_I20OPgf55TK0Q=w839-h903-no?authuser=0"/>
        </div>
      </motion.div>
    </div>
    )
  }

  const Navbar = () => {
    return (
      <div className="flex justify-center items-center text-slate-100 h-14">
        <div className="flex justify-evenly w-1/2">
          <div className="flex flex-row items-center gap-4">
            <motion.div className="cursor-pointer border-amber-500"
              whileHover={{ 
                scale: 1.1,
                borderBottom: "1px solid #f59e0b"
              }}
            >Home</motion.div>
            <motion.div className="cursor-pointer border-amber-500"
              whileHover={{ 
                scale: 1.1,
                borderBottom: "1px solid #f59e0b"
              }}>About</motion.div>
          </div>
          <div className="text-xl whitespace-nowrap">
            Carl Gulliksson
          </div>
          <div className="flex flex-row items-center gap-4">
            <motion.div className="cursor-pointer border-amber-500"
              whileHover={{ 
                scale: 1.1,
                borderBottom: "1px solid #f59e0b"
              }}>Projects</motion.div>
            <motion.div className="cursor-pointer border-amber-500"
              whileHover={{ 
                scale: 1.1,
                borderBottom: "1px solid #f59e0b"
              }}>Contact</motion.div>
          </div>
        </div>
      </div>
    )
  }

  const About = () => {
    return(
      <div className="bg-slate-800 flex justify-center p-6">
        <div className="flex flex-col w-1/2">
          <div className="text-slate-100 text-2xl">About</div>
          </div>
      </div>
    )
  }

  return (
    <div className="App">
      <Navbar />
      <IntroComponent />
      <About />
    </div>
  )
}

export default App
