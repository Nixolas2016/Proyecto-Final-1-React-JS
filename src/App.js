import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <ItemListContainer name='Nicolás'/>
      <Footer/>
    </div> 
  );
}

export default App;
