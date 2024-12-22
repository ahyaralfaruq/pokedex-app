"use client"
import { useState, useEffect, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios"
import { parseStringify } from "@/lib/utils";
import PaginationDemo from "./Pagination";
import LoadingPagination from "./LoadingPagination";

const HomeSection = () => {
  const [poke, setPoke] = useState<any>([]);
  const [error, setError] = useState<string>("")
  const [page, setPage] = useState<number>(1);
  const limit = 100;
  const totalItem = 1302
  const totalPage = Math.ceil(totalItem /limit);

  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('search');

  const handlePrevPage = (props?: number) => {
    if(page === 1  || page < 2) return
    const decreasePage = props ? props : 1
    setPage(checkPrev => checkPrev - decreasePage);
  }

  const handleNextPage = (props?: number) => {
    if(page === totalPage) return
    const increasePage = props ? props : 1
    setPage(checkNext => checkNext + increasePage);
  }

  const handleNotFound = () => {
    setError("")
    router.push("/", { scroll: false })
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        if(query) {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`);
          const decode = parseStringify(response.data);

          if(Array.isArray(decode)) {
            setPoke(decode)
          } else {
            setPoke([decode])
          }
        } else {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${(page - 1) * limit}&limit=${limit}`);
          const decode = parseStringify(response.data);
          const { results } = decode;
          const requests = results.map(async (result: any) => await axios.get(result.url));
          const request = await Promise.all(requests);
          const res = request.map((pokemonRes) => pokemonRes.data)
          setPoke(res)
        }
      } catch (err: any) {
        setError(err.response.data)
      }
    }

    fetchData()
  }, [page, query])

  return (
    <section className="pt-[120px] scroll-pt-[120px]">
      <div className="px-8 lg:px-16 max-w-7xl mx-auto mt-12 lg:mt-24">
        {
          error ? (
            <>
              <h3 className="font-tomorrow text-white text-center text-2xl md:text-4xl mb-12">
                POKEMON NOT FOUND
              </h3>

              <h1 className="font-tomorrow text-red-600 text-center text-7xl mb-4">
                4.0.4
              </h1>

              <p className="font-tomorrow text-white text-center mb-24">Pokemon tidak ditemukan</p>
              
              <div className="text-center">
                <button 
                  type="button" 
                  className="green-pink-gradient p-[1px] rounded-[20px]"
                  onClick={handleNotFound}
                >
                  <div className="bg-tertiary rounded-[20px] py-2 px-12 flex justify-evenly items-center flex-col">
                    BACK
                  </div>
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-wrap gap-4">
                {
                  poke?.map((data: any) => (
                    <p key={data.name}>
                      test
                    </p>
                  ))
                }
              </div>
              <Suspense fallback={<LoadingPagination />}>
                <PaginationDemo
                  page={page}
                  prev={handlePrevPage}
                  next={handleNextPage}
                  totalPage={totalPage}
                />
                </Suspense>
            </>
          )
        }        
      </div>
    </section>
  )
}

export default HomeSection