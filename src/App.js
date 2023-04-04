import logo from './logo.svg';
import './App.css';
import './index.css';
import HeaderComp from './HeaderComp';
import MainComp from './MainComp';
import FooterComp from './FooterComp';


function App() {
  return (
    <div className="App">
      <HeaderComp/>
      <MainComp/>
      <FooterComp/>
    </div>
  );
}

export default App;
