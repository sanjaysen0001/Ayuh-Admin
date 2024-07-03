import React from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Button,
  Breadcrumb,
  Media,
  BreadcrumbItem,
  Label,
  Input,
} from "reactstrap";
import { history } from "../../../../history";
import "../../../../assets/scss/pages/app-ecommerce-shop.scss";
import "../../../../assets/scss/pages/users.scss";
import ReactHtmlParser from "react-html-parser";
import axiosConfig from "../../../../axiosConfig";
class ViewMedicine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      result: {},
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/medicine/fetchbyid/${id}`)

      .then((response) => {
        console.log(response.data.data);
        this.setState({ result: response.data.data });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          {/* <Breadcrumbs
            breadCrumbTitle="Customer"
            breadCrumbParent="Home"
            breadCrumbActive="View Customer "
          /> */}
          <Row>
            <Col sm="12">
              <div>
                <Breadcrumb listTag="div">
                  <BreadcrumbItem href="/analyticsDashboard" tag="a">
                    ViewMedicine
                  </BreadcrumbItem>
                  <BreadcrumbItem
                    href="/app/productmanager/product/productList"
                    tag="a"
                  >
                    Medicine List
                  </BreadcrumbItem>
                  <BreadcrumbItem active> ViewMedicine</BreadcrumbItem>
                </Breadcrumb>
              </div>
            </Col>
          </Row>
          <Card className="overflow-hidden app-ecommerce-details">
            <Row className="m-2">
              <Col>
                <h1 col-sm-6 className="float-left">
                  ViewMedicine
                </h1>
              </Col>
              <Col>
                <Button
                  className=" btn btn-danger float-right"
                  onClick={() => history.goBack}
                >
                  Back
                </Button>
              </Col>
            </Row>
            <CardBody className="pb-0">
              <Row className="ml-4">
                <Col sm="12" md="6" lg="6" className="mt-1">
                  <Label>Medicine Name</Label>
                  <Input
                    type="text"
                    name="medicinename"
                    value={this.state.result.medicinename}
                  />
                </Col>
                <Col sm="12" md="6" lg="6" className="mt-1">
                  <Label>Medicine Type</Label>
                  <Input
                    type="text"
                    name="medicinename"
                    value={this.state.result.medicinetype}
                  />
                </Col>
                <Col sm="12" md="6" lg="6" className="mt-1">
                  <Label>Medicine Price</Label>
                  <Input
                    type="text"
                    name="price"
                    value={this.state.result.price}
                  />
                </Col>
                <Col sm="12" md="6" lg="6" className="mt-1">
                  <Label>Medicine Details</Label>
                  <Input
                    type="text"
                    name="medicinedetails
"
                    value={this.state.result.medicinedetails}
                  />
                </Col>
                <Col sm="12" md="6" lg="6" className="my-1">
                  <Label>Unit</Label>
                  <Input
                    type="text"
                    name="unit"
                    value={this.state.result.unit}
                  />
                </Col>
                <Col sm="12" md="6" lg="6" className="my-1">
                  <Label>Medicine expiredate</Label>
                  <Input
                    type="text"
                    name="expiredate"
                    value={this.state.result.expiredate}
                  />
                </Col>
                <Col sm="12" md="6" lg="6" className="my-1">
                  <Label>Status</Label>
                  <h6 className=""> {this.state.result.status}</h6>
                </Col>
                {/* <Col sm="9" md="6" lg="12">
                  <div className="users-page-view-table">
                    <Row className="ml-4">
                      <Col sm="9" md="12" lg="12">
                        <Row className="mb-5 mt-2">
                          <Col md="6" sm="12" className="mb-4">
                            <h4>Title</h4>
                            <h6 className=""> {this.state.data.title}</h6>
                          </Col>
                          <Col md="6" sm="12" className="mb-4">
                            <h4>Product Name</h4>
                            <h6 className=""> {this.state.data.productname}</h6>
                          </Col>
                          <Col md="6" sm="12" className="mb-4">
                            <h4>price </h4>
                            <h6 className=""> {this.state.data.price}</h6>
                          </Col>
                          <Col md="6" sm="12" className="mb-4">
                            <h4>Category Name </h4>
                            <h6 className="">
                              {" "}
                              {this.state.data.category?.name}
                            </h6>
                          </Col>

                          <Col md="6" sm="12" className="mb-4">
                            <h4>Description</h4>
                            <h6 className="">
                              {" "}
                              {ReactHtmlParser(this.state.data.desc)}
                            </h6>
                          </Col>
                          <Col className="pl-0" sm="12" lg="6">
                            <h4>Image</h4>
                            <Media className="d-sm-flex d-block">
                              <Media className="mt-md-1 mt-0" left>
                                {this.state.data?.image?.map((i) => (
                                  <img
                                    className="border-black m-0"
                                    src={i}
                                    alt="user avatar"
                                    height="100"
                                  />
                                ))}
                              </Media>
                              <Media body></Media>
                            </Media>
                          </Col>
                          <Col md="6" sm="12" className="mb-4">
                            <h4>Status</h4>
                            <h6 className=""> {this.state.data.status}</h6>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                </Col> */}
              </Row>
            </CardBody>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}

export default ViewMedicine;
