import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function Jsonplace() {

     const [data1,setdata1]=useState([]);
     const [title, setTitle] = useState('');
     const [body, setBody] = useState('');

     const [editid,seteditid] = useState();
     const [isedit,setisedit] = useState(false);

     

     useEffect(()=>{          
          axios.get('https://jsonplaceholder.typicode.com/posts')
          .then((res)=>{
               // console.log(res.data);
               setdata1(res.data);
          })
          .catch((err)=>{
               console.log(err);
          })
     },[]);

     // useEffect(()=>{
     //      fetch("https://jsonplaceholder.typicode.com/posts")
     //      .then(response => {
     //           return response.json()
     //      })
     //      .then(data => {
     //           setdata1(data)
     //      })
     // },[]);

     const dltHandler = (id, e) => {
          axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then((res)=>{
               console.log(res.data);
          })

          // fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{method: 'DELETE'})
          // .then((res)=>{
          //      console.log(res.data);
          // })

          const posts = data1.filter((item) => item.id !== id);  
          setdata1(posts); 
     }

     const editData = (eid) => {
          seteditid(eid)
          setisedit(true)
          const eData=data1[eid]
          setTitle(eData.title)
          setBody(eData.body)
     }
     const addData = () => {

          if(isedit){
               axios.put(`https://jsonplaceholder.typicode.com/posts/${editid}`, {
                    title: title,
                    body: body
               })
               .then((res)=>{                       
                    const newData=[...data1]
                    newData[editid]=res.data
                    setdata1(newData);                    
               })
          }
          else{
               axios.post("https://jsonplaceholder.typicode.com/posts/", {
                    title: title,
                    body: body
               })
               .then((res)=>{               
                    setdata1((data1) => [res.data,...data1]);
                    setTitle('')
                    setBody('')
               })
          }
     }

  return (
    
     <>
          <Container>

               <div className='mb-5'>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                         <Form.Label>Title</Form.Label>
                         <Form.Control type="test" value={title} name="title" placeholder="Enter Title" onChange={(e) => {setTitle(e.target.value)}} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                         <Form.Label>Discription</Form.Label>
                         <Form.Control as="textarea" name="body" value={body} onChange={(e) => {setBody(e.target.value)}} rows={3} />
                    </Form.Group>
                    <button onClick={addData} className='btn btn-primary'>{(isedit) ? 'Update' : 'Add Data'}</button>
               </div>

               <table className='table table-bordered' cellPadding={10}>
                    <tr>
                         <th>No</th>
                         <th>Title</th>
                         <th>Discription</th>
                         <th>Action</th>
                    </tr>
                    {
                         data1.map((ele,ind)=>{
                         return(
                              <tr>
                                   <td>{ind+1}</td>
                                   <td>{ele.title}</td>
                                   <td>{ele.body}</td>
                                   <td>
                                        <button className='btn bg-info text-white' onClick={()=>{editData(ind)}}>Update</button>
                                        <button className='btn bg-danger text-white' onClick={()=>{dltHandler(ind)}}>Delete</button>
                                   </td>
                              </tr>
                         )
                         })
                    }
               </table>
          </Container>
     </>

  )
}

export default Jsonplace