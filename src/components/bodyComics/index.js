import React, { Component } from 'react'
import './style.scss';
import ComicCard from '../comicCard'


export default class Comics extends Component {


  render() {
    return (
      <div className="comic-card-container" >
        {this.props.comics.map((comic, i) => (
          <ComicCard
            comic={comic} key={'cm-' + i}
          />
        ))}
      </div >

    )
  }
}