import React, { useState } from "react";
import { Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button, CustomInput } from "reactstrap";
import { useHistory } from "react-router-dom";


const AddCategoryForm = () => {
  const [data, setData] = useState({
    categoryName: "",
    image: null,
    status:'active',
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

    console.log(data);

    setData({ categoryName: "", image: null });
  };

//   const handleBack = () => {
//     history.goBack();
//   };

  return (
    <Row>
      <Col sm="12" md="8" className="mx-auto">
        <Card>
          <CardHeader><h1>Add Pharma Category</h1>
          <Button  onClick={() => history.goBack()}  className=" btn btn-danger float-right">Back</Button></CardHeader>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="categoryName">Category Name:</Label>
                <Input
                  type="text"
                  name="categoryName"
                  id="categoryName"
                  value={data.categoryName}
                  onChange={handleInputChange}
                  placeholder="Enter category name"
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

export default AddCategoryForm;
