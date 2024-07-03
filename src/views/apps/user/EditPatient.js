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
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
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
    let { id } = this.props.match.params;
    console.log(id);
    axiosConfig
      .get(`/patient/patient-by-id/${id}`)
      .then((response) => {
        console.log(response.data.Patient);
        const { fullname, email, mobileNumber, userimg } =
          response.data.Patient;
        this.setState({
          fullname: fullname,
          email: email,
          mobile: mobileNumber,
          userimg: userimg,
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
    const data = new FormData();

    data.append("fullname", this.state.fullname);
    data.append("email", this.state.email);
    data.append("status", this.state.status);
    if (this.state.selectedFile !== null) {
      data.append("userimg", this.state.selectedFile, this.state.selectedName);
    }

    let { id } = this.props.match.params;
    axiosConfig
      .put(`/patientPanel-appointment/edit/${id}`, data)
      .then((response) => {
        console.log(response.data?.message);
        swal("Success!", `${response.data?.message}`, "success");
        this.props.history.goBack();
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
                Edit Patient
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
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>
                    Name{" "}
                    <span style={{ color: "red", fontSize: "15px" }}>*</span>
                  </Label>
                  <Input
                    required
                    type="text"
                    name="fullname"
                    placeholder="Enter First Name"
                    value={this.state.fullname}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>
                    Email{" "}
                    <span style={{ color: "red", fontSize: "15px" }}>*</span>
                  </Label>
                  <Input
                    required
                    type="email"
                    name="email"
                    placeholder="Enter Last Name"
                    value={this.state.email}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>

                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>
                    Mobile No.{" "}
                    <span style={{ color: "red", fontSize: "15px" }}>*</span>
                  </Label>
                  <Input
                    required
                    type="text"
                    name="mobile"
                    placeholder="Mobile No."
                    value={this.state.mobile}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>User Image</Label>
                  <Input
                    className="form-control"
                    type="file"
                    name="userimg"
                    onChange={this.onChangeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Label>
                    Date Of Register{" "}
                    <span style={{ color: "red", fontSize: "15px" }}>*</span>
                  </Label>
                  <Input
                    required
                    type="date"
                    name="sortorder"
                    value={this.state.sortorder}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>

                <Col lg="4" md="4" sm="12" className="mb-2">
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
                      checked={this.state.status == "Active" ? "true" : "false"}
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
                </Col>
              </Row>
              <Row>
                <Col lg="4" md="4" sm="12" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Update Patient
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
