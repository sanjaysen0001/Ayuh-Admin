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
  CustomInput,
} from "reactstrap";
import axiosConfig from "../../../../../axiosConfig";
import "react-toastify/dist/ReactToastify.css";
import { Route } from "react-router-dom";
import Breadcrumbs from "../../../../../components/@vuexy/breadCrumbs/BreadCrumb";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import "../../../../../assets/scss/plugins/extensions/editor.scss";
import draftToHtml from "draftjs-to-html";
import Swal from "sweetalert2";
// import { data } from "jquery";
// import swal from "sweetalert";

export class AddCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: '',
      date: '',
      description: ''
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitHandler(e) {
    e.preventDefault();
    const { categoryName, date, description } = this.state;

    axiosConfig.post('/admin-category/create', {
      categoryName,
      date,
      description
    })
    .then(response => {
      console.log(response.data);
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Category Added successfully.",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
      })
      window.location.reload();
    })
    .catch(error => {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again later.",
      });
    });
  }
  render() {
    return (
      <div>
        {/* <Breadcrumbs
          breadCrumbTitle="App Management"
          breadCrumbParent="Add Category"
          // breadCrumbActive="Add Category"
        /> */}
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add Category
              </h1>
            </Col>
            <Col>
              <Route
              render={({ history }) => (
                <Button
                  className=" btn btn-danger float-right"
                  onClick={() => history.goBack()}
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
                onChange={this.changeHandler}
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
                onChange={this.changeHandler}
              />
            </Col>
            <Col lg="6" md="6" sm="6" className="mb-2">
              <Label>Description</Label>
              <textarea
                style={{ width: '100%', padding: "0.7rem 0.7rem", border: "1px solid #d9d9d9", borderRadius: '5px' }}
                required
                type="text"
                name="description"
                placeholder="Description"
                value={this.state.description}
                onChange={this.changeHandler}
              ></textarea>
            </Col>
          </Row>
          <Row>
            <Col lg="6" md="6" sm="6" className="mb-2">
              <Button color="primary" type="submit" className="mr-1 mb-1">
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
export default AddCategory;
