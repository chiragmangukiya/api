import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Cart() {

     const cartItem = useSelector((state)=>state.cart.cartItem)

  return (
    <>
    <Container>
          <Row>
          {
               cartItem.map((item)=>{
                    return(
                         <>
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
                                                  </div>
                                             </Card.Text>
                                        </Card.Body>
                                   </Card>
                              </Col>
                         </>
                    )
               })
          }
          </Row>
     </Container>
    </>
  )
}

export default Cart