import React, { Component } from 'react'
import './style.scss';

import { Button, Modal } from 'react-bootstrap'



import { PARAMS } from '../../api';

export default class HeroCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  handleModal() {
    this.setState({ show: !this.state.show })
  }

  render() {

    //Desestruturar 
    let {
      id,
      digitalId,
      title,
      description,
      thumbnail

    } = this.props.comic;
    const { path, extension } = thumbnail;

    console.log(this.props);

    return (

      < div className="card-container" >


        <div className="header-card">
          <img className="comic-img" src={`${path}.${extension}${PARAMS}`} ></img>
        </div>

        <div className="title" >
          <p>{title}</p>
        </div>

        <div className="footer-card">
          <button onClick={() => { this.handleModal() }} >Description</button>
        </div>



        <Modal className="modal" show={this.state.show}>
          <Modal.Header >
            <img className="comic-img" ></img>
            <p>{title}</p>
          </Modal.Header>
          <Modal.Body>
            <p>{description === null ? "No description found" : description}</p>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={() => { this.handleModal() }} >Close</button>
          </Modal.Footer>
        </Modal>
      </div >

    )
  }
}