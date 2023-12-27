import { Col, Container, Row, Card } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../slice/cartSlice';

function Dummyjson() {
     
     const [category,setcategory]=useState([]);
     const [allproduct,setallproduct]=useState([]);
     let [searchPro,setsearchPro]=useState('');

     const dispatch=useDispatch()


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

     const search = () => {
          axios.get(`https://dummyjson.com/products/search?q=${searchPro}`)
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
                         <Link to='/cart'>View Cart</Link>
                         <InputGroup className="mb-3">
                              <Form.Control
                                   placeholder="Search Product"
                                   onChange={(e)=>{setsearchPro(e.target.value); search();}}
                              />
                         </InputGroup>

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
                                                                 <Link to={`/product/${item.id}`} class="pro_name text-truncate">{item.title}</Link>
                                                                 <p class="pro_price">${item.price}</p>
                                                                 <button className='btn btn-primary btn-sm mt-2' onClick={()=>{dispatch(addCart(item))}}>Add To Cart</button>
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