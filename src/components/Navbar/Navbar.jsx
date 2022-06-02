import React, { useState } from 'react'
import { Link } from 'react-scroll'

import MenuRoundedIcon from '@mui/icons-material/MenuRounded'

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false)
  console.log(openMenu)

  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <Link to='header' spy={true} smooth={true} offset={-90} duration={500}>
          FC
        </Link>
      </div>
      <MenuRoundedIcon
        style={{
          display: 'none',
          fontSize: '40px',
          zIndex: 1,
          cursor: 'pointer',
        }}
        onClick={() => {
          setOpenMenu(!openMenu)
        }}
      />
      <div
        className={openMenu ? 'overlay active' : 'overlay'}
        onClick={() => {
          setOpenMenu(false)
        }}
      ></div>
      <div className={openMenu ? 'navbar__links active' : 'navbar__links'}>
        <Link
          to='projects'
          className='navbar__main-link'
          activeClass='active'
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
          onClick={() => {
            setOpenMenu(false)
          }}
        >
          Projects
        </Link>
        <Link
          to='skills'
          className='navbar__main-link'
          activeClass='active'
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
          onClick={() => {
            setOpenMenu(false)
          }}
        >
          Skills
        </Link>
        <Link
          to='contact'
          className='navbar__main-link'
          activeClass='active'
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
          onClick={() => {
            setOpenMenu(false)
          }}
        >
          Contact
        </Link>
        <Link
          to='about'
          className='navbar__main-link'
          activeClass='active'
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
          onClick={() => {
            setOpenMenu(false)
          }}
        >
          About
        </Link>
        <a
          href='https://drive.google.com/file/d/1SNYKaEqe0V3wyqZ4Ylb_Fo7dy69m8xKg/view?usp=sharing'
          target={'_blank'}
          rel='noreferrer'
        >
          <button> Resume </button>
        </a>
      </div>
    </div>
  )
}

export default Navbar
