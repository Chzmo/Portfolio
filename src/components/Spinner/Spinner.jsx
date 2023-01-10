import React, { CSSProperties  }from 'react';
import { GridLoader   } from 'react-spinners';

// const override: CSSProperties = {
//     display: "block",
//     margin: "0 auto",
//     borderColor: "red",
// };

function Spinner({message}) {
  return (
    <div className="spinner" style={{display:"flex", position:"absolute"}}>
      <GridLoader 
        color='#36d7b7'
        loading={true}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <p className='text-lg text-center px-2'>
        {message}
      </p>
    </div>
  )
}
export default Spinner