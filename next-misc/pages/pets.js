import React from 'react';
// import Image from 'next/image';
// import img from "../public/1.jpg";

const Pets = () => {
  return (
    <div>
        <h2>Pets Images</h2>
        {/* <Image 
          src={img} 
          placeholder='blur' 
          alt="pet"
          width="280"
          height="350"
          />
        {
            ['1','2','3','4','5'].map((path)=>{
                return(
                    <div key={path} style={{
                        display:"inline-block",
                        margin:"5px"
                        }}>
                        <Image 
                        src={`/${path}.jpg`}
                        alt="pet"
                        width="280"
                        height="350"
                        />
                    </div>
                )
            })
        } */}
    </div>
  )
}

export default Pets