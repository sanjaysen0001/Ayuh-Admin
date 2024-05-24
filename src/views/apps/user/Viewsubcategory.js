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

const Viewsubcategory = (props) => {
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
                <h1 className="float-left">View Sub-Category</h1>
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
                  <span>Category</span>
                  </Col>
                  <Col sm="4" md="4" lg="4">
                  <span>abcd</span>
                  </Col>
                  </Row>
                  <Row className='mt-1'>
                  <Col sm="4" md="4" lg="4">
                  <span>Sub-Category Name</span>
                  </Col>
                  <Col sm="4" md="4" lg="4">
                  <span>demo</span>
                  </Col>
                  </Row>
                  <Row className='mt-1'>
                  <Col sm="4" md="4" lg="4">
                  <span>Description</span>
                  </Col>
                  <Col sm="4" md="4" lg="4">
                  <span>dummy data</span>
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

export default Viewsubcategory;
