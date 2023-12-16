import './App.css';
import ContactUS from "./ContactUS";
import Footer from "./components/Footer/footer";
import Home from "./Home";
import AboutUS from "./AboutUS";
import Header from "./components/Header";
import Frozenshoulder from './Services/Frozenshoulder';
import ACLReconstruction from './Services/ACLReconstruction';
import Fracture from './Services/Fracture';
import Arthroscopy from './Services/Arthroscopy';
import HipKneeArthroplasty from './Services/HipKneeArthroplasty';
import KneeOsteotomy from './Services/KneeOsteotomy';
import RevisionArthroplasty from './Services/RevisionArthroplasty';
import BankartRepair from './Services/BankartRepair';
import KneeReplacement from './Services/KneeReplacement';
import LigamentReconstruction from './Services/LigamentReconstruction';
import ShoulderArthroscopy from './Services/ShoulderArthroscopy';
import KneeArthroscopy from './Services/KneeArthroscopy';
import SpinalDeformityCorrection from './Services/Spinal Deformity Correction';
import SpinalFusion from './Services/SpinalFusion';
import RotatorCuffInjury from './Services/RotatorCuffInjury';
import NeckSpineSurgery from './Services/NeckSpineSurgery';
import SpinalDisorders from './Services/SpinalDisorders';
import SLAPLesions from './Services/SLAPLesions';
import Laminectomy from './Services/Laminectomy';
import JointReplacementSurgery from './Services/JointReplacementSurgery';
import SpinalSurgery from './Services/SpinalSurgery';
import SpinalDiscSurgery from './Services/SpinalDiscSurgery';
import Kyphoplasty from './Services/Kyphoplasty';
function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/AboutUS":
      component = <AboutUS />
      break
    case "/ContactUS>":
      component = <ContactUS />
      break
    case "/Services/Frozenshoulder":
      component = <Frozenshoulder />
      break
    case "/Services/ACLReconstruction":
      component = <ACLReconstruction />
      break
    case "/Services/Fracture":
      component = <Fracture />
      break
    case "/Services/Arthroscopy":
      component = <Arthroscopy />
      break
    case "/Services/HipKneeArthroplasty":
      component = <HipKneeArthroplasty />
      break
    case "/Services/KneeOsteotomy":
      component = <KneeOsteotomy />
      break
    case "/Services/RevisionArthroplasty":
      component = <RevisionArthroplasty />
      break
    case "/Services/BankartRepair":
      component = <BankartRepair />
      break
    case "/Services/KneeReplacement":
      component = <KneeReplacement />
      break
    case "/Services/LigamentReconstruction":
      component = <LigamentReconstruction />
      break
    case "/Services/ShoulderArthroscopy":
      component = <ShoulderArthroscopy />
      break
    case "/Services/KneeArthroscopy":
      component = <KneeArthroscopy />
      break
    case "/Services/SpinalDeformityCorrection":
      component = <SpinalDeformityCorrection />
      break
    case "/Services/SpinalFusion":
      component = <SpinalFusion />
      break
    case "/Services/RotatorCuffInjury":
      component = <RotatorCuffInjury />
      break
    case "/Services/NeckSpineSurgery":
      component = <NeckSpineSurgery />
      break
    case "/Services/SpinalDisorders":
      component = <SpinalDisorders />
      break
    case "/Services/SLAPLesions":
      component = <SLAPLesions />
      break
      case "/Services/Laminectomy":
        component = <Laminectomy />
        break
        case "/Services/JointReplacementSurgery":
        component = <JointReplacementSurgery />
        break
        case "/Services/SpinalSurgery":
        component = <SpinalSurgery />
        break
        case "/Services/SpinalDiscSurgery":
        component = <SpinalDiscSurgery />
        break
        case "/Services/Kyphoplasty":
        component = <Kyphoplasty />
        break
  }
  return (
    <div>
      <Header />
      {component}  
      <Footer />

    </div>
  );
}

export default App;
