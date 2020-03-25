import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import Main from '../pages/main'
import Comics from '../pages/comics'
import Events from '../pages/events'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/comics" component={Comics} />
        <Route path="/events" component={Events} />
      </Switch>
    </BrowserRouter>
  )
}
