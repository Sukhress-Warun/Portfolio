import React from 'react'
import data from '../../utils/data.json'
import useSound from 'use-sound'
import { useEffect, useState } from 'react'
import './Navbar.css'

const Navbar = () => {
    const [navClass, setNavClass] = useState("")
    const [hoverSound] = useSound('/sounds/hover.wav', {playbackRate: 1.5, volume: 0.5})
    const [hoverReverseSound] = useSound('/sounds/hover-reverse.wav', {playbackRate: 1.5, volume: 0.5})
    const [selectSound] = useSound('/sounds/select.wav', {playbackRate: 1.5, volume: 0.5})
    let sections = data.sections

    const changeNavClass = () => {
        window.scrollY >= 50 ? setNavClass('grey-back') : setNavClass('');
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNavClass);
        return () => {
          window.removeEventListener('scroll', changeNavClass);
        }
      }, [])
    
    return (
        <nav className={"navbar sticky-top navbar-expand-lg navbar-dark dark-mode px-lg-5 grey-back-transistion" + " " + navClass}>
            <div className="container-fluid">
                <a className="navbar-brand fs-3 theme-color-1-text" href="#">
                    {"< / >"}
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onMouseEnter={hoverSound} 
                    onMouseLeave={hoverReverseSound} 
                    onClick={selectSound}
                >
                    <img src="/images/menu.png" alt="menu" height={"30px"} width={"30px"}/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {sections.map((section, i) => {
                            return (
                                <li className="nav-item fs-4 text-capitalize mx-3 mb-2" key={i} onMouseEnter={hoverSound} onMouseLeave={hoverReverseSound} onClick={selectSound}>
                                    <a className="nav-link light-dim-color-text" href={`${section.href}`}>
                                        {section.name}
                                    </a>
                                    <div className="line-animate theme-color-1-bg"></div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
