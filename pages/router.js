import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();
    return (
        <div className="bg-black h-full">
            <div className="grid grid-cols-3 gap-4 px-5">
                <button
                    className="bg-yellow-500 hover:bg-white rounded-lg overflow-hidden border-gray-300 w-full h-full cursor-pointer"
                    onClick={() => router.push("/cv")}
                >
                    <div className="h-80 w-full relative">
                    </div>
                    <p className="text-center text-black font-semibold mt-3">CV</p>
                </button>

                <button
                    className="bg-green-500 hover:bg-white rounded-lg overflow-hidden border-gray-300 w-full h-full cursor-pointer"
                    onClick={() => router.push("/weather")}
                >
                    <div className="h-80 w-full relative">
                    </div>
                    <p className="text-center text-black font-semibold mt-3">Weather</p>
                </button>

                <button
                    className="bg-blue-500 hover:bg-white rounded-lg overflow-hidden border-gray-300 w-full h-full cursor-pointer"
                    onClick={() => router.push("/grid")}
                >
                    <div className="h-80 w-full relative">
                    </div>
                    <p className="text-center text-black font-semibold mt-3">Grid</p>
                </button>

                <button
                    className="bg-red-500 hover:bg-white rounded-lg overflow-hidden border-gray-300 w-full h-full cursor-pointer"
                    onClick={() => router.push("/search")}
                >
                    <div className="h-80 w-full relative">
                    </div>
                    <p className="text-center text-black font-semibold mt-3">Search</p>
                </button>

                <button
                    className="bg-purple-500 hover:bg-white rounded-lg overflow-hidden border-gray-300 w-full h-full cursor-pointer"
                    onClick={() => router.push("/biye_daalt")}
                >
                    <div className="h-80 w-full relative">
                    </div>
                    <p className="text-center text-black font-semibold mt-3">Biye_daalt</p>
                </button>

                <button
                    className="bg-pink-500 hover:bg-white rounded-lg overflow-hidden border-gray-300 w-full h-full cursor-pointer"
                    onClick={() => router.push("/tooluur")}
                >
                    <div className="h-80 w-full relative">
                    </div>
                    <p className="text-center text-black font-semibold mt-3">Tooluur</p>
                </button>

                <button
                    className="bg-orange-600 hover:bg-white rounded-lg overflow-hidden border-gray-300 w-full h-full cursor-pointer"
                    onClick={() => router.push("/batatgah_hicheel")}
                >
                    <div className="h-80 w-full relative">
                    </div>
                    <p className="text-center text-black font-semibold mt-3">Nest</p>
                </button>

                <button
                    className="bg-blue-800 hover:bg-white rounded-lg overflow-hidden border-gray-300 w-full h-full cursor-pointer"
                    onClick={() => router.push("mongolapi")}
                >
                    <div className="h-80 w-full relative">
                    </div>
                    <p className="text-center text-black font-semibold mt-3">Mongol API</p>
                </button>
            </div>
        </div>
    );
}