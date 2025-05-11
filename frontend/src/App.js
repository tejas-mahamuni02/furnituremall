
import './App.css';
import Footer from './components/Footer';
// import Furniture from './components/Furniture';
import Header from './components/Header';
import { UserProvider } from './components/UserContext';


function App() {
  return (
    <>
      <UserProvider>
        <Header></Header>
      </UserProvider>
      <Footer></Footer>

    </>
  );
}

export default App;
