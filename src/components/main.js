import React, { useRef } from "react";
import { useState , useEffect } from "react";
import Music from "./songs";
import Select from "./select";
import Play from "./play";

const Main = () =>{
    const [data,setData]= useState("");
    const [userInp,setUserInp] = useState('');
    console.log(userInp);

    const Search = () =>{
        const baseurl = "https://saavn.me/modules?language=hindi,english,telugu"
        fetch(baseurl,{
            method:'get',
            headers:{
                "Content-Type":"application/json"
            },
        })
        .then(setData => setData.json())
        .then(setdata => setData(setdata.data.albums))
        .catch(err => console.log(err))
    }

    useEffect(()=>{
        Search()
    },[]) ;
    console.log(data);
    
 return(
    <div className='main-comp' >
      <div className='pands'>
        <Select x={data} />
        <Play data={data} setUserInp={setUserInp} />
      </div>
      <div>
        <Music userInp={userInp} />
      </div>
    </div>
 )
} 

export default Main