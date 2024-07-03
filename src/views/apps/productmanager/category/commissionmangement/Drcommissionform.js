import React, { Component } from "react";
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  Label,
  Button,
  FormGroup,
  // CustomInput,
} from "reactstrap";

import axiosConfig from "../../../../../axiosConfig";
import "react-toastify/dist/ReactToastify.css";
import { Route } from "react-router-dom";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// import { data } from "jquery";
import Swal from "sweetalert2";
export class DrForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectdoctor: "",
      commissionvalue: "",
      categories: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axiosConfig
      .get("/doctorPanel/viewAll")
      .then((response) => {
        const datas = response.data?.data;
        this.setState({ categories: datas });
        console.log(datas);
      })
      .catch((error) => {
        console.error("There was an error fetching the categories!", error);
      });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit(event) {
    event.preventDefault();
    const { selectdoctor, commissionvalue } = this.state;

    // Validate form data
    if (!selectdoctor || !commissionvalue) {
      alert("Please fill in all fields");
      return;
    }

    // Post data to API
    axiosConfig
      .post("/doctor-commision/insert", {
        selectdoctor: selectdoctor,
        commissionvalue: commissionvalue,
      })
      .then((response) => {
        console.log(response.data);

        this.setState({ selectdoctor: "", commissionvalue: "" });
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Add successfully.",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again later.",
        });
      });
  }

  render() {
    const { selectdoctor, commissionvalue, categories } = this.state;
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add Doctor Commission
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() =>
                      history.push(
                        "/app/productmanager/category/commissionmangement/doctorcommission"
                      )
                    }
                  >
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>
          <CardBody>
            <Form onSubmit={this.handleSubmit}>
              <Row className="ml-3 mr-3">
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <FormGroup className="align-items-center">
                    <label htmlFor="categorySelect">Select Doctor</label>
                    <br />
                    <select
                      className="form-select w-100"
                      style={{
                        height: "37px",
                        border: "1px solid #d9d9d9",
                        borderRadius: "5px",
                      }}
                      aria-label="Default select example"
                      id="categorySelect"
                      name="selectdoctor"
                      value={selectdoctor}
                      onChange={this.handleChange}
                    >
                      <option value="" disabled>
                        --Select--
                      </option>
                      {categories.map((doctor) => (
                        <option key={doctor.id} value={doctor.id}>
                          {doctor.fullname}
                        </option>
                      ))}
                    </select>
                  </FormGroup>
                </Col>
                <Col lg="6" md="6" sm="6">
                  <FormGroup>
                    <label htmlFor="categorySelect"> Commission Value</label>
                    <br />
                    <Input
                      type="number"
                      name="commissionvalue"
                      id="commissionValue"
                      placeholder="Enter commission value"
                      value={commissionvalue}
                      onChange={this.handleChange}
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup className="ml-3 mr-3">
                <Col className="text-right">
                  <Button color="primary" type="submit">
                    Submit
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default DrForm;
