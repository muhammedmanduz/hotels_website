import { useQuery } from "@tanstack/react-query";
import { getPlaces } from "../../api";
import Loader from "../../components/loader";
import Error from "../../components/error";
import { Place } from "../../types";
import Card from "../../components/card";
import { useSearchParams } from "react-router-dom";

const List = () => {
    //url deki parametreleri al ve nesne haline getir
const [params]=useSearchParams();
const paramsObj=Object.fromEntries(params.entries());

console.log(paramsObj)

  const { isLoading, data, error, refetch } = useQuery<Place>({
    queryKey: ["places",paramsObj],
    queryFn: () => getPlaces(paramsObj),
  });

  console.log(data);

  return (
    <div className="mt-10">
      <h1 className="font-bold text-xl">Yakınınızdaki Lokasyonlar</h1>

      <div>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error info={error}  refetch={refetch}/>
        ) : (
          <div className="grid gap-3 mt-5">
            {data?.map((place) => (
              <Card key={place.id} place={place} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
