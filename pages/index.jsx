import { useState , useEffect } from "react";
import dataFeatured from "../data/featured.json";
import dataHowStep from "../data/how.json";
import dataCollectors from "../data/collectors.json";
import Header from "../src/components/header/Header";
import Trending from "../src/components/trending/Trending";
import Auctions from "../src/components/auctions/Auctions"
import Footer from "../src/components/footer/Footer";
import How from "../src/components/how/How";
import Featured from "../src/components/featured/Featured";
import TopCollectors from "../src/components/collectors/TopCollectors";
import dataCards from "../data/cards.json";

export default function Index() {

  const [ featuredCrads , setFeaturedCards ] = useState([]);
  useEffect( () => {
    setFeaturedCards(dataFeatured);
  });

  const [ topCollectors , setTopCollectors ] = useState([]);
  useEffect( () => {
    setTopCollectors(dataCollectors);
  });

  const [ cards , setCards ] = useState([]);
  useEffect( () => {
    setCards(dataCards);
  });

  const [ howSteps , setHowSteps ] = useState([]);
  useEffect( () => {
    setHowSteps(dataHowStep);
  });

  return (
    <div className='wrapper'>
      <Header />
      <Featured items={featuredCrads.cards} />
      <Trending cards={cards.cards} />
      <TopCollectors collectors={topCollectors.collectors} />
      <How {...howSteps.how} />
      <Auctions cards={cards.liveCards} />
      <Footer />
    </div>
  );
}
