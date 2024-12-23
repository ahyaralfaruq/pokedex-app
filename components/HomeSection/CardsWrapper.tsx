  import Image from 'next/image';
  import { Dialog, DialogTrigger } from '../ui/dialog';
  import CardModal from './CardModal/CardModal';
  import DefaultImg from "@/assets/pocket.png"

  const CardsWrapper = ({
    id,
    height,
    image,
    name,
    weight,
  }: {
    id: number;
    height: string;
    image: string;
    name: string;
    weight: string;
  }) => {

    const img = image || DefaultImg;

    return (
      <Dialog>
        <DialogTrigger asChild className="cursor-pointer">
          <div className="relative flex min-h-[1px] w-full md:w-1/3 lg:w-1/4 mb-4 px-2">
            <div className="flex green-pink-gradient p-[1px] rounded-md w-full">
              <div className="bg-tertiary rounded-md w-full">
                
                <div className="flex flex-wrap items-center content-center w-full">
                  <div className="w-full pt-4">
                    <Image
                      src={img}
                      alt={name}
                      draggable={false}
                      width={150}
                      height={150}
                      priority
                      className="mx-auto"
                    />
                  </div>

                  <div className='w-full p-4'>
                    <p className="text-left font-tomorrow mb-4">
                      #{ id.toString().padStart(4, "0") }
                    </p>

                    <h3 className="text-xl capitalize font-bold font-tomorrow mb-2">
                      { name.toUpperCase() }
                    </h3>

                    <div className="flex justify-between">
                      <p className="text-left font-tomorrow">
                        Weight: { weight }
                      </p>

                      <p className="text-left font-tomorrow">
                        Height: { height }
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </DialogTrigger>

        <CardModal id={id} image={img} />
      </Dialog>
    )
  }

  export default CardsWrapper