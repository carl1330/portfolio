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
          <img className="w-48 rounded-lg" src="https://lh3.googleusercontent.com/EjZDFNMpeAGSLTkTDxU6ZLP8MhDdTZNuMGgWNK2SB37p6w9de-R4_a4UY4slICg8NV8VRZHFME6rDwRXbj2goRM5hhupJSr3epWy9CL0X1zN7ZWQIPmtKetkrFjUNO1xaZGGpn98ykWWeG487QH3yA6rtU1pq32mG3ELg9IsgJvY8FGlUj40zjgLIrPcOeXZ-hSNd8pOTCQ1Ys_LDu1sPE5ljCr2wICPlbpw-6K2nKnLoV8Jat2k07QsIdnl39smTsn4ZJE20166IXVXJEYVgDamOYMBn2M-LXnYwNJAdIPk94g06H9FnWN5tu3BbTu3fl0_GuvCGl6S7XG0OTAOfuZKIEg0yq-eCo1pD1SYkYYu7CvXVEWijdU2Dr3sELtFthAZrHgC2IRy1XsBPzJiMPP48B3oTwh8JuJJVPDJ9ZTwhjIJZlM0nfj7CdBvJioG_Rg6F1C_Nd9vFeNozFsuTocQSyx2ETpcJPijfKZLQ6pCuxcecb-sJF8n3Z3MCShkYqiMUHPPP7aTIZCIUboZe_xN06ojxEmaoBEuPVQTmQU4D23nEAowkZXmB8HmmUWdEt8mwXVdbBsyEhYQTknNbmwhb3EknawtDiRlrTr4HIWyuPx7U0ANM_mtdaJah0hRs23rhsCAQp8u0kpRLnesLhSAFdByob7TLq2FNBVI6ucSllbWHMVlpuKdLiBvQbJlmRDcTRiPtLiKBHEmRIbL0PCgX8s_EG88fjb9j34muKfpaBY6gJ7qwat0QZVj0iiH0Fw2JSdVEHp5qxWCGrufjo-6fUAzEdS6Yc6MElXsLj7wtpDjl3y2w9W4CvZs-3YWU12zUO6V27dYLZ7Wapmu9bX6hYB7TKx1zJau8mODRUq43u70TXS0vs1B75tm7ryedvVD8Bd4Nt6Pf5Q-Qa7MG05dmbVO46wh5nCiBsTQwcIaGTVevg=w767-h827-no?authuser=0"/>
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
          <div className="text-xl">
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

  return (
    <div className="App">
      <Navbar />
      <IntroComponent />
    </div>
  )
}

export default App
