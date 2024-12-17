import { useState } from "react";

export default function News() {
    const [grid, setGrid] = useState(true);
    const [search, setSearch] = useState('');

    const data = [
        {
            id : 1,
            name : "LeBron James",
            description : "Power forward"
        },
        {
            id : 2,
            name : "Bronny James",
            description : "Shooting guard"
        },
        {
            id : 3,
            name : "Anthony Davis",
            description : "Center"
        },
        {
            id : 4,
            name : "Dalton Knecht",
            description : "Small forward"
        },
        {
            id : 5,
            name : "Rui Hachiura",
            description : "Power forward"
        },
        {
            id : 6,
            name : "Christian Koloko",
            description : "Center"
        },
        {
            id : 7,
            name : "Quincy Olivari",
            description : "Point guard"
        },
        {
            id : 8,
            name : "Max Christie",
            description : "Shooting guard"
        },
        {
            id : 9,
            name : "Jarred Vanderbilt",
            description : "Center"
        },
        {
            id : 10,
            name : "D'Angelo Russell",
            description : "Point guard"
        },
        {
            id : 11,
            name : "Jaxson Hayes",
            description : "Center"
        },
        {
            id : 12,
            name : "Gabe Vincent",
            description : "Point guard"
        },
        {
            id : 13,
            name : "Cam Reddish",
            description : "Power forward"
        },
        {
            id : 14,
            name : "Austin Reaves",
            description : "Small forward"
        },
        {
            id : 15,
            name : "Christian Wood",
            description : "Center"
        },
        {
            id : 16,
            name : "Armel Traore",
            description : "Small forward"
        },
        {
            id : 17,
            name : "Maxwell Lewis",
            description : "Small forward"
        },
        {
            id : 18,
            name : "Jalen Hood-Schfino",
            description : "Shooting guard"
        },
    ];
    const filteredData = data.filter((classmates) =>
        classmates.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <>
        <div className="w-full h-full flex flex-col p-8 items-center bg-[#E0E7FB] space-y-4">
        <h1 className="text-black font-bold text-2xl">Тамирчидын Нэрс</h1>
        <button onClick={() => setGrid(!grid)} className="bg-purple-700 text-white p-2 rounded-md">{grid ? "Жагсаалт - руу шилжих" : "Grid - руу шилжих"}</button>
        <div className={grid == true ? "grid grid-cols-2 gap-4" : "space-y-4"}>
        <input value={search} onChange={(Search) => setSearch(Search.target.value)} placeholder="Хэрэглэгчийн нэр оруулна уу..." className="w-full h-12 drop-shadow-xl text-black rounded-xl p-2"></input>
        <div className="w-full space-y-4 z-10"></div>
            {filteredData.map((classmates) => (
                        <div key={classmates.id} className="border-2 border-purple-700 rounded-xl p-4 flex flex-col justify-evenly text-black text-xl">
                            <h1 className="font-bold text-2xl">{classmates.name}</h1>
                            <h1>{classmates.description}</h1>
                        </div>
                    ))}
        </div>                
        <div className="w-screen h-screen bg-[#E0E7FB] absolute -z-10"></div>
        </div>
            </>
    );
}