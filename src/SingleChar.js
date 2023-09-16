import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


function SingleChar() {

     const [product,setproduct]=useState([]);
     const [episode,setepisode]=useState([]);
     let params = useParams();

     useEffect(()=>{
          axios.get(`https://rickandmortyapi.com/api/character/${params.id}`)
          .then((res)=>{
               console.log(res.data);
               setproduct(res.data);
               setepisode(res.data.episode);
          })
          .catch((err)=>{
               console.log(err);
          })

     },[])

  return (
    <>
          <Container>
               <Row>
                    <Col lg={4}>
                         <img src={product.image} alt="" className='w-100' />
                    </Col>
                    <Col lg={8}>
                         <h1>{product.name}</h1>
                         <p><strong>Status:</strong>{product.status}</p>
                         <p><strong>Gender:</strong>{product.gender}</p>
                         <p><strong>Species:</strong>{product.species}</p>
                    </Col>
               </Row>
          </Container>
    </>
  )
}

export default SingleChar