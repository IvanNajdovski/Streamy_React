import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import StreamList from './streams/StreamList';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import StreamEdit from './streams/StreamEdit';
import StreamCreate from './streams/StreamCreate';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="ui container">
         <Header />
            <div>
                <Switch>
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" exact component={StreamCreate} />
                    <Route path="/streams/edit/:id" component={StreamEdit} />
                    <Route path="/streams/delete/:id" component={StreamDelete} />
                    <Route path="/streams/:id" component={StreamShow} />
                </Switch>
            </div>
      </div>
    );
  }
}

export default App;
