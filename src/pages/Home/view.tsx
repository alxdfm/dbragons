import _ from "lodash";
import Button from "../../components/Button";
import DragonCard from "../../components/DragonCard";
import Spinner from "../../components/Spinner";
import useHomeModel from "./model";
import "./styles.css";

function HomeView({
  dragons,
  deleteDragon,
  navigate,
}: ReturnType<typeof useHomeModel>) {
  return (
    <div className="container-home">
      {_.isEmpty(dragons) ? (
        <Spinner />
      ) : (
        <>
          <div>
            <Button
              content="Criar dragão"
              type="button"
              onClick={() => navigate("/dragon/create")}
            />
          </div>
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
        </>
      )}
    </div>
  );
}

export default HomeView;
