"use client"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation";
import axios from "axios"
import { parseStringify } from "@/lib/utils";

const HomeSection = () => {
  const [poke, setPoke] = useState<any>({});
  const [error, setError] = useState<boolean>(false)
  const [page, setPage] = useState<string>(`https://pokeapi.co/api/v2/pokemon`);

  const searchParams = useSearchParams();
  const query = searchParams.get('search');

  const handlePrevPage = (checkPrev: string | null) => {
    if(checkPrev === null || checkPrev === "null") return
    setPage(checkPrev)
  }

  const handleNextPage = (checkNext: string | null) => {
    if(checkNext === null || checkNext === "null") return
    setPage(checkNext)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = query ? `https://pokeapi.co/api/v2/pokemon/${query}` : page;
      
        const response = await axios.get(url);
        const decode = parseStringify(response.data);

        setPoke(decode)
      } catch (err) {
        console.log(err)
      }
    }

    fetchData()
  }, [page, query])

  return (
    <section className="pt-[120px] scroll-pt-[120px]">
      <div className="px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-4">
          {
            poke.results?.map((data: any) => (
              <p key={data.name}>
                test
              </p>
            ))
          }
        </div>

        
      </div>
    </section>
  )
}

export default HomeSection