
import React, { useState } from 'react';
import { Card, CardBody, Row, Col, Form, FormGroup, Label, Input, Button, CardHeader } from 'reactstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Breadcrumbs from '../../../../components/@vuexy/breadCrumbs/BreadCrumb';

//diagnostic name, diagnostic email,diagnostic phone ,password,cofirm password,date


const AddDiagon = () => {
  const history = useHistory();
  const [data, setData] = useState({

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
          breadCrumbTitle="Diagnostic"
          breadCrumbParent="Diagnostic List"
          breadCrumbActive="Add Diagnostic"
        /> */}
        <Card>
          <CardHeader>
            <h1>Add Diagnostic</h1>
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
                    <Label for="diagnosticname">Diagnostic Name</Label>
                    <Input type="text" name="fullname" id="fullname" onChange={handleInputChange} required />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="email"> Diagnostic Email</Label>
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

export default AddDiagon;
