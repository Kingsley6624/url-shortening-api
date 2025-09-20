import React, {useState} from 'react'

const Result = () => {
  
  return (
    <div>
      {results.map((result)=>(
        <div className='flex items-center justify-between'>
          <span>{result}</span>
          <button>copyURL</button>
        </div>
      ))}
    </div>
  )
}

export default Result