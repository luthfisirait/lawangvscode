/* eslint-disable react/jsx-no-comment-textnodes */

import About from "./components/About";
import EventDonation from "./components/EventDonation";
import Footer from "./components/Footer";
import Locationme from "./components/Locationme";
import MainPage from "./components/Mainpage";
import Navbar from "./components/Navbar";
import Team from "./components/Team";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {
  return (
  <div>
     <Navbar/>
    <MainPage id ='home'/>
    <About id='about'/>
    <Team id='ourteam'/>
    {/*<EventDonation/>*/}
   <Locationme/>
   <Footer/>
  </div>
  );
}
