import { useQuery } from "@apollo/client";

import CardList from "../components/CardList";
import CardForm from "../components/CardForm";

import { QUERY_CARDS } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_CARDS);
  const cards = data?.cards || [];

  return (
    <main>
      <div className='flex-row justify-center'>
        <div
          className='col-12 col-md-10 mb-3 p-3'
          style={{ border: "1px dotted #1a1a1a" }}
        >
          <CardForm />
        </div>
        <div className='col-12 col-md-8 mb-3'>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <CardList cards={cards} title='Witcher Cards' />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
