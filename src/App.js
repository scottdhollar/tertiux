import React from "react";
import Navbar from "./Navbar";
import Links from "./Links";
import About from "./About";
import Subscription from "./Subscription";
import Menu from "./Menu";
import AboutBig from "./AboutBig";
import Preloader from "./Preloader";
import Chatbubble from "./Chatbubble";

export default function App(){
    const [uiSettings, setUiSettings] = React.useState(
        {
            showMenu: false,
            showSubscription: false,
            showWhatsapp: false,
            showEmail: false,
            showGithub: false,
            showLinkedin: false,
            showAboutBig: false,
            containerOverflow: true,
            showBackdrop:false,
            darkMode:false,
        }
    )

    function toggleDarkMode(){
        setUiSettings((prevState)=>{return({...prevState, darkMode: !prevState.darkMode})})
    }


    function aboutBig(){
        setUiSettings(
            (prevState)=>{
                return({
                    ...prevState, showAboutBig: !prevState.showAboutBig, containerOverflow: !prevState.containerOverflow
                })
            }
        )
    }
    const [isOpen, setIsOpen] = React.useState(false);

    function menuToggle(){
        setUiSettings(
            (prevState)=>{
                return({
                    ...prevState, showMenu: !prevState.showMenu
                })
            }
        )
        setIsOpen(function(prevState){
            return(!prevState)
        });
    }
    
    function menuToggleX(){
        setUiSettings(
            (prevState)=>{
                return({
                    ...prevState, showMenu: false
                })
            }
        )
        setIsOpen(function(prevState){
            return(!prevState)
        });
    }

    function darkModeTotal(){
        const today = new Date()
            let hour = today.getHours()
            console.log(hour)
            if (hour > 16 || hour < 7){
                setUiSettings(
                    (prevState)=>{
                        return({...prevState, darkMode: true})
                    }
                )
                return
            }
    }

    document.addEventListener("contextmenu", (event)=>{
        event.preventDefault()
    })


//   const openSwipeMenu = () => {
//   };

//   const closeSwipeMenu = () => {
//     setIsOpen(false);
//   };
    React.useEffect(
        function(){
            darkModeTotal()
        }, []
    )



    return(
        <div className={uiSettings.darkMode ? "container dark" : "container"}>
            <Navbar className="navbar" onNextii={aboutBig} onNext={menuToggle}/>
            <About className="about"/>
            <Links className="links"/>
            <Subscription className="subscription"/>
            <Preloader className="preloader"/>
            <Chatbubble className="chatbubble"/>
            <Menu darkMode={uiSettings.darkMode} isOpen={isOpen} swipeUp={menuToggleX} className={uiSettings.showMenu?"show menu":"menu"} onClick={toggleDarkMode}/>
            <div onClick={menuToggleX} className={uiSettings.showMenu ? "show backdrop" : "backdrop"}></div>
            <AboutBig onPrev={aboutBig} className={uiSettings.showAboutBig ? "show about-bigger" : "about-bigger"}/>
        </div>
    )
}