import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function ID() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://mongol-api-rest.vercel.app/clothes"
        );

        const result = await response.json();
        setData(result.clothes);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl bg-white bg-opacity-80 backdrop-blur-lg rounded-xl shadow-xl p-8">
        {loading ? (
          <p className="text-center text-lg font-semibold text-gray-700">Loading...</p>
        ) : (
          <>
            <button
              className="border p-4 bg-blue-200 text-gray-800 rounded-xl shadow-md hover:bg-blue-300 transition-all mb-6"
              onClick={() => router.back()}
            >
              Go Back
            </button>
            {data && data.length > 0 ? (
              data.map((item) =>
                router.query.id === item.id ? (
                  <div key={item.id} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all mb-6">
                    <h2 className="text-3xl font-bold text-gray-800">{item.name}</h2>
                    <p className="text-gray-600 text-lg mt-2">{item.description}</p>
                    <img
                      src={item?.images[0] || "https://via.placeholder.com/300"}
                      alt={item.name}
                      className="w-full h-auto mt-4 rounded-xl transform hover:scale-105 transition-all"
                    />
                    <p className="mt-4 text-sm text-gray-500">Item ID: {item.id}</p>
                  </div>
                ) : null
              )
            ) : (
              <p className="text-center text-xl font-semibold text-gray-700">
                No matching item found for ID: {router.query.id}
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
