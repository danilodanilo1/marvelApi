import React from 'react'
import './style.scss'
import Logo from '../../images/logo-marvel-png.png'

import { Link } from 'react-router-dom'

export default function Header(props) {

  const { handleSearch, value, buscando, qtdHeroes, comics, placeholder } = props

  return (
    <div className="header-container">
      <Link to='/'><img className="logo-marvel" src={Logo} /></Link>
      <div>
        <input
          className="input"
          onChange={handleSearch}
          placeholder="  Search"
          value={value}
          placeholder={placeholder}

        />
        <button
          onClick={buscando}
        >Go
        </button>
      </div>
      <div className="header-menu">
        <p><Link to='/'>Heroes ({qtdHeroes})</Link></p>
        <p><Link to='/comics'>Comics ({comics})</Link></p>
        <p><Link to='/events'>Events (0)</Link></p>
        <a href='https://www.marvel.com/signin' className="sign-up">Sign-up</a>
      </div>
    </div>
  )
}
