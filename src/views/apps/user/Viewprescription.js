import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Card, CardBody, Row, Col, Button } from "reactstrap";
import axiosConfig from "../../../axiosConfig";

const Viewprescription = (props) => {
  const history = useHistory();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const { id } = props.match.params;
    axiosConfig
      .get(`/adminPes/viewByIdAdminPres/${id}`)
      .then((resp) => {
        console.log(resp.data.data);
        setUserData(resp.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // const fetchUserData = async () => {
    //   // try {
    //   //   const { id } = props.match.params;
    //   //   const response = await axiosConfig.get(`/user/viewoneuser/${id}`);
    //   //   const userData = response.data.data;
    //   //   setUserData(userData);
    //   // } catch (error) {
    //   //   console.log(error.response);
    //   // }
    // };
    // fetchUserData();
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
                <h1 className="float-left">View Dr. Prescription</h1>
              </Col>
              <Col>
                <Button
                  className="btn btn-danger float-right"
                  onClick={handleBack}
                >
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
                    <Row className="mt-1">
                      <Col sm="4" md="4" lg="4">
                        <span>Doctor Name</span>
                      </Col>
                      <Col sm="4" md="4" lg="4">
                        <span>{userData?.doctorName}</span>
                      </Col>
                    </Row>
                    <Row className="mt-1">
                      <Col sm="4" md="4" lg="4">
                        <span>Patient Name</span>
                      </Col>
                      <Col sm="4" md="4" lg="4">
                        <span>{userData?.patientName}</span>
                      </Col>
                    </Row>
                    <Row className="mt-1">
                      <Col sm="4" md="4" lg="4">
                        <span>Diseases type</span>
                      </Col>
                      <Col sm="4" md="4" lg="4">
                        <span>{userData?.dieseases}</span>
                      </Col>
                    </Row>
                    <Row className="mt-1">
                      <Col sm="4" md="4" lg="4">
                        <span>Prescription</span>
                      </Col>
                      <Col sm="4" md="4" lg="4">
                        <span>{userData?.prescription}</span>
                      </Col>
                    </Row>
                    <Row className="mt-1">
                      <Col sm="4" md="4" lg="4">
                        <span>Status</span>
                      </Col>
                      <Col sm="4" md="4" lg="4">
                        <span>{userData?.status}</span>
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

export default Viewprescription;
