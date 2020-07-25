import React, { Fragment } from 'react';
import { Header, Footer } from './Layouts';
import Sandbox from './Sandbox';

function App() {
  return (
    <Fragment>
      <Header/>
      <Sandbox/>
      <Footer/>
    </Fragment>
  );
}

export default App;
