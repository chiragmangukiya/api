import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function Jsonplace() {

     const [data,setdata]=useState([]);

     useEffect(()=>{
     axios.get('https://jsonplaceholder.typicode.com/posts')
     .then((res)=>{
          // console.log(res.data);
          setdata(res.data);
     })
     .catch((err)=>{
          console.log(err);
     })
     },[]);

  return (
    
     <>
          <table border={1} cellPadding={10}>
               <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Discription</th>
               </tr>
               {
                    data.map((ele)=>{
                    return(
                    <tr>
                         <td>{ele.id}</td>
                         <td>{ele.title}</td>
                         <td>{ele.body}</td>
                    </tr>
                    )
                    })
               }
          </table>
     </>

  )
}

export default Jsonplace