import { Col, Container, Row, Card, Button } from 'react-bootstrap'
import Allproduct from './Allproduct';
import Sidebar from './Sidebar';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";

function Dummyjson() {
     
     const [category,setcategory]=useState([]);
     const [allproduct,setallproduct]=useState([]);
     let [cateName,setcateName]=useState('');

     useEffect(()=>{
          axios.get(`https://dummyjson.com/products/categories`)
          .then((res)=>{
               setcategory(res.data);
          })
          .catch((err)=>{
               console.log(err);
          })

     },[category])

     useEffect(()=>{
          axios.get(`https://dummyjson.com/products`)
          .then((res)=>{
               setallproduct(res.data.products);
          })
          .catch((err)=>{
               console.log(err);
          })

     },[])

     const cateProduct = (cate) => {

          axios.get(`https://dummyjson.com/products/category/${cate}`)
          .then((res)=>{
               setallproduct(res.data.products);
          })
          .catch((err)=>{
               console.log(err);
          })

     }

    return (
    <>
     <Container fluid className='p-5'>
          <Row>
               <Col lg={3}>
                    <div className="sidebar">
                         <h3>Category</h3>
                         <ul className='cate_name ps-0'>
                              {
                                   category.map((item)=>{
                                        return(
                                             <li onClick={(e)=>{cateProduct(item)}}>{item}</li>
                                        )
                                   })
                              }
                         </ul>
                    </div>
               </Col>
               <Col xs={9} className='offset-3'>
                    <Row className='g-3'>
                         <h3 className="section_title">featured collection</h3>
                              {/* <h1>{cateName}</h1> */}
                         {
                              allproduct.map((item)=>{
                                   return(
                                        <Col lg={4} md={6} xs={12}>
                                             <Card>
                                                  <div className='pro_img'>
                                                       <Card.Img variant="top" src={item.thumbnail} />
                                                       <div className="discount">
                                                            {Math.round(item.discountPercentage)}%<br></br> OFF
                                                       </div>
                                                  </div>
                                                  <Card.Body>
                                                       <Card.Text>
                                                            <div class="pro_details">
                                                                 <Link to={`/product/${item.id}`} class="pro_name text-truncate stretched-link">{item.title}</Link>
                                                                 <p class="pro_price">${item.price}</p>
                                                            </div>
                                                       </Card.Text>
                                                  </Card.Body>
                                             </Card>
                                        </Col>
                                   )
                              })
                         }                    

                    </Row>
               </Col>             
               
          </Row>
     </Container>
    </>
  )
}

export default Dummyjson