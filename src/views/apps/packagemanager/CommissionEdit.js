

import React, { Component } from "react";
import Swal from "sweetalert2";
import {
  Card, 
  CardBody,
  Col,
  Form,
  Row,
  Input,
  Label,
  Button,
 
} from "reactstrap";

// import axiosConfig from "../../../../axiosConfig";
import axiosConfig from "../../../axiosConfig"
import "react-toastify/dist/ReactToastify.css";
import { Route } from "react-router-dom";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


export class CommissionEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectdoctor: "",
      commissionvalue:"",
     
      categorys:{} // For error handling
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  submitHandler = (e) => {
    const payload = {
      commissionvalue: this.state.commissionvalue,
      selectdoctor:this.state.selectdoctor,
      
    };
    e.preventDefault();
    let { id } = this.props.match.params;
    axiosConfig
      .put(`/doctor-commision/updatebyid/${id}`, payload)
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Category Edit successfully.",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            this.props.history.push(`/app/productmanager/category/commissionmangement/doctorcommission`);
          }
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  componentDidMount() {

    let { id } = this.props.match.params;
    axiosConfig.get(`/doctor-commision/showbyid/${id}`)
      .then((response) => {
       const datas=response.data?.data
        this.setState(datas);
        console.log(datas);
      })
      .catch((error) => {
        console.log(error.response);
      }); 
  }

  render() {
    return (
      <div>
      <Card>
      <Row className="m-2">
        <Col>
          <h1 col-sm-6 className="float-left">
          Edit Doctor Commission

          </h1>
        </Col>
        <Col>
          <Route
            render={({ history }) => (
              <Button
                className=" btn btn-danger float-right"
                onClick={() =>
                  history.push("/app/productmanager/category/commissionmangement/doctorcommission")
                }
              >
                Back
              </Button>
            )}
          />
        </Col>
      </Row>
      <CardBody>
      <Form className="m-1" onSubmit={this.submitHandler}>
      <Row>
        <Col lg="6" md="6" sm="6" className="mb-2">
          <Label>Doctor Name</Label>
          <Input
            required
            type="text"
            name="selectdoctor"
            placeholder="Enter Category Name"
            value={this.state.selectdoctor}
            onChange={this.handleChange}
            disabled
          />
        </Col>


        <Col lg="6" md="6" sm="6" className="mb-2">
          <Label>Commission Value</Label>
          <Input
          required
          type="text"
          name="commissionvalue"
          placeholder="Enter Category Name"
          value={this.state.commissionvalue}
          onChange={this.handleChange}
        />
        </Col>
      </Row>

      <Row>
        <Col lg="6" md="6" sm="6" className="mb-2">
          <Button
            color="primary"
            type="submit"
            className="mr-1 mb-1"
          >
            Save
          </Button>
        </Col>
      </Row>
    </Form>
      </CardBody>
    </Card>
      </div>
    );
  }
}
export default CommissionEdit;

