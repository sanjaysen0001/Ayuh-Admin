import React from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  Input,
  Form,
} from "reactstrap";
import "../../../assets/scss/pages/app-ecommerce-shop.scss";
import { Route } from "react-router-dom";
import axiosConfig from "../../../axiosConfig";
import swal from "sweetalert";
class EditDoctor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      fullname: "",
      email: "",
      mobileNumber: "",
      date: "",
      fromTime: "",
      toTime: "",
      consulting: "",
      physicianVisitFees: "",
      consultingFeesCharge: "",
      ratePerMin: "",
      days: "",
      image: null,
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/doctorPanel/viewById/${id}`)
      .then((response) => {
        const {
          fullname,
          email,
          mobileNumber,
          date,
          fromTime,
          toTime,
          consulting,
          physicianVisitFees,
          consultingFeesCharge,
          ratePerMin,
          days,
        } = response.data.data;
        this.setState({
          data: response.data.data,
          fullname: fullname,
          email: email,
          mobileNumber: mobileNumber,
          date: date,
          fromTime: fromTime,
          toTime: toTime,
          consulting: consulting,
          physicianVisitFees: physicianVisitFees,
          consultingFeesCharge: consultingFeesCharge,
          ratePerMin: ratePerMin,
          days: days,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("fullname", this.state.fullname);
    data.append("email", this.state.email);
    data.append("fromTime", this.state.fromTime);
    data.append("toTime", this.state.toTime);
    data.append("ratePerMin", this.state.ratePerMin);
    data.append("physicianVisitFees", this.state.physicianVisitFees);
    data.append("days", this.state.days);
    data.append("mobileNumber", this.state.mobile);
    data.append("date", this.state.dob);
    if (this.state.image !== null) {
      data.append("image", this.state.image);
    }

    for (var value of data.values()) {
      console.log(value);
    }

    for (var key of data.keys()) {
      console.log(key);
    }
    let { id } = this.props.match.params;
    axiosConfig
      .put(`/doctorPanel/doctor-edit/${id}`, data)
      .then((response) => {
        swal("Success!", "Profile updated successfully!", "success");
        this.componentDidMount(); // Refresh data after update
      })
      .catch((error) => {
        swal("Error!", "Doctor Details , please try again.", "error");
        console.error("Error updating profile:", error.response);
      });
  };
  handlePicture = (e) => {
    debugger;
    this.setState({ image: e.target.files[0] });
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <Row>
            <Col sm="12">
              <div>
                <Breadcrumb listTag="div">
                  <BreadcrumbItem href="/analyticsDashboard" tag="a">
                    Home
                  </BreadcrumbItem>
                  <BreadcrumbItem href="/userList/doctorList" tag="a">
                    Doctor List
                  </BreadcrumbItem>
                  <BreadcrumbItem active>Edit Doctor</BreadcrumbItem>
                </Breadcrumb>
              </div>
            </Col>
          </Row>
          <Card className="overflow-hidden app-ecommerce-details">
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
            <CardBody className="pb-0">
              <Form onSubmit={this.handleSubmit}>
                <Row className="mb-5 mt-2">
                  <Col md="3" sm="12" className="mb-2">
                    <h4>Doctor Name</h4>
                    <Input
                      type="text"
                      name="fullname"
                      value={this.state.fullname}
                      onChange={this.handleChange}
                    />
                  </Col>

                  <Col md="3" sm="12" className="mb-2">
                    <h4> Email</h4>
                    <Input
                      type="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </Col>
                  <Col md="3" sm="12" className="mb-2">
                    <h4> MobileNumber</h4>
                    <Input
                      type="number"
                      name="mobileNumber"
                      value={this.state.mobileNumber}
                      onChange={this.handleChange}
                    />
                  </Col>
                  <Col md="3" sm="12" className="mb-2">
                    <h4> DOB</h4>
                    <Input type="text" name="date" value={this.state.date} />
                  </Col>
                  <Col md="3" sm="12" className="mb-2">
                    <h4> PhysicianVisit Fees</h4>
                    <Input
                      type="text"
                      name="physicianVisitFees"
                      value={this.state.physicianVisitFees}
                      onChange={this.handleChange}
                    />
                  </Col>

                  <Col md="3" sm="12" className="mb-2">
                    <h4> ConsultingFees </h4>
                    <Input
                      type="text"
                      name="consultingFeesCharge"
                      value={this.state.consultingFeesCharge}
                      onChange={this.handleChange}
                    />
                  </Col>
                  <Col md="3" sm="12" className="mb-2">
                    <h4> Rate/Min </h4>
                    <Input
                      type="text"
                      name="ratePerMin"
                      value={this.state.ratePerMin}
                      onChange={this.handleChange}
                    />
                  </Col>
                  <Col md="3" sm="12" className="mb-2">
                    <h4> Days </h4>
                    <Input type="text" name="days" value={this.state.days} />
                  </Col>
                  <Col md="3" sm="12" className="mb-2">
                    <h4> FromTime</h4>
                    <Input
                      type="time"
                      name="fromTime"
                      value={this.state.fromTime}
                      onChange={this.handleChange}
                    />
                  </Col>
                  <Col md="3" sm="12" className="mb-2">
                    <h4>ToTime</h4>
                    <Input
                      type="time"
                      name="toTime"
                      value={this.state.toTime}
                      onChange={this.handleChange}
                    />
                  </Col>

                  <Col md="3" sm="12" className="mb-2">
                    <Input
                      className="mt-2"
                      type="file"
                      name="image"
                      onChange={this.handlePicture}
                    />
                  </Col>
                </Row>
                <Row className="my-2">
                  <Col>
                    <Button type="submit">Submit</Button>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}
export default EditDoctor;
