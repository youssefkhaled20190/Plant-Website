import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Header/Navbar';
import Banner from './Components/Banner/Banner';
import Services from './Components/Service/services';
import AboutUs from './Components/AboutUs/AboutUs';
import Popular from './Components/Popular/Popular';
import Review from './Components/Reviews/Reviews';
import Footer from './Components/Footer/Footer';
import ScrollUpButton from './Components/ScrollUp/ScrollUp';

function App() {
  return (
   <>
   <Navbar/>
   <Banner/>
   <Services/>
   <AboutUs/>
   <Popular/>
   <Review/>
   <Footer/>
   <ScrollUpButton/>
   </>
  );
}

export default App;
