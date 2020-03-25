import React, { Component } from 'react'
import './style.scss';

import { Button, Modal } from 'react-bootstrap'



import { PARAMS } from '../../api';

export default class HeroCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDesc: false,
      showComic: false
    }
  }

  handleModalDesc() {
    this.setState({ showDesc: !this.state.showDesc })
  }

  handleModalComic() {
    this.setState({ showComic: !this.state.showComic })
  }

  render() {

    //Desestruturar 

    let {
      id,
      name,
      description,
      modified,
      thumbnail,
      resource,
      comics,
      series,
      stories,
      events,
      url,
    } = this.props.hero;

    const { path, extension } = thumbnail;
    const { items } = comics;


    const nome = items.map((item) => {
      return item.name
    })

    console.log(nome);
    // console.log(this.props);
    return (

      < div className="hero-card-container" >

        <div className="header-card">
          <img className="hero-img" src={`${path}.${extension}${PARAMS}`}></img>
        </div>

        <div className="nome" >
          <p>{name} </p>
        </div>

        <div className="footer-card">
          <button onClick={() => { this.handleModalDesc() }} >Description</button>
          <button onClick={() => { this.handleModalComic() }} >Comics</button>
        </div>

        {/* Modal de descrição */}
        <Modal className="modalDesc" show={this.state.showDesc}>
          <Modal.Header >
            <img className="hero-img" src={`${path}.${extension}${PARAMS}`}></img>
            <p>{name}</p>
          </Modal.Header>
          <Modal.Body>
            <p>{description === '' ? 'No description' : description}</p>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={() => { this.handleModalDesc() }} >Close</button>
          </Modal.Footer>
        </Modal>

        {/* Modal de revistas */}
        <Modal className="modalComic" show={this.state.showComic}>
          <Modal.Header >
            <p>{name}</p>
          </Modal.Header>
          <Modal.Body>
            <p>{nome}</p>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={() => { this.handleModalComic() }} >Close</button>
          </Modal.Footer>
        </Modal>
      </div >

    )
  }
}