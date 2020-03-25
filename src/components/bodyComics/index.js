import React, { Component } from 'react'
import './style.scss';
import { getComics } from '../../api'
import ComicCard from '../comicCard'


export default class Comics extends Component {
  constructor() {
    super();
    this.state = {
      comics: []
    }
  }
  componentWillMount() {
    getComics().then(data => {
      const results = data.data.data.results
      this.setState({ comics: results });
    });
  }

  render() {
    return (
      <div className="comic-card-container" >
        {this.state.comics.map((comic, i) => (
          <ComicCard
            comic={comic} key={'cm-' + i}
          />
        ))}
      </div >

    )
  }
}