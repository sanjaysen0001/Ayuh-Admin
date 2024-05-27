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
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import "react-toastify/dist/ReactToastify.css";
import { Route } from "react-router-dom";
// import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import swal from "sweetalert";
export class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
      mobile: "",
      password: "",
      cnfmPassword: "",
      userimg: "",
      selectedName: "",
      selectedFile: null,
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
      .get(`/user/viewoneuser/${id}`)
      .then((response) => {
        console.log(response);
        this.setState({
          fullname: response.data.data.fullname,
          email: response.data.data.email,
          mobile: response.data.data.mobile,
          userimg: response.data.userimg,
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
    console.log(this.state);
    const data = new FormData();

    data.append("fullname", this.state.fullname);
    data.append("email", this.state.email);
    data.append("status", this.state.status);
    if (this.state.selectedFile !== null) {
      data.append("userimg", this.state.selectedFile, this.state.selectedName);
    }

    for (var value of data.values()) {
      console.log(value);
    }
    for (var key of data.keys()) {
      console.log(key);
    }
    let { id } = this.props.match.params;
    axiosConfig
      .post(`/user/myprofile/${id}`, data)
      .then((response) => {
        console.log(response.data);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/user/userList");
      })
      .catch((error) => {
        console.log(error);
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
                Edit Doctor
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
                  <Label>Full Name</Label>
                  <Input
                    required
                    type="text"
                    
                    placeholder="Enter First Name"
                    value={'Manoj'}
                    // onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Email ID</Label>
                  <Input
                    required
                    type="email"
                    // name="email"
                    placeholder="Enter Last Name"
                    value={'Manoj@gmail.com'}
                    // onChange={this.changeHandler}
                  ></Input>
                </Col>

                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Phone Number</Label>
                  <Input
                    required
                    type="number"
                    name="mobile"
                    placeholder="Mobile No."
                    value={'8520147863'}
                    // onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Schedule</Label>
                  <Input
                    className="form-control"
                    type="text"
                    name="userimg"
                    value={'14-04-2024        '}
                    // onChange={this.onChangeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Consulting</Label>
                    <Input
                      required
                      type="text"
                      name="sortorder"
                      placeholder="Enter Confirm  Password"
                      value={'10-04-2024         '}
                      // onChange={this.changeHandler}
                      >
                    </Input>
                </Col>
                </Row>
              <Row>
              <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>VIP Schedule
                  </Label>
                    <Input
                      required
                      type="text"
                      // name="password"
                      placeholder="Enter Password"
                      value={'13-04-2024         '}
                      onChange={this.changeHandler}>
                    </Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>VIP Consulting
                  </Label>
                    <Input
                      required
                      type="text"
                      name="cnfmPassword"
                      placeholder="Enter Confirm  Password"
                      value={'12-04-2024'}
                      // onChange={this.changeHandler}
                      >
                    </Input>
                </Col>
              </Row>
              <Row>
              <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>VIP Consulting Fees </Label>
                    <Input
                      required
                      type="text"
                      name="schedule"
                      placeholder="Enter Schedule"
                      value={'2000'}
                      // onChange={this.changeHandler}
                      >
                    </Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Physical Visit Fees</Label>
                    <Input
                      required
                      type="text"
                      name="consulting"
                      placeholder="Enter Consulting"
                      value={'2500'}
                      // onChange={this.changeHandler}
                      >
                    </Input>
                </Col>
              </Row>
              <Row>
              <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Date </Label>
                    <Input
                      required
                      type="schedule"
                      name="schedule"
                      placeholder="Enter Schedule"
                      value={'10-04-2024'}
                      onChange={this.changeHandler}>
                    </Input>
                </Col>
               
              </Row>
              <Col lg="6" md="6" sm="6" className="mb-2">
                <Label className="mb-1">Status</Label>
                <div
                  className="form-label-group"
                  onChange={(e) => this.changeHandler1(e)}
                >
                  <input
                    style={{ marginRight: "3px" }}
                    type="radio"
                    name="approvedstatus"
                    value="Active"
                  />
                  <span style={{ marginRight: "20px" }}>Active</span>

                  <input
                    style={{ marginRight: "3px" }}
                    type="radio"
                    name="status"
                    value="Inactive"
                  />
                  <span style={{ marginRight: "3px" }}>Inactive</span>
                </div>
              </Col>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Update Doctor
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
export default EditUser;
