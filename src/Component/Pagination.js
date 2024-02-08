import React, { useContext } from 'react'
import { AppContext } from '../context/appContext'

const Pagination = () => {

  const {totalPage,page, handlePageChange} = useContext(AppContext)
 
  

  return (
    <div>
      <div>
        { page > 1 &&
          <button onClick={()=>handlePageChange(page-1)}>
            Previous
          </button>
        }
        { page < 6 &&
          <button onClick={()=>handlePageChange(page+1)}>
            Next
          </button>
        }
        <p>
          page {page} out of {totalPage}
        </p>
      </div>
    </div>
  )
}

export default Pagination
