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
class EditMedicine extends React.Component {
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
                    EditMedicine
                  </BreadcrumbItem>
                  <BreadcrumbItem
                    href="/app/productmanager/product/productList"
                    tag="a"
                  >
                    Medicine List
                  </BreadcrumbItem>
                  <BreadcrumbItem active> EditMedicine</BreadcrumbItem>
                </Breadcrumb>
              </div>
            </Col>
          </Row>
          <Card className="overflow-hidden app-ecommerce-details">
            <Row className="m-2">
              <Col>
                <h1 col-sm-6 className="float-left">
                  EditMedicine
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
              </Row>
            </CardBody>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}

export default EditMedicine;
