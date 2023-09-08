import React from "react";

 const Play =({data,setuserInp}) =>{
    if(data.length){
        console.log(data);
    }

    return(
        
    <div className='play'>

    <div className='cp'>
      <img className='rider' src="https://wallpaperaccess.com/full/5300220.jpg" />
    </div>


    <div className='songs'>
      {data.length && data.map(e => {
          console.log(e);
          return (
        
              <div  onClick={()=> setuserInp(e.id)}>
           <img src={e.image[2].link}/>
            </div>
          )
        })
      }
    </div>
  </div>
)
}

export default Play
