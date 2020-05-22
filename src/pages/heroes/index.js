import React, { Component } from 'react';

import Header from '../../components/header'
import BodyHome from '../../components/bodyHome'
import Footer from '../../components/footer'
import { getComics } from '../../api'



import { getHeroes } from '../../api';

export default class Main extends Component {

  constructor(props) {
    super(props)
    this.state = {
      busca: '',
      heroes: [],
      comics: []
    }

  }



  componentDidMount() {
    getHeroes().then(data => {
      const results = data.data.data.results
      this.setState({ heroes: results });
    });
    getComics().then(data => {
      const results = data.data.data.results
      this.setState({ comics: results });

    });


  }

  componentWillMount() {
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
    const heroi = this.state.heroes
    const busca = this.state.busca

    if (this.state.busca) {
      const response = heroi.filter((hero) => {
        if (hero.name === busca) {
          return true
        } else {
          return false
        }
      })
      this.limpar()
      this.setState({ heroes: response })
    } else {
      console.log('entrou')
      getHeroes().then(data => {
        const results = data.data.data.results
        this.setState({ heroes: results });
      });
      this.limpar()
    }

  }


  render() {
    return (
      <>
        <Header
          handleSearch={this.handleSearch}
          value={this.state.busca}
          buscando={this.buscando}
          qtdHeroes={this.state.heroes.length}
          comics={this.state.comics.length}
          placeholder={'   Find a hero'}
        />
        <BodyHome
          heroes={this.state.heroes}
        />
        <Footer />
      </>
    );
  }





}

