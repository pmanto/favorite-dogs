import './style.css';
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import NavBar from '../NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Discover from '../Discover';
import Favorite from '../Favorite';

library.add(fas);

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <div className='App-content'>
            <Routes>
              <Route path='/' element={<Discover count={6}/>}/>
              <Route path='/favorites' element={<Favorite />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
