import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import Map from './components/Map.jsx';
import actions from './sendLocation.js'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="app-container">
        <h1>Occa</h1>
        <Search />
        <Map />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
