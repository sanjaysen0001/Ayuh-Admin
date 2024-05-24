// import React, { Component } from 'react'
// import {
//   Card,
//   CardBody,
//   Row,
//   Col,
//   Form,
//   Label,
//   Input,
//   Button,
// } from 'reactstrap'
// import axios from 'axios'
// import { Route } from 'react-router-dom'
// import Breadcrumbs from '../../../components/@vuexy/breadCrumbs/BreadCrumb'

// export default class AddUser extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       first_name: '',
//       last_name: '',
//       customer_email: '',
//       mobile_no: '',
//       selectedFile: undefined,
//       selectedName: '',
//       status: '',
//     }
//   }

//   onChangeHandler = (event) => {
//     this.setState({ selectedFile: event.target.files[0] })
//     this.setState({ selectedName: event.target.files[0].name })
//     console.log(event.target.files[0])
//   }
//   changeHandler1 = (e) => {
//     this.setState({ status: e.target.value })
//   }
//   changeHandler = (e) => {
//     this.setState({ [e.target.name]: e.target.value })
//   }
//   submitHandler = (e) => {
//     e.preventDefault()

//     axios
//       .post('http://3.108.185.7:4000/api/user/customersignup', this.state)
//       .then((response) => {
//         console.log(response)
//         alert('Customer Added Successful')
//         this.props.history.push('/app/customer/customerList')
//       })
//       .catch((error) => {
//         console.log(error)
//       })
//   }

//   render() {
//     return (
//       <div>
//         <Breadcrumbs
//           breadCrumbTitle="Pharma"
//           breadCrumbParent="Pharma List"
//           breadCrumbActive="Add Pharma "
//         />
//         <Card>
//           <Row className="m-2">
//             <Col>
//               <h1 sm="6" className="float-left">
//                 Add User
//               </h1>
//             </Col>

//             <Col>
//               <Route
//                 render={({ history }) => (
//                   <Button
//                     className=" btn btn-danger float-right"
//                     onClick={() => history.push('/app/userride/userRideList')}
//                   >
//                     {' '}
//                     Back
//                   </Button>
//                 )}
//               />
//             </Col>
//           </Row>
//           <CardBody>
//             <Form className="m-1" onSubmit={this.submitHandler}>
//               <Row>
//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Label>first Name</Label>
//                   <Input
//                     required
//                     type="text"
//                     name="first_name"
//                     placeholder="Enter First Name"
//                     value={this.state.first_name}
//                     onChange={this.changeHandler}
//                   ></Input>
//                 </Col>
//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Label>Last Name</Label>
//                   <Input
//                     required
//                     type="text"
//                     name="last_name"
//                     placeholder="Enter Last Name"
//                     value={this.state.last_name}
//                     onChange={this.changeHandler}
//                   ></Input>
//                 </Col>
//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Label> Email</Label>
//                   <Input
//                     required
//                     type="email"
//                     name="customer_email"
//                     placeholder="Email"
//                     value={this.state.customer_email}
//                     onChange={this.changeHandler}
//                   ></Input>
//                 </Col>

//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Label>Mobile No.</Label>
//                   <Input
//                     required
//                     type="number"
//                     name="mobile_no"
//                     placeholder="Mobile No."
//                     value={this.state.mobile_no}
//                     onChange={this.changeHandler}
//                   ></Input>
//                 </Col>
//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Label>DOB</Label>
//                   <Input
//                     required
//                     type="date"
//                     name="sortorder"
//                     placeholder="Enter Confirm  Password"
//                     value={this.state.sortorder}
//                     onChange={this.changeHandler}
//                   ></Input>
//                 </Col>
//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Label>Date Of Register</Label>
//                   <Input
//                     required
//                     type="date"
//                     name="sortorder"
//                     placeholder="Enter Confirm  Password"
//                     value={this.state.sortorder}
//                     onChange={this.changeHandler}
//                   ></Input>
//                 </Col>
//               </Row>
//               <Row>
//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Label>Password </Label>
//                   <Input
//                     required
//                     type="text"
//                     name="sortorder"
//                     placeholder="Enter Password"
//                     value={this.state.sortorder}
//                     onChange={this.changeHandler}
//                   ></Input>
//                 </Col>
//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Label>Confirm Password </Label>
//                   <Input
//                     required
//                     type="text"
//                     name="sortorder"
//                     placeholder="Enter Confirm  Password"
//                     value={this.state.sortorder}
//                     onChange={this.changeHandler}
//                   ></Input>
//                 </Col>
//               </Row>
//               <Col lg="6" md="6" sm="6" className="mb-2">
//                 <Label className="mb-1">Status</Label>
//                 <div
//                   className="form-label-group"
//                   onChange={(e) => this.changeHandler1(e)}
//                 >
//                   <input
//                     style={{ marginRight: '3px' }}
//                     type="radio"
//                     name="status"
//                     value="Active"
//                   />
//                   <span style={{ marginRight: '20px' }}>Active</span>

