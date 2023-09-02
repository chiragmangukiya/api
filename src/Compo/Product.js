import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


function Product() {

     const [product,setproduct]=useState([]);
     const [smallimg,setsmallimg]=useState([]);
     const [bigimg,setbigimg]=useState();
     const [thumb,setthumb]=useState(false)
     let params = useParams();

     useEffect(()=>{
          axios.get(`https://dummyjson.com/products/${params.id}`)
          .then((res)=>{
               console.log(res.data);
               setproduct(res.data);
               setsmallimg(res.data.images);
          })
          .catch((err)=>{
               console.log(err);
          })

     },[])


  return (
    <>
               
          <Container>
               <Row>
                    <Col lg={5}>
                         <div className='img_grid'>
                              <img src={(thumb) ? bigimg : product.thumbnail} alt="" className='w-100' />
                              <div className='small_img'>
                                   {
                                        smallimg.map((item)=>{
                                             return(
                                                  <div><img src={item} onClick={(e)=>{setbigimg(e.target.src); setthumb(true)}}/></div>
                                             )
                                        })
                                   }
                              </div>
                         </div>
                    </Col>
                    <Col lg={7}>
                         <p className='text-uppercase text-muted'>{product.category}</p>
                         <p className='h2'>{product.title}</p>
                         <p className='d-inline-block text-primary h3'>${product.price}/</p>
                         <small className='ms-1 text-danger fw-bold'>{product.discountPercentage}% OFF</small>
                         <p>{product.description}</p>
                    </Col>
               </Row>
          </Container>
                  
    </>
  )
}

export default Product