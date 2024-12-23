"use client"
import { useState, useEffect, Suspense, useMemo } from "react"
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios"
import { parseStringify } from "@/lib/utils";
import {LoadingCards, LoadingPagination} from "./Loading";
import dynamic from "next/dynamic";
import ErrorSearch from "./ErrorSearch";

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

  const CardsWrapper = dynamic(() => import("./CardsWrapper"), {
    loading: () => <LoadingCards />,
  });
  
  const PaginationDemo = dynamic(() => import("./Pagination"), {
    loading: () => <LoadingPagination page={page} totalPage={totalPage} />,
  });

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

  // memoize large image
  const getImageByArtWorkSprites = useMemo(() => (data: any) => {
    return data.sprites.other["official-artwork"]["front_default"]
  },[])

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
            <ErrorSearch handleError={handleNotFound} />
          ) : (
            <>
              <div className="flex flex-wrap mb-[120px]">
                {
                  Array.isArray(poke) && poke?.map((data: any) => {

                    const imageValue = getImageByArtWorkSprites(data)

                    return (
                      <CardsWrapper
                        key={data.id}
                        id={data.id}
                        height={data.height}
                        image={imageValue}
                        name={data.species.name}
                        weight={data.weight}
                      />
                    )
                  })
                }
              </div>
              <PaginationDemo
                page={page}
                prev={handlePrevPage}
                next={handleNextPage}
                totalPage={totalPage}
              />
            </>
          )
        }        
      </div>
    </section>
  )
}

export default HomeSection