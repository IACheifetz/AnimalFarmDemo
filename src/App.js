// import logo from './logo.svg';
import './App.css';
import './App.css';
import { animals } from './data.js';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main/Main';

function App() {
  return (
    <div className="App">
      <Header name={'Ian Cheifetz'}/>
      <Main animals={animals}/>
      <Footer year={'2022'}/>
    </div>
  );
}

export default App;
