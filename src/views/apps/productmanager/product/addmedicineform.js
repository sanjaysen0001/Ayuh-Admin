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
import axiosConfig from "../../../../axiosConfig";
import swal from "sweetalert";
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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission logic here, e.g., send data to backend
  //   console.log(data);
  //   // Reset form fields after submission
  //   setData({
  //     medicineType: "",
  //     medicineName: "",
  //     unit: "",
  //     medicineDetails: "",
  //     price: "",
  //     image: null,
  //     status: "active",
  //   });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", this.state.title);
    data.append("productname", this.state.productname);
    data.append("category", this.state.category);
    data.append("desc", this.state.desc);
    data.append("price", this.state.price);
    data.append("qsCount", this.state.qsCount);
    // data.append("limit", this.state.limit);

    data.append("status", this.state.status);

    for (const file of this.state.selectedFile) {
      if (this.state.selectedFile !== null) {
        data.append("image", file);
      }
    }

    axiosConfig
      .post(`/admin/addProduct`, data)
      .then((response) => {
        console.log(response.data);
        swal("Product Added Successful");
        this.props.history.push("/app/productmanager/product/productList");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Card>
      <CardHeader>
        <h1>Add Medicine</h1>
        <Button
          onClick={() => history.goBack()}
          className="btn btn-danger float-right"
        >
          Back
        </Button>
      </CardHeader>
      <CardBody>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col lg="6" md="6" sm="12">
              <Label for="medicineType">Medicine Type:</Label>
              <FormGroup>
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
            </Col>
            <Col lg="6" md="6" sm="12">
              <Label for="medicineName">Medicine Name:</Label>
              <FormGroup>
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
            </Col>
            <Col lg="6" md="6" sm="12">
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
            </Col>
            <Col lg="6" md="6" sm="12">
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
            </Col>{" "}
            <Col lg="6" md="6" sm="12">
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
            </Col>{" "}
            <Col lg="6" md="6" sm="12">
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
            </Col>
            <Col>
              <Row>
                <Label for="status" sm={2}>
                  Status:
                </Label>
                <CustomInput
                  type="radio"
                  className="mt-1"
                  id="active"
                  name="status"
                  label="Active"
                  value="active"
                  checked={data.status === "active"}
                  onChange={handleInputChange}
                />

                <CustomInput
                  type="radio"
                  className="mt-1"
                  id="inactive"
                  name="status"
                  label="Inactive"
                  value="inactive"
                  checked={data.status === "inactive"}
                  onChange={handleInputChange}
                />
              </Row>
            </Col>
            <Col>
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

export default AddMedicineForm;
