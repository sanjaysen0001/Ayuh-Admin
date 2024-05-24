import React, { useState } from "react";
import { Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useHistory } from "react-router-dom";

const AddTestForm = () => {
  const [testData, setTestData] = useState({
    category: "",
    testName: "",
    testImage: null,
    price: "",
    description: "",
    diagnosticsCenter: "",
  });

  const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTestData({ ...testData, [name]: value });
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setTestData({ ...testData, testImage: imageFile });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to backend
    console.log(testData);
    // Reset form fields after submission
    setTestData({
      category: "",
      testName: "",
      testImage: null,
      price: "",
      description: "",
      diagnosticsCenter: "",
    });
  };

  return (
    <Row>
      <Col sm="12" md={{ size: 6, offset: 3 }}>
        <Card>
          <CardHeader>
            <h1>Add Test </h1>
            <Button onClick={() => history.goBack()} className="btn btn-danger float-right">Back</Button>
          </CardHeader>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="category">Choose Category:</Label>
                <Input
                  type="select"
                  name="category"
                  id="category"
                  value={testData.category}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Category</option>
                  {/* Add options for categories */}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="testName">Test Name:</Label>
                <Input
                  type="text"
                  name="testName"
                  id="testName"
                  value={testData.testName}
                  onChange={handleInputChange}
                  placeholder="Enter test name"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="testImage">Test Image:</Label>
                <Input
                  type="file"
                  name="testImage"
                  id="testImage"
                  onChange={handleImageChange}
                  accept="image/*"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="diagnosticsCenter">Diagnostics Center Name:</Label>
                <Input
                  type="text"
                  name="diagnosticsCenter"
                  id="diagnosticsCenter"
                  value={testData.diagnosticsCenter}
                  onChange={handleInputChange}
                  placeholder="Enter diagnostics center name"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="price">Price:</Label>
                <Input
                  type="number"
                  name="price"
                  id="price"
                  value={testData.price}
                  onChange={handleInputChange}
                  placeholder="Enter price"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="description">Description:</Label>
                <Input
                  type="textarea"
                  name="description"
                  id="description"
                  value={testData.description}
                  onChange={handleInputChange}
                  placeholder="Enter description"
                  required
                />
              </FormGroup>
              <Button color="primary" type="submit">Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default AddTestForm;
