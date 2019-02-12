import React, { Component } from 'react';
import Articles from '../components/Articles';
import '../styles/Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <ul className="nav nav-tabs">
          <li className="active"><a data-toggle="tab" href="#artigos">Artigos</a></li>
          <li className=""><a data-toggle="tab" href="#dicas">Dicas</a></li>
          <li><a data-toggle="tab" href="#forum">Fórum</a></li>
          <li className=""><a data-toggle="tab" href="#scripts">Scripts</a></li>
        </ul>
        <Articles/>
      </div>
    );
  }
}

export default Home;