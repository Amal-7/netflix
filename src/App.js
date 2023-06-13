import NavBAr from "./Components/NavBar/NavBAr";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { action, comedy, horror, originals } from './urls'

function App() {
  return (
    <>
    <NavBAr />
    <Banner />
    <RowPost url={originals} title ='Netflix Originals' />
    <RowPost url={action} title='Action Movies' isSmall />
    <RowPost url={comedy} title='Comedy Movies' isSmall />
    <RowPost url={horror} title='Horror Movies' isSmall />
    </>
  );
}

export default App;
