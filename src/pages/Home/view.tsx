import DragonCard from "../../components/DragonCard";
import useHomeModel from "./model";
import "./styles.css";

function HomeView({ dragons, deleteDragon }: ReturnType<typeof useHomeModel>) {
  return (
    <div className="container-home">
      <h1>Dragões:</h1>
      <div>
        {dragons.map((dragon) => (
          <DragonCard
            id={dragon.id}
            createdAt={dragon.createdAt}
            name={dragon.name}
            type={dragon.type}
            key={dragon.id}
            deleteDragon={deleteDragon}
          />
        ))}
      </div>
    </div>
  );
}

export default HomeView;
