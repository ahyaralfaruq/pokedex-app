import { useState, useEffect } from "react";
import { DialogContent, DialogFooter, DialogClose, DialogHeader, DialogTitle, DialogDescription } from "../../ui/dialog"
import { parseStringify } from "@/lib/utils";
import axios from "axios";
import PokemonIdentity from "./PokemonIdentity";
import dynamic from "next/dynamic";
import { LoadingCardChar } from "../Loading";
import PokemonTypes from "./PokemonTypes";

const CardModal = ({ id, image } : {id: number; image: string }) => {
  const [data, setData] = useState<any>({})

  const PokemonCharacteristics = dynamic(() => import("./PokemonCharacteristics"), {
    loading: () => <LoadingCardChar />
  })

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const decode = parseStringify(response.data);
      setData(decode)
    }

    getData()
  }, [id])

  return (
    <DialogContent className="green-pink-gradient p-[1px] rounded-md w-full max-w-[25rem] lg:max-w-[45rem]">
      <div className="bg-tertiary rounded-md w-full">
        <div className="flex flex-col p-10">
          <DialogHeader>
            <DialogTitle className="flex content-center items-center justify-center gap-4">
              <PokemonIdentity id={id} name={data?.species?.name} />
            </DialogTitle>
            <DialogDescription className="block mt-[-64px] pb-[64px]"/>
          </DialogHeader>
          <div className="flex flex-wrap items-center content-center w-full mb-8">
            <PokemonCharacteristics 
              abilities={data.abilities}
              height={data.height}
              image={image}
              weight={data.weight}
              name={data?.species?.name}
            />
          </div>
          
          <PokemonTypes
            types={data.types}
          />
          
          <DialogFooter className="sm:justify-center lg:justify-center">
            <button 
              type="button" 
              className="green-pink-gradient p-[1px] rounded-[20px]"
              onClick={() => window.open(`https://bulbapedia.bulbagarden.net/wiki/${data?.species?.name}_(Pok%C3%A9mon)`, "_blank")}
            >
              <div className="bg-tertiary rounded-[20px] py-2 px-5 lg:px-8">
                Visit {data?.species?.name}'s wiki
              </div>
            </button>
          </DialogFooter>
        </div>
      </div>
    </DialogContent>
  )
}

export default CardModal