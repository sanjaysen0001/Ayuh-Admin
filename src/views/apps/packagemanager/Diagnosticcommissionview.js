import React from "react";
import { Card, CardBody, Row, Col, Button } from "reactstrap";
// import { history } from "../../../history";
import "../../../assets/scss/pages/app-ecommerce-shop.scss";
import "../../../assets/scss/pages/users.scss";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
// import ReactHtmlParser from "react-html-parser";

import axiosConfig from "../../../axiosConfig";
import { Route } from "react-router-dom";
class Diagnosticcommissionview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/diagonistic-commision/diashowbyid/${id}`)
      .then((response) => {
        console.log( response.data?.data);
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
         
          <Row></Row>
          <Card className="overflow-hidden app-ecommerce-details m-2 pb-5">
            <Row className="m-2">
              <Col>
                <h1 col-sm-6 className="float-left">
                  View Diagnostic Commission
                </h1>
              </Col>
              <Col>
                <Route
                  render={({ history }) => (
                    <Button
                      className=" btn btn-danger float-right"
                      onClick={() =>
                        history.push("/app/productmanager/category/commissionmangement/diagnosticcommission")
                      }
                    >
                      Back
                    </Button>
                  )}
                />
              </Col>
            </Row>
            <CardBody className="pb-0">
            <Row className="ml-4">
            <Col sm="9" md="12" lg="12">
            <Row className='mt-1'>
            <Col sm="4" md="4" lg="4">
            <span>Doctor Name</span>
            </Col>
            <Col sm="4" md="4" lg="4">
            <span>{this.state.data.selectdoctor}</span>
            </Col>
            </Row>
          
            
            <Row className='mt-1'>
            <Col sm="4" md="4" lg="4">
            <span>Commission Value</span>
            </Col>
            <Col sm="4" md="4" lg="4">
            <span>{this.state.data.commissionvalue}</span>
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

export default Diagnosticcommissionview;
