import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
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
