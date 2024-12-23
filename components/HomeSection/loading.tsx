import { Pagination, PaginationContent } from '../ui/pagination';
import { Skeleton } from '../ui/skeleton'

export const LoadingCardChar = () => {
  const abilities = new Array(4).fill(null);

  return (
    <div className="flex flex-wrap items-center justify-center lg:items-start lg:flex-row w-full">
      <div className="relative flex min-h-[1px] w-auto lg:w-1/2 px-4">
        <div className="flex flex-wrap w-full">
          <Skeleton
            className="mx-auto w-full min-h-40 lg:min-h-64"
          />
        </div>
      </div>

      <div className="relative flex min-h-[1px] w-full lg:w-1/2">
        <div className="flex flex-wrap content-start w-full bg-zinc-700 min-h-40 lg:min-h-64 rounded-3xl p-4">
          
          <div className="flex flex-col justify-between h-full w-1/2">
            <div className="flex flex-col justify-center w-full">
              <Skeleton className="text-center mb-4 h-4 w-1/5 lg:h-7" />
              <Skeleton className="text-center mb-4 h-4 w-1/5 lg:h-7" />
            </div>

            <div className="flex flex-col justify-center w-full">
              <Skeleton className="text-center mb-4 h-4 w-1/3 lg:h-7" />
              <Skeleton className="text-center mb-4 h-4 w-1/3 lg:h-7" />
            </div>
          </div>

          <div className="flex flex-col w-1/2">
            <div className="flex flex-col justify-center w-full">
              <Skeleton className="text-center mb-4 h-4 w-2/3 lg:h-7" />
              <div className="flex flex-col justify-center w-full">
                {abilities.map((a, index) => (
                  <Skeleton
                    key={index}
                    className="text-center capitalize mb-4 h-4 w-3/5 lg:h-7"
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export const LoadingPagination = ({ page, totalPage }: {page: number; totalPage: number }) => {
  return (
    <Pagination>
      <PaginationContent>
        <Skeleton className="w-[76px] h-10 bg-zinc-700" />
        {
          page > 1 && (
            <>
              {
                page > 5 && (
                  <Skeleton className="w-10 h-10 bg-zinc-700" />
                )
              }
              <Skeleton className="w-10 h-10 bg-zinc-700" />
            </>
          )
        }
        <Skeleton />
        {
          page < totalPage && (
            <>
              <Skeleton className="w-10 h-10 bg-zinc-700" />
              {
                totalPage - page >= 5 && (
                  <Skeleton className="w-10 h-10 bg-zinc-700" />
                )
              }
            </>
          )
        }
        <Skeleton className="w-[76px] h-10 bg-zinc-700" />
      </PaginationContent>
    </Pagination>
  )
}

export const LoadingCards = () => {
  return (
    <div className="relative flex min-h-[1px] w-full md:w-1/3 lg:w-1/4 mb-4 px-2">
      <div className="green-pink-gradient p-[1px] rounded-md w-full">
        <div className="bg-tertiary rounded-md w-full flex justify-evenly items-center flex-col">
          
          <div className="pt-4">
            <Skeleton
              className='w-[150px] h-[150px] bg-zinc-700'
            />
          </div>

          <div className='w-full p-4'>
            <Skeleton className="text-left w-10 h-4 mb-4 bg-zinc-700" />

            <Skeleton className="text-xl w-1/2 h-7 mb-2 bg-zinc-700" />

            <div className="flex justify-between">
              <Skeleton className="text-left w-8 h-4 bg-zinc-700" />

              <Skeleton className="text-left w-8 h-4 bg-zinc-700" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}