import { useRouter } from "next/router"

export default function Home() {
    const router = useRouter();

    return <div>
        <button className="border p-4 bg-red-200" onClick={() => router.push("/mongolapi")}>mongolapi</button>
    </div>
}