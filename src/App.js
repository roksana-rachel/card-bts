import React, {useEffect, useState} from "react";
import Footer from "./components/Footer";
import LoadingLogo from "./components/LoadingLogo";
import Header from "./components/Header";
import About from "./components/About";
import Single from "./components/Single";
import Album from "./components/Album";
import SideBar from "./components/Sidebar";

function App() {

  const [loading, setLoading] = useState(true)
  const [visible, setVisible] = useState(false)
  const [sidebarOpen, setSideBarOpen] = useState(false);

  useEffect(() => {
    document.title = 'BTS';
    document.body.style.backgroundColor = '#dae2ed';
    setTimeout(() => setLoading(false), 1500)
  }, []);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200){
      setVisible(true)
    } 
    else if (scrolled <= 200){
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }

  window.addEventListener('scroll', toggleVisible);

  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };

  return (
      <div>

        {loading === false ? (
          <div className="App">

            <SideBar isOpen={sidebarOpen} closeSidebar={handleViewSidebar} sendSidebar={handleViewSidebar}/>

            <Header></Header>

              <div class="button-div">
                <button class="button-contact" onClick={handleViewSidebar}
                  >KONTAKT
                </button>
              </div>

            <About></About>
            <Album></Album>
            <Single></Single>
            <button onClick={scrollToTop} class="top-button"
              style={{display: visible ? 'inline' : 'none'}}>
              ^
            </button>
            <Footer></Footer>
          </div>
          ) : (
            <LoadingLogo />
        )}


      </div>
  );
}

export default App;
