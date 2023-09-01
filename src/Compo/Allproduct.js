import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Card, Button } from 'react-bootstrap'
import axios from 'axios';
import { Link } from "react-router-dom";

function Allproduct(props) {

     const [allproduct,setallproduct]=useState([]);

     useEffect(()=>{
          axios.get(`https://dummyjson.com/products/category/laptops`)
          .then((res)=>{
               setallproduct(res.data.products);
          })
          .catch((err)=>{
               console.log(err);
          })

     },[])

  return (
    <>
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
    </>
  )
}

export default Allproduct