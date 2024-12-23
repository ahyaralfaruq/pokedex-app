import Image from "next/image";

const PokemonCharacteristics = ({ 
  abilities, 
  height, 
  image, 
  weight,
  name
} : {
  abilities: any[];
  height: number;
  image: string;
  weight: number;
  name: string;
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center lg:items-start lg:flex-row w-full">
      <div className="relative flex min-h-[1px] w-auto lg:w-1/2 px-4">
        <div className="flex flex-wrap w-full">
          <Image
            src={image}
            alt={name}
            draggable={false}
            width={150}
            height={150}
            sizes="(max-width: 100%)"
            priority
            className="mx-auto w-full max-h-40 lg:max-h-64"
          />
        </div>
      </div>

      <div className="relative flex min-h-[1px] w-full lg:w-1/2">
        <div className="flex flex-wrap content-start w-full green-pink-gradient min-h-40 lg:min-h-64 rounded-3xl p-4">
          
          <div className="flex flex-col justify-between h-full w-1/2">
            <div className="flex flex-col justify-center w-full">
              <p className="text-base lg:text-lg text-white text-center xl:text-2xl font-tomorrow">
                Weight:
              </p>
              <p className="text-base lg:text-lg text-white text-center xl:text-2xl font-tomorrow">
                {weight}
              </p>
            </div>

            <div className="flex flex-col justify-center w-full">
              <p className="text-base lg:text-lg text-white text-center xl:text-2xl font-tomorrow">
                Height:
              </p>
              <p className="text-base lg:text-lg text-white text-center xl:text-2xl font-tomorrow">
                {height}
              </p>
            </div>
          </div>

          <div className="flex flex-col w-1/2">
            <div className="flex flex-col justify-center w-full">
              <p className="text-base lg:text-lg text-white text-center xl:text-2xl font-tomorrow">
                Abilities:
              </p>
              <div className="flex flex-col justify-center w-full">
                {abilities.map((ability, index) => (
                  <p
                    key={index}
                    className="text-base lg:text-lg text-white text-center capitalize xl:text-2xl font-tomorrow"
                  >
                    {ability.ability.name}
                  </p>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default PokemonCharacteristics