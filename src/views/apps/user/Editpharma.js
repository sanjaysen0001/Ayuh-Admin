import React, { Component } from "react";
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,

  Label,
  Button,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import "react-toastify/dist/ReactToastify.css";
import { Route } from "react-router-dom";

import swal from "sweetalert";
export class Editpharma extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // fullname: "",
      // email: "",
      // mobile: "",
      // password: "",
      // cnfmPassword: "",
      // userimg: "",
      // selectedName: "",
      // selectedFile: null,
      status: "",
    };
  }

  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };

  componentDidMount() {
    console.log(this.props.match.params);
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/pharma/pharma-by-id/${id}`)
      .then((response) => {
        console.log(response);
        this.setState({
          // fullname: response.data.data.fullname,
          status:response?.data?.Pharma?.status
          // email: response.data.data.email,
          // mobile: response.data.data.mobile,
          // userimg: response.data.userimg,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();


    let { id } = this.props.match.params;


    axiosConfig.put(`/admin/pharma-update-status/${id}`, { status: this.state.status }).then((res) => {
      console.log(res)
        swal("Success!", "Updated Successfully!", "success");
        // this.props.history.push("/app/user/userList");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  render() {
    return (
      <div>
        {/* <Breadcrumbs
          breadCrumbTitle="User"
          breadCrumbParent="Home"
          breadCrumbActive="Edit Users "
        /> */}
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit Pharma
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
              {/* <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Pharma Name</Label>
                  <Input
                    required
                    type="text"
                    name="fullname"
                    placeholder="Enter First Name"
                    value={'anujesh'}
                    // onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Email ID</Label>
                  <Input
                    required
                    type="email"
                    name="email"
                    placeholder="Enter Last Name"
                    value={'anujesh123@gmail.com'}
                    // onChange={this.changeHandler}
                  ></Input>
                </Col>

                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Pharma Number</Label>
                  <Input
                    required
                    type="number"
                    name="mobile"
                    placeholder="Mobile No."
                    value={'7890786305'}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>

                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Date </Label>
                    <Input
                      required
                      type="text"
                      name="sortorder"
                      placeholder="date"
                      value={'10-03-2024'}
                      onChange={this.changeHandler}>
                    </Input>
                </Col>
                </Row> */}
   <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Status</Label>
                  <div onChange={this.changeHandler1}>
                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Active"
                      checked={this.state.status === "Active"}
                    />
                    <span style={{ marginRight: "20px" }}>Active</span>

                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Inactive"
                      checked={this.state.status === "Inactive"}
                    />
                    <span style={{ marginRight: "3px" }}>Inactive</span>
                  </div>
                </Col>
              </Row>


              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Update Pharma
                  </Button.Ripple>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default Editpharma;
