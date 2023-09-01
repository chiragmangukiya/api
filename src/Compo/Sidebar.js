import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";


function Sidebar() {

     const [category,setcategory]=useState([]);

     useEffect(()=>{
          axios.get(`https://dummyjson.com/products/categories`)
          .then((res)=>{
               setcategory(res.data);
          })
          .catch((err)=>{
               console.log(err);
          })

     },[])

  return (
    <>
          <div className="sidebar">
               <h3>Category</h3>
               <ul className='cate_name ps-0'>
                    {
                         category.map((item)=>{
                              return(
                                   <Link to='/category'>{item}</Link>
                              )
                         })
                    }
               </ul>
          </div>
    </>
  )
}

export default Sidebar