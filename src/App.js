import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import Footer from './Components/Footer/Footer'
import { originals,actions, adventure, animation, comedy, crime, documentary, family, fantasy, horror, history } from './urls';


function App() {
  return (
    <>
     <NavBar/>
     <Banner/>
     <RowPost   title="Netflix Original" url={originals} /> 
     <RowPost   title="Action" url={actions} isSmall />
     <RowPost   title="Adventure" url={adventure} isSmall />
     <RowPost   title="Animation" url={animation} isSmall />
     <RowPost   title="Comedy" url={comedy} isSmall />
     <RowPost   title="Crime" url={crime} isSmall />
     <RowPost   title="Documentary" url={documentary} isSmall />
     <RowPost   title="Family" url={family} isSmall />
     <RowPost   title="Fantasy" url={fantasy} isSmall />
     <RowPost   title="History" url={history} isSmall />
     <RowPost   title="Horror" url={horror} isSmall />
     <Footer/>
    </>
  );
}

export default App;

