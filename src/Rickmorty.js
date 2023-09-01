import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Card, ListGroup } from 'react-bootstrap';

function Rickmorty() {

  const [data,setdata]=useState([]);

  useEffect(()=>{
    axios.get('https://rickandmortyapi.com/api/character')
    .then((res)=>{
      setdata([...res.data.results]);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])

  return (
    <>

          <Container className='my-5'>
            <Row className='g-3'>
              {
                data.map((detail)=>{
                  return(
                    <Col lg={4}>
                      <Card>
                        <Card.Img variant="top" src={detail.image} />
                        <Card.Body>
                          <Card.Title>{detail.name}</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                          <ListGroup.Item><b>Status : </b> {detail.status} - {detail.species}</ListGroup.Item>
                          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                      </Card>
                    </Col>
                  )
                })
              }
            </Row>
          </Container>

    </>
  )
}

export default Rickmorty;