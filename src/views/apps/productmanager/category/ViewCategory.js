import React from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Button,
  
} from "reactstrap";

import "../../../../assets/scss/pages/app-ecommerce-shop.scss";
import "../../../../assets/scss/pages/users.scss";


import axiosConfig from "../../../../axiosConfig";

import { Route } from "react-router-dom";
class ViewProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/admin-category/viewbyid/${id}`)

      .then((response) => {
        //console.log(response.data);
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
          {/* <Breadcrumbs
            breadCrumbTitle="Product Category"
            breadCrumbParent="Home"
            breadCrumbActive="View CustoProduct Categorymer "
          /> */}
          <Row>
            <Col sm="12">
              <div>
                {/* <Breadcrumb listTag="div">
                  <BreadcrumbItem href="/analyticsDashboard" tag="a">
                    Home
                  </BreadcrumbItem>
                  <BreadcrumbItem
                    href="/app/productmanager/category/categoryList"
                    tag="a"
                  >
                    Product Category List
                  </BreadcrumbItem>
                  <BreadcrumbItem active> Product Category</BreadcrumbItem>
                </Breadcrumb> */}
              </div>
            </Col>
          </Row>
          <Card className="overflow-hidden app-ecommerce-details">
            <Row className="m-2">
              <Col>
                <h1 col-sm-6 className="float-left">
                  View Category
                </h1>
              </Col>
              <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() =>
                      history.push("/appmanagement/category-list")
                    }
                  >
                    Back
                  </Button>
                )}
              />
              </Col>
            </Row>
            <CardBody className="pb-5">
                <Row className="ml-4">
                  <Col sm="9" md="12" lg="12">
                  <Row className='mt-1'>
                  <Col sm="4" md="4" lg="4">
                  <span>Category Name</span>
                  </Col>
                  <Col sm="4" md="4" lg="4">
                  <span>{this.state.data.categoryName}</span>
                  </Col>
                  </Row>
                  <Row className='mt-1'>
                  <Col sm="4" md="4" lg="4">
                  <span>Description</span>
                  </Col>
                  <Col sm="4" md="4" lg="4">
                  <span>{this.state.data.description}</span>
                  </Col>
                  </Row>
                  
                  <Row className='mt-1'>
                  <Col sm="4" md="4" lg="4">
                  <span>Date</span>
                  </Col>
                  <Col sm="4" md="4" lg="4">
                  <span>{this.state.data.date}</span>
                  </Col>
                  </Row>
                  </Col>
                </Row>
              </CardBody>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}

export default ViewProduct;
