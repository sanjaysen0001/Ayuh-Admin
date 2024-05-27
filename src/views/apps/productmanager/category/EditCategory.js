

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

import axiosConfig from "../../../../axiosConfig";

import "react-toastify/dist/ReactToastify.css";
import { Route } from "react-router-dom";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../../assets/scss/plugins/extensions/editor.scss";

export class EditCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: "",
      date:"",
      description:"",
      errorMessage: "",
      categorys:{} // For error handling
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  submitHandler = (e) => {
    const payload = {
      categoryName: this.state.categoryName,
      description:this.state.description,
      date:this.state.date
    };
    e.preventDefault();
    let { id } = this.props.match.params;
    axiosConfig
      .put(`/admin-category/edit/${id}`, payload)
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Category Edit successfully.",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            this.props.history.push(`/appmanagement/category-list`);
          }
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  componentDidMount() {

    let { id } = this.props.match.params;
    axiosConfig.get(`/admin-category/viewbyid/${id}`)
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
            Edit Category
          </h1>
        </Col>
        <Col>
          <Route
            render={({ history }) => (
              <Button
                className=" btn btn-danger float-right"
                onClick={() =>
                  history.push("/appmanagement/category-list")
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
          <Label>Category Name</Label>
          <Input
            required
            type="text"
            name="categoryName"
            placeholder="Enter Category Name"
            value={this.state.categoryName}
            onChange={this.handleChange}
          />
        </Col>

        <Col lg="6" md="6" sm="6" className="mb-2">
          <Label>Date</Label>
          <Input
            required
            type="date"
            name="date"
            placeholder="Enter Date"
            value={this.state.date}
            onChange={this.handleChange}
          />
        </Col>

        <Col lg="6" md="6" sm="6" className="mb-2">
          <Label>Description</Label>
          <textarea
            style={{
              width: '100%',
              padding: "0.7rem 0.7rem",
              border: "1px solid #d9d9d9",
              borderRadius: '5px'
            }}
            required
            name="description"
            placeholder="description"
            value={this.state.description}
            onChange={this.handleChange}
          ></textarea>
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
export default EditCategory;

