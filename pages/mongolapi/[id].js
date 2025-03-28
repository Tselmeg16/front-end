import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function ID() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();

    console.log(router.query.id);

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
    console.log(data);

    return(
    <div>
        
    </div>
    )   
}