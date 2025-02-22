
import './App.css';
import Header from './components/header/Header';
import Achievments from './components/achievements/Achievments';
import AboutUs from './components/abousUs/AboutUs';
import Projects from './components/prjects/Projects'
import WhyUs from './components/whyUs/WhyUs';
import Buttons from './components/header/Buttons';
import Footer from './components/footer/Footer';
import CallUs from './components/callUs/CallUs'
function App() {
  return (
    <div className="App">
      <Buttons/>
     <Header/> 
      <Achievments/>
      <AboutUs/>
      <Projects/>
      <WhyUs/>
      <CallUs/>
      <Footer/>
    </div>
  );
}

export default App;
