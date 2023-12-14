import Navbar from "./components/NavBar/navbar";
import './App.css';
import About from "./AboutUS";
import ContactUS from "./ContactUS";
import Footer from "./components/Footer/footer";
import Home from "./Home";
import AboutUS from "./AboutUS";
import Banner from "./components/Banner";
import Header from "./components/Header";
function App() {
  let component 
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/AboutUS":
      component = <AboutUS />
      break
    case "/ContactUS/>":
      component= <ContactUS/>
      break
  }
  return (
    <div>
      {/* <Navbar />
      
      
      <Footer/> */}
      <Header/>
      {component}
      <Footer/>
      
    </div>
  );
}

export default App;
