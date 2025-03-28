import { useState, useEffect } from "react";

export default function Lab2() {
  const [data, setData] = useState("");
  const [grid, setGrid] = useState(true);
  const [search, setSearch] = useState("");
  const [clothes, setClothes] = useState("");
  const [instruments, setIntruments] = useState("");
  const [HistoricalTools, setHistoricalTools] = useState("");
  const [EthnicGroups, setEthnicGroups] = useState("");
  const [HistoricalFigures, setHistoricalFigures] = useState("");
  const [TouristAttractions, setTouristAttractions] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://mongol-api-rest.vercel.app/clothes"
        );
        const result = await response.json();
        setClothes(result.clothes);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://mongol-api-rest.vercel.app/instruments"
        );
        const result = await response.json();
        setIntruments(result.instruments);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://mongol-api-rest.vercel.app/HistoricalTools"
        );
        const result = await response.json();
        setHistoricalTools(result.historicalTools);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://mongol-api-rest.vercel.app/EthnicGroups"
        );
        const result = await response.json();
        setEthnicGroups(result.ethnicGroups);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://mongol-api-rest.vercel.app/HistoricalFigures"
        );
        const result = await response.json();
        setHistoricalFigures(result.historicalFigures);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://mongol-api-rest.vercel.app/TouristAttractions"
        );
        const result = await response.json();
        setTouristAttractions(result.touristAttractions);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);


  console.log(clothes);
  console.log(instruments);
  console.log(HistoricalTools);
  console.log(EthnicGroups);
  console.log(HistoricalFigures);
  console.log(TouristAttractions);


  return (
    <div className="grid grid-cols-4 gap-4">
      {(clothes || [])?.map((item) => (
        <div key={item.id} className="border bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center">
          <img src={item?.images[0]} className="w-60 h-40"/>
          <h2 className="text-xl font-semibold text-gray-700">{item.name}</h2>
          <p className="text-gray-600 mt-2">{item.description}</p>
        </div>
      ))}
      {(instruments || [])?.map((item) => (
        <div key={item.id} className="border bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center">
          <img src={item?.images[0]} className="w-60 h-40"/>
          <h2 className="text-xl font-semibold text-gray-700">{item.name}</h2>
          <p className="text-gray-600 mt-2">{item.description}</p>
        </div>
      ))}
      {(HistoricalTools || [])?.map((item) => (
        <div key={item.id} className="border bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center">
          <img src={item?.images[0]} className="w-60 h-40"/>
          <h2 className="text-xl font-semibold text-gray-700">{item.name}</h2>
          <p className="text-gray-600 mt-2">{item.description}</p>
        </div>
      ))}
      {(EthnicGroups || [])?.map((item) => (
        <div key={item.id} className="border bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center">
          <img src={item?.images[0]} className="w-60 h-40"/>
          <h2 className="text-xl font-semibold text-gray-700">{item.name}</h2>
          <p className="text-gray-600 mt-2">{item.description}</p>
        </div>
      ))}
      {(HistoricalFigures || [])?.map((item) => (
        <div key={item.id} className="border bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center">
          <img src={item?.images[0]} className="w-60 h-40"/>
          <h2 className="text-xl font-semibold text-gray-700">{item.name}</h2>
          <p className="text-gray-600 mt-2">{item.description}</p>
        </div>
      ))}
      {(TouristAttractions || [])?.map((item) => (
        <div key={item.id} className="border bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center">
          <img src={item?.images[0]} className="w-60 h-40"/>
          <h2 className="text-xl font-semibold text-gray-700">{item.name}</h2>
          <p className="text-gray-600 mt-2">{item.description}</p>
        </div>
      ))}
      <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-6 space-y-4 sm:space-y-0">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Хэрэглэгчийн нэр оруулна уу..."
          className="w-full sm:w-1/2 px-4 py-2 rounded-lg border-2 border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600 shadow-md text-black"
        />

        <button
          onClick={() => setGrid(!grid)}
          className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg shadow-md transition-all"
        >
          {grid ? "Жагсаалт - руу шилжих" : "Grid - руу шилжих"}
        </button>
      </div>

      <div
        className={`grid ${
          grid ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "space-y-4"
        } gap-4`}
      >
        {filteredData.map((player) => (
          <div
            key={player.id}
            className="border-2 border-purple-400 rounded-lg p-4 bg-white hover:shadow-lg transition-all"
          >
            <h2 className="text-xl font-bold text-gray-800">{player.name}</h2>
            <p className="text-gray-600">{player.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}