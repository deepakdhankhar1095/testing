import About from "../components/About";
import Footer from "../components/Footer";
import CultureBanners from "../components/cultureBanners";
import BannerContent from "../components/BannerContent";
import ExploreSection from "../components/ExploreSection";
import BookMyShow from "../components/bookMyShow";
import EventPartners from "../components/EventPartners";
import JoinUBH from "../components/joinUBH";
import WhatsAppButton from "../components/whatsapp";
import React from 'react';
import EventTable from "../components/EventTable";
import SearchBar from "../components/searchBar";
const Home = () => {
  return (
    <div>
      <BannerContent />
      {/* for now */}
      <div style={{marginTop:'50px'}}>  
        <SearchBar/>
      </div>
      <EventTable/>
      <ExploreSection />
      <EventPartners/>
      <BookMyShow/>
      <About /> 
      {/* <CultureBanners /> */}
      <JoinUBH/>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Home;
