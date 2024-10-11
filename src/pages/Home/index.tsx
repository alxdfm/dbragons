import useHomeModel from "./model";
import HomeView from "./view";

function Home() {
  const homeModel = useHomeModel();
  return <HomeView {...homeModel} />;
}

export default Home;
