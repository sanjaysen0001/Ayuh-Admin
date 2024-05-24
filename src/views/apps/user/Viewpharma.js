// import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
// import {
//   Card,
//   CardBody,
//   Row,
//   Col,
//   Button,
// } from 'reactstrap';
// import axiosConfig from '../../../axiosConfig';

// const Viewpharma = (props) => {
//   const history = useHistory();
//   const [userData, setUserData] = useState({});

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const { id } = props.match.params;
  //       const response = await axiosConfig.get(`/pharma/pharma-by-id/${id}`);
  //       const userData = response.data.data;
  //       setUserData(userData);
  //     } catch (error) {
  //       console.log(error.response);
  //     }
  //   };
  //   fetchUserData();
  // }, [props.match.params]);

//   const handleBack = () => {
//     history.goBack();
//   };

//   return (
//     <React.Fragment>
//       <div>
//         <Row>
//           <Col sm="12">
//             <Row className="m-2">
//               <Col>
//                 <h1 className="float-left">View Pharma</h1>
//               </Col>
//               <Col>
//                 <Button className="btn btn-danger float-right" onClick={handleBack}>
//                   Back
//                 </Button>
//               </Col>
//             </Row>
//           </Col>
//         </Row>
//         <Card className="overflow-hidden app-ecommerce-details">
//           <Row className="m-2">
//             <Col>
//               <CardBody className="pb-0">
//                 <Row className="ml-4">
//                   <Col sm="9" md="12" lg="12">
//                   <Row className='mt-1'>
//                   <Col sm="4" md="4" lg="4">
//                   <span>Pharma Name</span>
//                   </Col>
//                   <Col sm="4" md="4" lg="4">
//                   <span>anujesh</span>
//                   </Col>
//                   </Row>
//                   <Row className='mt-1'>
//                   <Col sm="4" md="4" lg="4">
//                   <span>Email ID</span>
//                   </Col>
//                   <Col sm="4" md="4" lg="4">
//                   <span>anujesh123@gmail.com</span>
//                   </Col>
//                   </Row>
//                   <Row className='mt-1'>
//                   <Col sm="4" md="4" lg="4">
//                   <span>Pharma Number</span>
//                   </Col>
//                   <Col sm="4" md="4" lg="4">
//                   <span>7890786305</span>
//                   </Col>
//                   </Row>
//                   <Row className='mt-1'>
//                   <Col sm="4" md="4" lg="4">
//                   <span>Date</span>
//                   </Col>
//                   <Col sm="4" md="4" lg="4">
//                   <span>10-03-2024</span>
//                   </Col>
//                   </Row>
//                   </Col>
//                 </Row>
//               </CardBody>
//             </Col>
//           </Row>
//         </Card>
//       </div>
//     </React.Fragment>
//   );
// };

// export default Viewpharma;

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

const Viewpharma = (props) => {
  const history = useHistory();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    licenseNumber: "",
    password: "",
    confirmPassword: "",
    panNo: "",
    gstNo: "",
    address1: "",
    city1: "",
    state1: "",
    country1: "",
    status: "",
    createdAt: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { id } = props.match.params;
        const response = await axiosConfig.get(`/pharma/pharma-by-id/${id}`);
        const userData = response.data.Pharma;
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
                <h1 className="float-left">View Pharma</h1>
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
                    {[
                      { label: 'Pharma Name', value: userData.name },
                      { label: 'Email ID', value: userData.email },
                      // { label: 'Password', value: userData.password },
                      { label: 'Password', value: userData.confirmPassword },
                      { label: 'Pharma Number', value: userData.mobileNumber },
                      { label: 'License Number', value: userData.licenseNumber },
                      { label: 'PAN No', value: userData.panNo },
                      { label: 'GST No', value: userData.gstNo },
                      { label: 'Address', value: userData.address1 },
                      { label: 'City', value: userData.city1 },
                      { label: 'State', value: userData.state1 },
                      { label: 'Country', value: userData.country1 },
                      { label: 'Status', value: userData.status },
                      { label: 'Date', value: userData.createdAt }
                    ].map((item, index) => (
                      <Row className='mt-1' key={index}>
                        <Col sm="4" md="4" lg="4">
                          <span>{item.label}</span>
                        </Col>
                        <Col sm="4" md="4" lg="4">
                          <span>{item.value}</span>
                        </Col>
                      </Row>
                    ))}
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

export default Viewpharma;
