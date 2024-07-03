import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Card, CardBody, Row, Col, Button, Label, Input } from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import { baseURLImage } from "../../../constant";
const ViewPatient = (props) => {
  const history = useHistory();
  const [userData, setUserData] = useState({
    // fullName: "",
    // email: "",
    // phoneNUmber: "",
    // date: "",
    // status: "",
  });

  useEffect(() => {
    const { id } = props.match.params;
    axiosConfig
      .get(`/patient/patient-by-id/${id}`)
      .then((response) => {
        const userDetais = response.data?.Patient;
        console.log(userDetais.image);
        setUserData(userDetais);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
                  <Col sm="12" md="4" lg="4" className="my-1">
                    <Label>FullName</Label>
                    <Input type="text" value={userData?.fullname} />
                  </Col>
                  <Col sm="12" md="4" lg="4" className="my-1">
                    <Label>Email</Label>
                    <Input type="text" value={userData?.email} />
                  </Col>
                  <Col sm="12" md="4" lg="4" className="my-1">
                    <Label>PhoneNumber</Label>
                    <Input type="text" value={userData?.mobileNumber} />
                  </Col>
                  <Col sm="12" md="4" lg="4" className="my-1">
                    <Label>Date</Label>
                    <span className="my-2">{userData?.createdAt}</span>
                  </Col>
                  <Col sm="12" md="4" lg="4" className="my-1">
                    {userData?.image ? (
                      <>
                        <img
                          width={80}
                          height={50}
                          src={`${baseURLImage}/${userData?.image}`}
                        />
                      </>
                    ) : (
                      <span>No Image </span>
                    )}
                  </Col>
                  {/* <Col sm="12" md="4" lg="4">
                    <Label>Status</Label>
                    <Input
                      type="text"
                      // value={this}
                    />
                  </Col> */}

                  {/* <Col sm="9" md="12" lg="12">
                   
                    <Row className="mt-1">
                      <Col sm="4" md="4" lg="4">
                        <span>Status</span>
                      </Col>
                      <Col sm="4" md="4" lg="4">
                        <span>Active</span>
                      </Col>
                    </Row>
                  </Col> */}
                </Row>
              </CardBody>
            </Col>
          </Row>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default ViewPatient;
