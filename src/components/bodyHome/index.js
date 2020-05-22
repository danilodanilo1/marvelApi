import React, { Component } from 'react'
import HeroCard from '../heroCard'
import './style.scss'


export default class BodyHome extends Component {

  render() {
    return (
      <div className="body-container">
        {this.props.heroes.map((hero, i) => (
          <HeroCard
            hero={hero} key={'hr-' + i}
          />
        ))}
      </div>
    )
  }
}