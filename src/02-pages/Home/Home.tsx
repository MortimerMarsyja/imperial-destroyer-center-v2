// hooks
import useFetch from "04-hooks/use-fetcher";
import { useEffect, useReducer } from "react";
import useSWR from "swr";
// styles
import StyledHome from "./Home.styled";
// components
import Image from "@components/Image";
import Card from "@components/Card";
import Pagination from "@components/Pagination";
import ComboSelect from "@components/ComboSelect";
import BottomControlsWrapper from "@components/BottomControlsWrapper";
// reducers
import reducerPlanetList, {
  initialState as planetListInitialState,
  SortByType,
} from "@reducers/reducerGeneric";
// utils
import { formatPopulation } from "@utils/numberFormat";
import { formatImage } from "@utils/formatImage";
import { Planet } from "@myTypes/Planet";

const planetsUrl = "src/06-assets/planets/";

type OptionsType = {
  name: string;
  value: SortByType;
};

const options: OptionsType[] = [
  { name: "-", value: "" },
  { name: "Name", value: "name" },
  { name: "Terrain", value: "terrain" },
  { name: "Population", value: "population" },
];

interface SWAPI<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

const Home = () => {
  const { fetcher } = useFetch();
  const [state, dispatch] = useReducer(
    reducerPlanetList,
    planetListInitialState
  );
  const { planetList, page, totalPages } = state;
  const { data, isLoading } = useSWR<SWAPI<Planet>>(
    `planets/?page=${page}`,
    fetcher
  );
  const { next, previous } = data || {};

  useEffect(() => {
    if (data) {
      dispatch({
        type: "PLANET_LIST_LOADED",
        payload: { planetList: data.results, count: data.count },
      });
    }
  }, [data]);

  const handleComboSelect = (incoming: any) => {
    const { selectedValue, order } = incoming;
    const { value } = selectedValue;
    dispatch({
      type: "PLANET_LIST_SORT",
      payload: {
        sort: order,
        sortBy: value,
      },
    });
  };

  return (
    <StyledHome>
      {isLoading && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "calc(50% - 100px)",
            zIndex: 100,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            height: "100vh",
          }}
        >
          Loading...
        </div>
      )}
      {!isLoading &&
        planetList.map((planet: Planet) => (
          <Card key={planet.name}>
            <Image
              width={300}
              height={140}
              alt={planet.name}
              onError={(e) => {
                e.currentTarget.src = `https://images.hdqwalls.com/download/joyful-planet-4k-ly-2560x1700.jpg`;
              }}
              pngSRC={`${planetsUrl}${formatImage(planet.name)}.png`}
              jpgSRC={`${planetsUrl}${formatImage(planet.name)}.jpg`}
            />
            <ul>
              <li>{planet.name}</li>
              <li>
                <p>{planet.terrain}</p>
              </li>
              <li>
                <p>{formatPopulation(planet.population)}</p>
              </li>
            </ul>
          </Card>
        ))}
      <BottomControlsWrapper>
        <>
          <ComboSelect
            options={options}
            inOrder="asc"
            getComboValue={(incoming: any) => handleComboSelect(incoming)}
          />
          <Pagination
            nextPage={() => dispatch({ type: "PLANET_LIST_NEXT" })}
            prevPage={() => dispatch({ type: "PLANET_LIST_PREVIOUS" })}
            currentPage={page}
            totalPages={totalPages}
            nextDisabled={isLoading || !next}
            prevDisabled={isLoading || !previous}
          />
        </>
      </BottomControlsWrapper>
    </StyledHome>
  );
};

export default Home;
