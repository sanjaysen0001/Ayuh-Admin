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
export class Editdrprediction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        doctorName: "",
        patientName: "",
        diseasesType: "",
        prescription: "",
        status: "", // Assuming this is related to radio button selection
      },
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/adminPes/viewByIdAdminPres/${id}`)
      .then((response) => {
        // console.log(response.data.data);
        this.setState({ formData: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  changeHandler1 = (e) => {
    const { value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        status: value,
      },
    }));
  };

  changeHandler = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
    // this.setState((formData)=>{ ...formData, [name]: value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    // console.log(this.state);
    // const data = new FormData();

    // data.append("fullname", this.state.fullname);
    // data.append("email", this.state.email);
    // data.append("status", this.state.status);
    // if (this.state.selectedFile !== null) {
    //   data.append("userimg", this.state.selectedFile, this.state.selectedName);
    // }

    // for (var value of data.values()) {
    //   console.log(value);
    // }
    // for (var key of data.keys()) {
    //   console.log(key);
    // }
    let { id } = this.props.match.params;
    axiosConfig
      .put(`/adminPes/updateAdminPres/${id}`, this.state.formData)
      .then((response) => {
        // swal("Success!", "Submitted SuccessFull!", "success");
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
                Edit Dr. Prescription
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
                  <Label>Doctor Name</Label>
                  <Input
                    required
                    type="text"
                    name="doctorName"
                    placeholder="Enter Doctor Name"
                    value={this.state.formData?.doctorName}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Patient Name</Label>
                  <Input
                    required
                    type="text"
                    name="patientName"
                    placeholder="Enter Patient Name"
                    value={this.state.formData?.patientName}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>

                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Diseases Type</Label>
                  <Input
                    required
                    type="text"
                    name="diseasesType"
                    placeholder="diseasesType"
                    value={this.state.formData?.dieseases}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>

                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Prescription </Label>
                  <Input
                    required
                    type="text"
                    name="Prescription"
                    placeholder="Prescription"
                    value={this.state.formData?.prescription}
                    onChange={this.changeHandler}
                  ></Input>
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
                    name="status"
                    value="Active"
                    checked={this.state.formData.status === "Active"}
                  />
                  <span style={{ marginRight: "20px" }}>Active</span>

                  <input
                    style={{ marginRight: "3px" }}
                    type="radio"
                    name="status"
                    value="Deactive"
                    checked={this.state.formData.status === "Deactive"}
                  />
                  <span style={{ marginRight: "3px" }}>Deactive</span>
                </div>
              </Col>

              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Update Dr. Prescription
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
export default Editdrprediction;
