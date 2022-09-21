import './style.css';
import React from 'react';
import Grid from '../Grid';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import NavBar from '../NavBar';

library.add(fas);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className='App-content'>
          <Grid count={6}></Grid>
        </div>
      </div>
    );
  }
}

export default App;
