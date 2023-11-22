import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import { MemberCard, SpecCard, SurveyCard, } from "./components/Cards/cards";
// import{ MemberCard } from "./components/Cards/cards";
import './App.css';
import Testimonials from "./components/Testimonials/testimonials";
import Footer from "./components/Footer/footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <div className="gridcard">
        <div><SpecCard /></div>
        <div><MemberCard /></div>
      </div>
      <div className="item1"><SurveyCard /></div>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
