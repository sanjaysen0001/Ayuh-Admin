// import React, { Component } from "react";
// import {
//   Card,
//   CardBody,
//   Row,
//   Col,
//   Form,
//   Label,
//   Input,
//   CustomInput,
//   Button,
//   Breadcrumb,
//   BreadcrumbItem,
// } from "reactstrap";
// import axiosConfig from "../../../axiosConfig";
// // import { history } from "../../../../history";
// import swal from "sweetalert";
// import { Route } from "react-router-dom";

// export default class AddPackage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: "",
//       mrp_price: "",
//       offer_price: "",
//       image: "",
//       selectedFile: undefined,
//       selectedName: "",
//     };
//   }
//   onChangeHandler = (event) => {
//     this.setState({ selectedFile: event.target.files[0] });
//     this.setState({ selectedName: event.target.files[0].name });
//     console.log(event.target.files[0]);
//   };
//   onChangeHandler = (event) => {
//     this.setState({ selectedFile: event.target.files });
//     this.setState({ selectedName: event.target.files.name });
//     console.log(event.target.files);
//   };
//   changeHandler1 = (e) => {
//     this.setState({ status: e.target.value });
//   };

//   changeHandler = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };
//   submitHandler = (e) => {
//     console.log(this.state.root);
//     e.preventDefault();
//     const data = new FormData();
//     data.append("title", this.state.title);
//     data.append("offer_price", this.state.offer_price);
//     data.append("mrp_price", this.state.mrp_price);

//     for (const file of this.state.selectedFile) {
//       if (this.state.selectedFile !== null) {
//         data.append("image", file, file.name);
//       }
//     }
//     for (var value of data.values()) {
//       console.log(value);
//     }
//     for (var key of data.keys()) {
//       console.log(key);
//     }

//     axiosConfig
//       .post("admin/addPackage", data)
//       // headers: { )
//       //   "auth-adtoken": localStorage.getItem("auth-adtoken"),
//       // },

//       .then((response) => {
//         console.log(response);
//         swal("Success!", "Submitted SuccessFull!", "success");
//         this.props.history.push("/app/poojapackage/packageList");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   render() {
//     return (
//       <div>
//         <Row>
//           <Col sm="12">
//             <div>
//               <Breadcrumb listTag="div">
//                 <BreadcrumbItem href="/analyticsDashboard" tag="a">
//                   Home
//                 </BreadcrumbItem>
//                 <BreadcrumbItem href="/app/poojapackage/packageList" tag="a">
//                   Package List
//                 </BreadcrumbItem>
//                 <BreadcrumbItem active>Add Package</BreadcrumbItem>
//               </Breadcrumb>
//             </div>
//           </Col>
//         </Row>
//         <Card>
//           <Row className="m-2">
//             <Col>
//               <h1 col-sm-6 className="float-left">
//                 Add Package
//               </h1>
//             </Col>
//             <Col>
//               <Route
//                 render={({ history }) => (
//                   <Button
//                     className=" btn btn-success float-right"
//                     onClick={() =>
//                       history.push("/app/poojapackage/packageList")
//                     }
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
//                   <Label>Title</Label>
//                   <Input
//                     required
//                     type="text"
//                     name="title"
//                     placeholder=""
//                     value={this.state.title}
//                     onChange={this.changeHandler}
//                   ></Input>
//                 </Col>
//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Label>MRP Price</Label>
//                   <Input
//                     type="number"
//                     name="mrp_price"
//                     placeholder=""
//                     value={this.state.mrp_price}
//                     onChange={this.changeHandler}
//                   ></Input>
//                 </Col>
//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Label>Offer Price</Label>
//                   <Input
//                     type="number"
//                     name="offer_price"
//                     placeholder=""
//                     value={this.state.offer_price}
//                     onChange={this.changeHandler}
//                   ></Input>
//                 </Col>

//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Label>Image</Label>
//                   <CustomInput
//                     type="file"
//                     multiple
//                     onChange={this.onChangeHandler}
//                   />
//                 </Col>

//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Label className="mb-1">Status</Label>
//                   <div
//                     className="form-label-group"
//                     onChange={(e) => this.changeHandler1(e)}
//                   >
//                     <input
//                       style={{ marginRight: "3px" }}
//                       type="radio"
//                       name="status"
//                       value="Active"
//                     />
//                     <span style={{ marginRight: "20px" }}>Active</span>

//                     <input
//                       style={{ marginRight: "3px" }}
//                       type="radio"
//                       name="status"
//                       value="Inactive"
//                     />
//                     <span style={{ marginRight: "3px" }}>Inactive</span>
//                   </div>
//                 </Col>
//               </Row>
//               <Row>
//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Button.Ripple
//                     color="primary"
//                     type="submit"
//                     className="mr-1 mb-1"
//                   >
//                     Add
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


import React, { useState } from "react";
import { Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useHistory } from "react-router-dom";

const AddPackageForm = () => {
  const [packageData, setPackageData] = useState({
    packageName: "",
    packagePrice: "",
    creditAmount: "",
  });

  const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPackageData({ ...packageData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to backend
    console.log(packageData);
    // Reset form fields after submission
    setPackageData({
      packageName: "",
      packagePrice: "",
      creditAmount: "",
    });
  };

  return (
    <Row>
      <Col sm="12" md={{ size: 6, offset: 3 }}>
        <Card>
          <CardHeader>
            <h1>Add Package</h1>
            <Button onClick={() => history.goBack()} className="btn btn-danger float-right">Back</Button>
          </CardHeader>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="packageName">Package Name:</Label>
                <Input
                  type="text"
                  name="packageName"
                  id="packageName"
                  value={packageData.packageName}
                  onChange={handleInputChange}
                  placeholder="Enter package name"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="packagePrice">Package Price:</Label>
                <Input
                  type="number"
                  name="packagePrice"
                  id="packagePrice"
                  value={packageData.packagePrice}
                  onChange={handleInputChange}
                  placeholder="Enter package price"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="creditAmount">Credit Amount:</Label>
                <Input
                  type="number"
                  name="creditAmount"
                  id="creditAmount"
                  value={packageData.creditAmount}
                  onChange={handleInputChange}
                  placeholder="Enter credit amount"
                  required
                />
              </FormGroup>
              <Button color="primary" type="submit">Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default AddPackageForm;

