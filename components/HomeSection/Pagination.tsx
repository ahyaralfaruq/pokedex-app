import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const PaginationDemo = (
  {
     page, 
     prev, 
     next, 
     totalPage
  } : { 
    page: number; 
    prev: (props? : number) => void; 
    next: (props? : number) => void; 
    totalPage: number
  }
) => {

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem className="cursor-pointer">
          <PaginationPrevious aria-disabled={page === 1} onClick={() => prev()} />
        </PaginationItem>
        {
          page > 1 && (
            <>
              {
                page > 5 && (
                  <PaginationItem className="cursor-pointer">
                    <button 
                      type="button" 
                      className="green-pink-gradient p-[1px] rounded-md"
                      onClick={() => prev(5)}
                    >
                      <span
                        aria-hidden
                        className="bg-tertiary rounded-md w-10 h-10 flex justify-evenly items-center flex-col"
                      >
                        ...
                        <span className="sr-only">More pages</span>
                      </span>
                    </button>
                  </PaginationItem>
                )
              }
              <PaginationItem className="cursor-pointer">
                <button 
                    type="button" 
                    className="green-pink-gradient p-[1px] rounded-md"
                    onClick={() => prev()}
                  >
                  <div className="bg-tertiary rounded-md w-10 h-10 flex justify-evenly items-center flex-col">
                    { page - 1 }
                  </div>
                </button>
              </PaginationItem>
            </>
          )
        }
        <PaginationItem>
          <PaginationLink className="green-pink-gradient p-[1px] rounded-md" isActive>
            { page }
          </PaginationLink>
        </PaginationItem>
        {
          page < totalPage && (
            <>
              <PaginationItem className="cursor-pointer">
                <button 
                  type="button" 
                  className="green-pink-gradient p-[1px] rounded-md"
                  onClick={() => next()}
                >
                  <div className="bg-tertiary rounded-md w-10 h-10 flex justify-evenly items-center flex-col">
                    { page + 1 }
                  </div>
                </button>
              </PaginationItem>
              {
                totalPage - page >= 5 && (
                  <PaginationItem className="cursor-pointer">
                    <button 
                      type="button" 
                      className="green-pink-gradient p-[1px] rounded-md"
                      onClick={() => next(5)}
                    >
                      <span
                        aria-hidden
                        className="bg-tertiary rounded-md w-10 h-10 flex justify-evenly items-center flex-col"
                      >
                        ...
                        <span className="sr-only">More pages</span>
                      </span>
                    </button>
                  </PaginationItem>
                )
              }
            </>
          )
        }
        <PaginationItem className="cursor-pointer">
          <PaginationNext aria-disabled={page === totalPage} onClick={() => next()} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default PaginationDemo;
