import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import NavBar from "./scenes/NavBar";

function App() {
  const [SelectedPage,setSelectedPage]=useState('home');
  const isMediumScreen=useMediaQuery('(min-width : 1060px)')
  const [isTopPage,setIsTopPage]=useState(true);
  useEffect(()=>{
    const HandleScrolling=()=>{
      setIsTopPage(window.scrollY===0)
    }
    window.addEventListener("scroll",HandleScrolling)
    return window.removeEventListener("scroll",HandleScrolling)
  })
  return (
    <div className="App">
      <NavBar SelectedPage={SelectedPage} isTopPage={isTopPage} setSelectedPage={setSelectedPage}></NavBar>
      <div className="w-5/6 mx-auto md:h-full">
        {isMediumScreen && 
        (
          <DotGroup
            SelectedPage={SelectedPage}
            setSelectedPage={setSelectedPage}
          />
        )
        }  
          <Landing setSelectedPage={setSelectedPage}/>
      </div> 
    </div>
  );
}

export default App;
