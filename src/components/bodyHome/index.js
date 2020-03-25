import React, { Component } from 'react'
import HeroCard from '../heroCard'
import './style.scss'
import { getHeroes } from '../../api'


export default class BodyHome extends Component {
  constructor() {
    super()
    this.state = {
      heroes: []
    }
  }
  componentWillMount() {
    getHeroes().then(data => {
      const results = data.data.data.results
      this.setState({ heroes: results });
    });
  }

  render() {
    return (
      <div className="body-container">
        {this.state.heroes.map((hero, i) => (
          <HeroCard
            hero={hero} key={'hr-' + i}
          />
        ))}
      </div>
    )
  }
}