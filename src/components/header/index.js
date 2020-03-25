import React, { Component } from 'react'
import './style.scss'
import Logo from '../../images/logo-marvel-png.png'

import { Link } from 'react-router-dom'

export default class Header extends Component {
  state = {
    busca: ''
  }

  handleSearch = (e) => {
    this.setState({ busca: e.target.value })
    console.log(this.state.busca)
  }

  render() {
    return (
      <div className="header-container">
        <img className="logo-marvel" src={Logo} />
        <div>
          <input
            className="input"
            onChange={this.handleSearch}
            value={this.busca}
            placeholder="  Search" >

          </input>
        </div>
        <div className="header-menu">
          <p><Link to='/'>Heroes</Link></p>
          <p><Link to='/comics'>Comics</Link></p>
          <p><Link to='/events'>Events</Link></p>
          <a href='https://www.marvel.com/signin' className="sign-up">Sign-up</a>
        </div>
      </div>
    )
  }
}