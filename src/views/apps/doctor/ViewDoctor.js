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
} from "reactstrap";
import "../../../assets/scss/pages/app-ecommerce-shop.scss";
import { Route } from "react-router-dom";
import axiosConfig from "../../../axiosConfig";
class ViewDoctor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/doctorPanel/viewById/${id}`)
      .then((response) => {
        console.log(response.data.data);
        this.setState({ data: response.data.data });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

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
                  <BreadcrumbItem active>View Doctor</BreadcrumbItem>
                </Breadcrumb>
              </div>
            </Col>
          </Row>
          <Card className="overflow-hidden app-ecommerce-details">
            <Row className="m-2">
              <Col>
                <h1 col-sm-6 className="float-left">
                  View Doctor
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
              <Row className="mb-5 mt-2">
                <Col md="3" sm="12" className="mb-2">
                  <h4>Doctor Name</h4>
                  <Input
                    type="text"
                    name="fullname"
                    value={this.state.data.fullname}
                  />
                </Col>

                <Col md="3" sm="12" className="mb-2">
                  <h4> Email</h4>
                  <Input
                    type="email"
                    name="email"
                    value={this.state.data.email}
                  />
                </Col>
                <Col md="3" sm="12" className="mb-2">
                  <h4> MobileNumber</h4>
                  <Input
                    type="number"
                    name="mobileNumber"
                    value={this.state.data.mobileNumber}
                  />
                </Col>
                <Col md="3" sm="12" className="mb-2">
                  <h4> DOB</h4>
                  <Input type="text" name="date" value={this.state.data.date} />
                </Col>
                <Col md="3" sm="12" className="mb-2">
                  <h4> PhysicianVisit Fees</h4>
                  <Input
                    type="text"
                    name="physicianVisitFees"
                    value={this.state.data.physicianVisitFees}
                  />
                </Col>

                <Col md="3" sm="12" className="mb-2">
                  <h4> ConsultingFees </h4>
                  <Input
                    type="text"
                    name="consultingFeesCharge"
                    // onChange={}
                    value={this.state.data.consultingFeesCharge}
                  />
                </Col>
                <Col md="3" sm="12" className="mb-2">
                  <h4> Rate/Min </h4>
                  <Input
                    type="text"
                    name="ratePerMin"
                    value={this.state.data.ratePerMin}
                  />
                </Col>
                <Col md="3" sm="12" className="mb-2">
                  <h4> Days </h4>
                  <Input type="text" name="days" value={this.state.data.days} />
                </Col>
                <Col md="3" sm="12" className="mb-2">
                  <h4> FromTime</h4>
                  <Input
                    type="time"
                    name="fromTime"
                    value={this.state.data.fromTime}
                  />
                </Col>
                <Col md="3" sm="12" className="mb-2">
                  <h4>ToTime</h4>
                  <Input
                    type="time"
                    name="toTime"
                    value={this.state.data.toTime}
                  />
                </Col>

                <Col md="3" sm="12" className="mb-2">
                  {/* <h4>Doctor Image</h4> */}
                  <img
                    width="200px"
                    height={100}
                    src={`https://sample.rupioo.com/Images/${this.state.data?.image}`}
                    alt="image"
                  />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}
export default ViewDoctor;
