import * as React from 'react';
import './App.css';
import Products from './pages/Products';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Products />
      </div>
    );
  }
}

export default App;