//                   <input
//                     style={{ marginRight: '3px' }}
//                     type="radio"
//                     name="status"
//                     value="Inactive"
//                   />
//                   <span style={{ marginRight: '3px' }}>Inactive</span>
//                 </div>
//               </Col>
//               <Row>
//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Button.Ripple
//                     color="primary"
//                     type="submit"
//                     className="mr-1 mb-1"
//                   >
//                     Add User
//                   </Button.Ripple>
//                 </Col>
//               </Row>
//             </Form>
//           </CardBody>
//         </Card>
//       </div>
//     )
//   }
// }



import React, { useState } from 'react';
import { Card, CardBody, Row, Col, Form, FormGroup, Label, Input, Button, CardHeader } from 'reactstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Breadcrumbs from '../../../../components/@vuexy/breadCrumbs/BreadCrumb';

const AddPharma = () => {
  const history = useHistory();
  const [data, setData] = useState({

    ///pharma name, pharma email,pharma number,password,cofirm password,date

    // image: '',
    fullname: '',
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
    date: '',
    // status: 'active',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
};


  const handleSubmit = (e) => {
    e.preventDefault();


    // axios.post('http://your-api-url/add-pharma', data)
    //   .then((response) => {
    //     console.log(response);
    //     alert('Pharma added successfully');
    //     history.push('/pharma-list');
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     alert('An error occurred while adding pharma');
    //   });
  };

  return (
    <Row>
      <Col>
        {/* <Breadcrumbs
          breadCrumbTitle="Pharma"
          breadCrumbParent="Pharma List"
          breadCrumbActive="Add Pharma"
        /> */}
        <Card>
          <CardHeader>
            <h1>Add Pharma</h1>
            <Button color="danger" onClick={() => history.goBack()}>Back</Button>
          </CardHeader>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <Row>
                {/* <Col md="6">
                  <FormGroup>
                    <Label for="image">Image</Label>
                    <Input type="file" name="image" id="image" onChange={handleInputChange} />
                  </FormGroup>
                </Col> */}
                <Col md="6">
                  <FormGroup>
                    <Label for="pharmaname">Pharma Name</Label>
                    <Input type="text" name="fullname" id="fullname" onChange={handleInputChange} required />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="email"> Pharma Email</Label>
                    <Input type="email" name="email" id="email" onChange={handleInputChange} required />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" onChange={handleInputChange} required />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="confirmPassword">Confirm Password</Label>
                    <Input type="password" name="confirmPassword" id="confirmPassword" onChange={handleInputChange} required />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label for="mobileNumber">Mobile Number</Label>
                    <Input type="tel" name="mobileNumber" id="mobileNumber" onChange={handleInputChange} required />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="date">Date</Label>
                    <Input type="date" name="date" id="date" onChange={handleInputChange} required />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                {/* <Col md="6">
                  <FormGroup>
                    <Label for="date">Date</Label>
                    <Input type="date" name="date" id="date" onChange={handleInputChange} required />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="status">Status</Label>
                    <Input type="select" name="status" id="status" value={data.status} onChange={handleInputChange}>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </Input>
                  </FormGroup>
                </Col> */}
              </Row>
              <Row>
                <Col className="text-right">
                  <Button type="submit" color="primary">Add Pharma</Button>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default AddPharma;
