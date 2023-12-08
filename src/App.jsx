import Navbar from "./components/NavBar/navbar";
import './App.css';
import AboutUS from "./AboutUS";
import ContactUS from "./ContactUS";
import Footer from "./components/Footer/footer";
import Home from "./Home";
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
      <Navbar />
      {component}
      
      <Footer/>
    </div>
  );
}

export default App;
