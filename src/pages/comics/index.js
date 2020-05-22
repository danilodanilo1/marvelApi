import React, { Component } from 'react'

import Header from '../../components/header'
import Footer from '../../components/footer'
import BodyComics from '../../components/bodyComics'

import { getComics } from '../../api'
import { getHeroes } from '../../api'


export default class Heroes extends Component {

  constructor() {
    super();
    this.state = {
      comics: [],
      heroes: [],
      busca: ''
    }
  }
  componentDidMount() {
    getComics().then(data => {
      const results = data.data.data.results
      this.setState({ comics: results });
    });

    getHeroes().then(data => {
      const results = data.data.data.results
      this.setState({ heroes: results });
    });
  }

  handleSearch = (e) => {
    this.setState({ busca: e.target.value })
  }

  limpar = () => {
    this.setState({ busca: '' })
  }

  buscando = () => {
    const revistas = this.state.comics

    const busca = this.state.busca

    if (this.state.busca) {
      const response = revistas.filter((comic) => {

        if (comic.title === busca) {
          return true
        } else {
          return false
          console.log('busca sem resultado')
        }
      })
      this.limpar()
      this.setState({ comics: response })


    } else {
      getComics().then(data => {
        const results = data.data.data.results
        this.setState({ comics: results });
        console.log('errou')
      });
      this.limpar()
    }
  }

  render() {
    return (
      <>
        <Header
          comics={this.state.comics.length}
          qtdHeroes={this.state.heroes.length}
          buscando={this.buscando}
          value={this.state.busca}
          handleSearch={this.handleSearch}
          placeholder={'   Find a comic'}
        />
        <BodyComics
          comics={this.state.comics}
        />
        <Footer />
      </>
    )
  }
}