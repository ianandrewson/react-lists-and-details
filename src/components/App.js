import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../components/Header/Header.js';
import Main from '../components/Main/Main.js';
import Detail from '../components/Detail/Detail.js';


export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path ='/detail' component={Detail} />
      </Switch>
    </>
  );
}
