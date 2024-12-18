import { useState } from "react";

export default function News() {
  const [grid, setGrid] = useState(true);
  const [search, setSearch] = useState("");

  const data = [
    { id: 1, name: "LeBron James", description: "Power forward" },
    { id: 2, name: "Bronny James", description: "Shooting guard" },
    { id: 3, name: "Anthony Davis", description: "Center" },
    { id: 4, name: "Dalton Knecht", description: "Small forward" },
    { id: 5, name: "Rui Hachiura", description: "Power forward" },
    { id: 6, name: "Christian Koloko", description: "Center" },
    { id: 7, name: "Quincy Olivari", description: "Point guard" },
    { id: 8, name: "Max Christie", description: "Shooting guard" },
    { id: 9, name: "Jarred Vanderbilt", description: "Center" },
    { id: 10, name: "D'Angelo Russell", description: "Point guard" },
    { id: 11, name: "Jaxson Hayes", description: "Center" },
    { id: 12, name: "Gabe Vincent", description: "Point guard" },
    { id: 13, name: "Cam Reddish", description: "Power forward" },
    { id: 14, name: "Austin Reaves", description: "Small forward" },
    { id: 15, name: "Christian Wood", description: "Center" },
    { id: 16, name: "Armel Traore", description: "Small forward" },
    { id: 17, name: "Maxwell Lewis", description: "Small forward" },
    { id: 18, name: "Jalen Hood-Schfino", description: "Shooting guard" },
  ];

  const filteredData = data.filter((player) =>
    player.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Тамирчдын Нэрс
      </h1>

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
