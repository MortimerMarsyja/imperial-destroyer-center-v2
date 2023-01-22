// hooks
import useFetch from "04-hooks/use-fetcher";
import { useEffect, useReducer } from "react";
import useSWR from "swr";
// styles
// components
import Image from "@components/Image";
// utils
import { formatPopulation } from "@utils/numberFormat";
import { planetStateReducer } from "@reducers/planetsStateReducer";
import { formatImage } from "@utils/formatImage";
import StyledHome from "./Home.styled";
import Card from "@components/Card";
import Pagination from "@components/Pagination";
import ComboSelect from "@components/ComboSelect";
import BottomControlsWrapper from "@components/BottomControlsWrapper";
const planetsUrl = "src/06-assets/planets/";

const initialState = {
  planetList: [],
  page: 1,
  link: "planets",
  totalPages: 0,
  sort: "asc",
  filterBy: "name",
};

const options = [
  { name: "-", value: "" },
  { name: "Name", value: "name" },
  { name: "Terrain", value: "terrain" },
  { name: "Population", value: "population" },
];

const Home = () => {
  const { fetcher } = useFetch();
  const [state, dispatch] = useReducer(planetStateReducer, initialState);
  const { planetList, page, link, totalPages } = state;
  const { data, isLoading } = useSWR(link, fetcher);
  const { results, count } = data || {};

  const handleComboSelect = (incoming: any) => {
    const { selectedValue, order } = incoming;
    const { value } = selectedValue;
    dispatch({
      type: "FILTER_PLANET_LIST_BY",
      payload: {
        sort: order,
        filterBy: value,
        planetList: planetList,
      },
    });
  };

  useEffect(() => {
    if (data) {
      if (results) {
        dispatch({
          type: "UPDATE_PLANET_LIST",
          payload: {
            planetList: results,
          },
        });
      }
      if (count) {
        dispatch({
          type: "SET_TOTAL_PAGES",
          payload: {
            count: count,
          },
        });
      }
    }
  }, [results]);

  return (
    <StyledHome>
      {isLoading && <p>Loading...</p>}
      {!isLoading &&
        planetList?.map((planet: any) => (
          <Card>
            <Image
              width={300}
              height={140}
              alt={planet.name}
              onError={(e) => {
                e.currentTarget.src = `https://images.hdqwalls.com/download/joyful-planet-4k-ly-2560x1700.jpg`;
              }}
              pngSRC={`${planetsUrl}${formatImage(planet.name)}.png`}
              jpgSRC={`${planetsUrl}${formatImage(planet.name)}.jpg`}
              src={`${planetsUrl}${formatImage(planet.name)}.jpg`}
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
        <ComboSelect
          options={options}
          inOrder="asc"
          getComboValue={(incoming: any) => handleComboSelect(incoming)}
        />
        <Pagination
          nextPage={() => dispatch({ type: "NEXT_PAGE" })}
          prevPage={() => dispatch({ type: "PREV_PAGE" })}
          currentPage={page}
          totalPages={totalPages}
          nextDisabled={page === totalPages || isLoading}
          prevDisabled={page === 1 || isLoading}
        />
      </BottomControlsWrapper>
    </StyledHome>
  );
};

export default Home;
