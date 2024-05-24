import React, { useState } from "react";
import { Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button,CustomInput } from "reactstrap";
import { useHistory } from "react-router-dom";

const AddMedicineForm = () => {
  const [data, setData] = useState({
    medicineType: "",
    medicineName: "",
    unit: "",
    medicineDetails: "",
    price: "",
    image: null,
    status: "active",
  });

  const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setData({ ...data, image: imageFile });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to backend
    console.log(data);
    // Reset form fields after submission
    setData({
      medicineType: "",
      medicineName: "",
      unit: "",
      medicineDetails: "",
      price: "",
      image: null,
      status: "active",
    });
  };

  return (
    <Row>
      <Col sm="12" md={{ size: 6, offset: 3 }}>
      {/* <Col sm="12" md="8" className="mx-auto"> */}
        <Card>
          <CardHeader>
            <h1>Add Medicine</h1>
            <Button onClick={() => history.goBack()} className="btn btn-danger float-right">Back</Button>
          </CardHeader>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="medicineType">Medicine Type:</Label>
                <Input
                  type="text"
                  name="medicineType"
                  id="medicineType"
                  value={data.medicineType}
                  onChange={handleInputChange}
                  placeholder="Enter medicine type"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="medicineName">Medicine Name:</Label>
                <Input
                  type="text"
                  name="medicineName"
                  id="medicineName"
                  value={data.medicineName}
                  onChange={handleInputChange}
                  placeholder="Enter medicine name"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="unit">Unit:</Label>
                <Input
                  type="text"
                  name="unit"
                  id="unit"
                  value={data.unit}
                  onChange={handleInputChange}
                  placeholder="Enter unit"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="medicineDetails">Medicine Details:</Label>
                <Input
                  type="textarea"
                  name="medicineDetails"
                  id="medicineDetails"
                  value={data.medicineDetails}
                  onChange={handleInputChange}
                  placeholder="Enter medicine details"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="price">Price:</Label>
                <Input
                  type="number"
                  name="price"
                  id="price"
                  value={data.price}
                  onChange={handleInputChange}
                  placeholder="Enter price"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="image">Image:</Label>
                <Input
                  type="file"
                  name="image"
                  id="image"
                  onChange={handleImageChange}
                  accept="image/*"
                  required
                />
              </FormGroup>
              <FormGroup row>
                <Label for="status" sm={2}>Status:</Label>
                <Col sm={10}>
                  <CustomInput
                    type="radio"
                    id="active"
                    name="status"
                    label="Active"
                    value="active"
                    checked={data.status === "active"}
                    onChange={handleInputChange}
                  />
                  {''}
                  <CustomInput
                    type="radio"
                    id="inactive"
                    name="status"
                    label="Inactive"
                    value="inactive"
                    checked={data.status === "inactive"}
                    onChange={handleInputChange}
                  />
                </Col>
              </FormGroup>
              <Button color="primary" type="submit">Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default AddMedicineForm;
