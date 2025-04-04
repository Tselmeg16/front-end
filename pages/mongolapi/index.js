import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Lab2() {
  const [grid, setGrid] = useState(true);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urls = [
          "clothes",
          "instruments",
          "HistoricalTools",
          "EthnicGroups",
          "HistoricalFigures",
          "TouristAttractions",
        ].map((category) =>
          fetch(`https://mongol-api-rest.vercel.app/${category}`).then((res) => res.json())
        );

        const results = await Promise.all(urls);
        const combinedData = results.flatMap((result) => result[Object.keys(result)[0]] || []);
        setData(combinedData);
      } catch (err) {
        console.error(err);
        setError("Мэдээлэл татаж чадсангүй.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter((item) => 
    item.name.toLowerCase().includes(search.toLowerCase())
  )

  console.log(data);
  console.log(search);

  return (
    <div className="p-8 bg-gradient-to-r from-blue-200 to-purple-300 min-h-screen flex flex-col items-center text-gray-900">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl p-10">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-6">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Хайлт хийх..."
            className="w-full sm:w-1/2 px-5 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-purple-500 shadow-md text-lg"
          />
          <button
            onClick={() => setGrid(!grid)}
            className="bg-purple-600 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-purple-700 transition-all font-semibold text-lg"
          >
            {grid ? "Жагсаалт харах" : "Сүлжээ харах"}
          </button>
        </div>

        {loading ? (
          <p className="text-center text-gray-500 text-lg font-semibold">Мэдээлэл ачааллаж байна...</p>
        ) : error ? (
          <p className="text-center text-red-500 text-lg font-semibold">{error}</p>
        ) : filteredData.length === 0 ? (
          <p className="text-center text-gray-500 text-lg font-semibold">Хайлтанд тохирох мэдээлэл олдсонгүй.</p>
        ) : (
          <div className={grid ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10" : "space-y-8"}>
            {filteredData.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-3xl shadow-xl p-6 cursor-pointer hover:shadow-2xl transition-all flex flex-col items-center text-center transform hover:scale-105 hover:bg-gray-50"
                onClick={() => router.push(`/mongolapi/${item.id}`)}
              >
                <img
                  src={item.images?.[0] || "https://via.placeholder.com/150"}
                  alt={item.name}
                  className="w-64 h-44 object-cover rounded-xl shadow-md"
                />
                <h2 className="text-2xl font-bold text-gray-800 mt-4">{item.name}</h2>
                <p className="text-gray-600 mt-3 text-md">{item.description || "Тайлбар байхгүй."}</p>
                <button className="mt-5 px-6 py-3 bg-purple-600 text-white rounded-2xl hover:bg-purple-700 transition-all font-semibold text-lg">
                  Дэлгэрэнгүй
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
