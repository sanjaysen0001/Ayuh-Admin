import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  CustomInput,
} from "reactstrap";
import { useHistory } from "react-router-dom";

const AddCategoryForm = () => {
  // const [data, setData] = useState({
  //   categoryName: "",
  //   image: null,
  //   status: "",
  // });
  const [categoryName, setCategoryName] = useState("");
  const history = useHistory();

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setCategoryName();
  //   // setData({ ...data, [name]: value });
  // };

  // const handleImageChange = (e) => {
  //   const imageFile = e.target.files[0];
  //   setData({ ...data, image: imageFile });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(data);

    // setData({ categoryName: "", image: null });
  };

  return (
    <Card>
      <CardHeader>
        <h1>Add Pharma Category</h1>
        <Button
          onClick={() => history.goBack()}
          className=" btn btn-danger float-right"
        >
          Back
        </Button>
      </CardHeader>
      <CardBody>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col lg="6" md="6" sm="12">
              <FormGroup>
                <Label for="categoryName">
                  Category Name
                  <span style={{ color: "red", fontSize: "12px" }}>*</span>
                </Label>
                <Input
                  type="text"
                  name="categoryName"
                  id="categoryName"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  placeholder="Enter Category Name"
                  required
                />
              </FormGroup>
            </Col>
            {/* <Col lg="6" md="6" sm="12">
              <FormGroup>
                <Label for="image">
                  Image <span style={{ color: "red" }}>*</span>
                </Label>
                <Input
                  type="file"
                  name="image"
                  id="image"
                  onChange={handleImageChange}
                  accept="image/*"
                  required
                />
              </FormGroup>
            </Col> */}

            {/* <Col lg="6" md="6" sm="12" className="mb-2">
              <Label className="mb-1">Status</Label>
              <div
                className="form-label-group"
                // onChange={(e) => this.changeHandler1(e)}
              >
                <input
                  style={{ marginRight: "3px" }}
                  type="radio"
                  name="approvedstatus"
                  value="Active"
                  // checked={this.state.status == "Active" ? "true" : "false"}
                />
                <span style={{ marginRight: "20px" }}>Active</span>

                <input
                  style={{ marginRight: "3px" }}
                  type="radio"
                  name="status"
                  value="Inactive"
                  // checked={this.state.status == "Active" ? "true" : "false"}
                />
                <span style={{ marginRight: "3px" }}>Inactive</span>
              </div>
            </Col> */}
            <Col lg="6" md="6" sm="12" className="mt-1">
              <Button color="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  );
};

export default AddCategoryForm;
