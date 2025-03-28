import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Lab2() {
  const [grid, setGrid] = useState(true);
  const [search, setSearch] = useState("");
  const [clothes, setClothes] = useState([]);
  const [instruments, setInstruments] = useState([]);
  const [historicalTools, setHistoricalTools] = useState([]);
  const [ethnicGroups, setEthnicGroups] = useState([]);
  const [historicalFigures, setHistoricalFigures] = useState([]);
  const [touristAttractions, setTouristAttractions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async (url, setter) => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setter(result[Object.keys(result)[0]] || []);
      } catch (error) {
        console.error(error);
        setError("Мэдээлэл татаж чадсангүй.");
      }
    };

    Promise.all([
      fetchData("https://mongol-api-rest.vercel.app/clothes", setClothes),
      fetchData(
        "https://mongol-api-rest.vercel.app/instruments",
        setInstruments
      ),
      fetchData(
        "https://mongol-api-rest.vercel.app/HistoricalTools",
        setHistoricalTools
      ),
      fetchData(
        "https://mongol-api-rest.vercel.app/EthnicGroups",
        setEthnicGroups
      ),
      fetchData(
        "https://mongol-api-rest.vercel.app/HistoricalFigures",
        setHistoricalFigures
      ),
      fetchData(
        "https://mongol-api-rest.vercel.app/TouristAttractions",
        setTouristAttractions
      ),
    ]).finally(() => setLoading(false));
  }, []);

  const combinedData = [
    ...clothes,
    ...instruments,
    ...historicalTools,
    ...ethnicGroups,
    ...historicalFigures,
    ...touristAttractions,
  ];

  const filteredData = combinedData.filter((item) =>
    item.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-6 space-y-4 sm:space-y-0">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Хайлт хийх..."
          className="w-full sm:w-1/2 px-4 py-2 rounded-lg border-2 border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600 shadow-md text-black"
        />

        <button
          onClick={() => setGrid(!grid)}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg shadow-md transition-all"
        >
          {grid ? "List - руу шилжих" : "Grid - руу шилжих"}
        </button>
      </div>

      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : filteredData.length === 0 ? (
        <p className="text-center text-gray-500">
          Хайлтанд тохирох мэдээлэл олдсонгүй.
        </p>
      ) : (
        <div
          className={
            grid
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              : "space-y-4"
          }
        >
          {filteredData.map((item) => (
            <div
              key={item.name}
              className="border bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center"
              onClick={() => router.push(`/mongolapi/${item.id}`)}
            >
              <img
                src={item.images?.[0] || "https://via.placeholder.com/150"}
                alt={item.name}
                className="w-60 h-40"
              />
              <h2 className="text-xl font-semibold text-gray-700">
                {item.name}
              </h2>
              <p className="text-gray-600 mt-2">
                {item.description || "Тайлбар байхгүй."}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
