// import React, { Component } from "react";
// import {
//   Card,
//   CardBody,
//   Col,
//   Form,
//   Row,
//   Input,
//   Label,
//   Button,
// } from "reactstrap";
// import axiosConfig from "../../../axiosConfig";
// import "react-toastify/dist/ReactToastify.css";
// import { Route } from "react-router-dom";
// import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
// import swal from "sweetalert";
// export class Editdiagnostic extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       email: "",
//       mobileNumber: "",
//       password: "",
//       cnfmPassword: "",
//       createdAt: "",
//       selectedName: "",
//       selectedFile: null,
//     };
//   }

//   onChangeHandler = (event) => {
//     this.setState({ selectedFile: event.target.files[0] });
//     this.setState({ selectedName: event.target.files[0].name });
//     console.log(event.target.files[0]);
//   };

//   componentDidMount() {
//     console.log(this.props.match.params);
//     let { id } = this.props.match.params;
//     axiosConfig
//       .get(`/user/viewoneuser/${id}`)
//       .then((response) => {
//         console.log(response);
//         this.setState({
//           name: response.data.data.name,
//           email: response.data.data.email,
//           mobileNumber: response.data.data.mobileNumber,
//           createdAt: response.data.createdAt,
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   changeHandler1 = (e) => {
//     this.setState({ status: e.target.value });
//   };
//   changeHandler = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   submitHandler = (e) => {
//     e.preventDefault();
//     console.log(this.state);
//     const data = new FormData();

//     data.append("name", this.state.name);
//     data.append("email", this.state.email);
//     data.append("status", this.state.status);
//     if (this.state.selectedFile !== null) {
//       data.append("createdAt", this.state.selectedFile, this.state.selectedName);
//     }

//     for (var value of data.values()) {
//       console.log(value);
//     }
//     for (var key of data.keys()) {
//       console.log(key);
//     }
//     let { id } = this.props.match.params;
//     axiosConfig
//       .post(`/user/myprofile/${id}`, data)
//       .then((response) => {
//         console.log(response.data);
//         swal("Success!", "Submitted SuccessFull!", "success");
//         this.props.history.push("/app/user/userList");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   render() {
//     return (
//       <div>
//         {/* <Breadcrumbs
//           breadCrumbTitle="User"
//           breadCrumbParent="Home"
//           breadCrumbActive="Edit Users "
//         /> */}
//         <Card>
//           <Row className="m-2">
//             <Col>
//               <h1 col-sm-6 className="float-left">
//                 Edit Diagnostic
//               </h1>
//             </Col>
//             <Col>
//             <Route
//                 render={({ history }) => (
//                   <Button
//                     className=" btn btn-danger float-right"
//                     onClick={() => history.goBack()}
//                   >
//                     Back
//                   </Button>
//                 )}
//               />
//             </Col>
//           </Row>
//           <CardBody>
//             <Form className="m-1" onSubmit={this.submitHandler}>
//               <Row>
//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Label>Diagnostic  Name</Label>
//                   <Input
//                     required
//                     type="text"
//                     name="name"
//                     placeholder="Enter First Name"
//                     value={'anujesh'}
//                     // onChange={this.changeHandler}
//                   ></Input>
//                 </Col>
//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Label>Email ID</Label>
//                   <Input
//                     required
//                     type="email"
//                     name="email"
//                     placeholder="Enter Last Name"
//                     value={'anujesh123@gmail.com'}
//                     // onChange={this.changeHandler}
//                   ></Input>
//                 </Col>

//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Label>Diagnostic Number</Label>
//                   <Input
//                     required
//                     type="number"
//                     name="mobileNumber"
//                     placeholder="mobileNumber No."
//                     value={'8520004596'}
//                     onChange={this.changeHandler}
//                   ></Input>
//                 </Col>

//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Label>Date </Label>
//                     <Input
//                       required
//                       type="text"
//                       name="sortorder"
//                       placeholder="date"
//                       value={'10-02-2024'}
//                       onChange={this.changeHandler}>
//                     </Input>
//                 </Col>
//                 </Row>
//                 <Row>
//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                 <Label className="mb-1">Status</Label>
//                 <div
//                   className="form-label-group"
//                   onChange={(e) => this.changeHandler1(e)}
//                 >
//                   <input
//                     style={{ marginRight: "3px" }}
//                     type="radio"
//                     name="approvedstatus"
//                     value="Active"
//                   />
//                   <span style={{ marginRight: "20px" }}>Active</span>

//                   <input
//                     style={{ marginRight: "3px" }}
//                     type="radio"
//                     name="status"
//                     value="Inactive"
//                   />
//                   <span style={{ marginRight: "3px" }}>Inactive</span>
//                 </div>
//               </Col>
//                 </Row>




//               <Row>
//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Button.Ripple
//                     color="primary"
//                     type="submit"
//                     className="mr-1 mb-1"
//                   >
//                     Update Diagnostic
//                   </Button.Ripple>
//                 </Col>
//               </Row>
//             </Form>
//           </CardBody>
//         </Card>
//       </div>
//     );
//   }
// }
// export default Editdiagnostic;



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
export class Editdiagnostic extends Component {
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
      .get(`/diagnostic/diagnostic-by-id/${id}`)
      .then((response) => {
        console.log(response);
        this.setState({
          // fullname: response.data.data.fullname,
          // email: response.data.data.email,
          // mobile: response.data.data.mobile,
          // userimg: response.data.userimg,
          status:response?.data?.Diagnostic?.status
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


    axiosConfig.put(`/admin/diagnostic-update-status/${id}`, { status: this.state.status }).then((res) => {
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

        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit Diagnostic
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
                    Update Diagnostic
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
export default Editdiagnostic;
