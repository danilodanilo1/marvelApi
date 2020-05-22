import React, { Component } from 'react'

import Header from '../../components/header'
import Footer from '../../components/footer'
import BodyEvents from '../../components/bodyEvents'
const event = ['evento1', 'evento2']
export default class Heroes extends Component {



  render() {



    return (
      <>
        <Header
          qtd={this.event.length}
        />
        <BodyEvents />
        <Footer />
      </>
    )

  }
}