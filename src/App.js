import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import { originals,actions } from './urls';


function App() {
  return (
    <>
     <NavBar/>
     <Banner/>
     <RowPost   title="Netflix Original" url={originals} /> 
     <RowPost   title="Action" url={actions} isSmall /> 
    </>
  );
}

export default App;

