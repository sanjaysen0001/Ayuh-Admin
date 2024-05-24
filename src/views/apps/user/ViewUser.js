import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Card,
  CardBody,
  Row,
  Col,
  Button,
} from 'reactstrap';
import axiosConfig from '../../../axiosConfig';

const ViewUser = (props) => {
  const history = useHistory();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { id } = props.match.params;
        const response = await axiosConfig.get(`/user/viewoneuser/${id}`);
        const userData = response.data.data;
        setUserData(userData);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchUserData();
  }, [props.match.params]);

  const handleBack = () => {
    history.goBack();
  };

  return (
    <React.Fragment>
      <div>
        <Row>
          <Col sm="12">
            <Row className="m-2">
              <Col>
                <h1 className="float-left">View Patient</h1>
              </Col>
              <Col>
                <Button className="btn btn-danger float-right" onClick={handleBack}>
                  Back
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Card className="overflow-hidden app-ecommerce-details">
          <Row className="m-2">
            <Col>
            <CardBody className="pb-0">
            <Row className="ml-4">
              <Col sm="9" md="12" lg="12">
              <Row className='mt-1'>
              <Col sm="4" md="4" lg="4">
              <span>Image</span>
              </Col>
              <Col sm="4" md="4" lg="4">
              <span></span>
              </Col>
              </Row>
              <Row className='mt-1'>
              <Col sm="4" md="4" lg="4">
              <span>Full Name</span>
              </Col>
              <Col sm="4" md="4" lg="4">
              <span>sadik</span>
              </Col>
              </Row>
              <Row className='mt-1'>
              <Col sm="4" md="4" lg="4">
              <span>Email ID</span>
              </Col>
              <Col sm="4" md="4" lg="4">
              <span>sadik@gmail.com</span>
              </Col>
              </Row>
              <Row className='mt-1'>
              <Col sm="4" md="4" lg="4">
              <span>Pharma No.</span>
              </Col>
              <Col sm="4" md="4" lg="4">
              <span>899745259</span>
              </Col>
              </Row>
              <Row className='mt-1'>
              <Col sm="4" md="4" lg="4">
              <span>Schedule</span>
              </Col>
              <Col sm="4" md="4" lg="4">
              <span>20-04-2024</span>
              </Col>
              </Row>
              <Row className='mt-1'>
              <Col sm="4" md="4" lg="4">
              <span>Consulting</span>
              </Col>
              <Col sm="4" md="4" lg="4">
              <span>18-04-2024</span>
              </Col>
              </Row>
              <Row className='mt-1'>
              <Col sm="4" md="4" lg="4">
              <span>VIP Schedule</span>
              </Col>
              <Col sm="4" md="4" lg="4">
              <span>15-04-2024</span>
              </Col>
              </Row>
              <Row className='mt-1'>
              <Col sm="4" md="4" lg="4">
              <span>VIP Consulting</span>
              </Col>
              <Col sm="4" md="4" lg="4">
              <span>16-04-2024</span>
              </Col>
              </Row>
              <Row className='mt-1'>
              <Col sm="4" md="4" lg="4">
              <span>VIP Consulting Fees</span>
              </Col>
              <Col sm="4" md="4" lg="4">
              <span>1500</span>
              </Col>
              </Row>
              <Row className='mt-1'>
              <Col sm="4" md="4" lg="4">
              <span>Physician Visit Fees</span>
              </Col>
              <Col sm="4" md="4" lg="4">
              <span>2500</span>
              </Col>
              </Row>
              <Row className='mt-1'>
              <Col sm="4" md="4" lg="4">
              <span>Status</span>
              </Col>
              <Col sm="4" md="4" lg="4">
              <span>Active</span>
              </Col>
              </Row>
              </Col>
            </Row>
          </CardBody>
            </Col>
          </Row>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default ViewUser;
