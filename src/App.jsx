import React, { useEffect } from "react";
import HeaderNav from "../Components/Navbar/NavBar,";
import About from "../Components/About me/About";
import MySkill from "../Components/Skills/MySkill";
import MyProject from "../Components/Projects/MyProject";
import Expert from "../Components/ExperMove/Expert";
import Qualification from "../Components/Qualifications/Qualification";
import Contact from "../Components/Cobtact/Contact";
import Aos from "aos";
import 'aos/dist/aos.css'

function App() {
useEffect(()=>{
  Aos.init()
},[])
  return (
    <React.Fragment>
      <div className="app">
        <header>
              <HeaderNav />
        </header>
        <section>
              <About />
        </section>
        <main>
        <MySkill/>
        <MyProject/>
        <Expert/>
        <Qualification/>
        </main>
        <footer>
            <Contact/>
        </footer>
      </div>
    </React.Fragment>
  );
}

export default App;
