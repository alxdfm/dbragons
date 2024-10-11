import useHomeModel from "./model";
import "./styles.css";

function HomeView({ teste }: ReturnType<typeof useHomeModel>) {
  return <div className="container-home">{teste}aaaaaaaaaaaa</div>;
}

export default HomeView;
