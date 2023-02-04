import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image,Button } from 'react-bootstrap';
import Operatingtime from './Operatingtime';
import Review from './Review';
import { useDispatch,useSelector} from 'react-redux';




function ViewRest() {

const params=useParams()
// // console.log(param.id);


//   const [allrestaurent, setALlrestaurent] = useState([])

//   // function to api call for datas inside json file
//  const getrestaurentdata = async () => {
//       await fetch('/restaurants.json')
//           .then(data => {
//               data.json().then(result => {
//                       setALlrestaurent(result.restaurants)

//                   })


//           })
//   }
  // console.log(allrestaurent);

  

  useEffect(() => {
    //   getrestaurentdata()
  }, [])

  const result=useSelector(state=>state.restaurantReducer)
  const {restaurantList}=result

  const restData=restaurantList.find(item=>item.id==params.id)
 console.log(restData);



  return (
    <>
    {restData?(

    <Row>
        <Col>
            <Image className='p-5' src={restData.photograph} fluid />
        </Col>
        <Col className='mt-5'>
           <h1>{restData.name}</h1>
           <h3>{restData.neighborhood}</h3>
           <h4>cusine type: {restData.cuisine_type}</h4>
           <h4>address: {restData.address}</h4>
           <Operatingtime timeData={restData.operating_hours} ></Operatingtime>
           <br></br>

           <Review reviewData={restData.reviews}></Review>


        </Col>
    </Row>
  ):'null'}
  </>
  )
    }
export default ViewRest
