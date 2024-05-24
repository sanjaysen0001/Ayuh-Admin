// import React from "react"
// import {
//   Card,
//   CardBody,
//   Row,
//   Col,
//   Media,
//   Table,
//   InputGroup,
//   Input,
//   InputGroupAddon,
//   Button
// } from "reactstrap"
// import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
// import logo from "../../../assets/img/logo/logo.png"
// import { Mail, Phone, FileText, Download } from "react-feather"

// import "../../../assets/scss/pages/invoice.scss"

// class Invoice extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//         {/* <Breadcrumbs
//           breadCrumbTitle="Invoice"
//           breadCrumbParent="Pages"
//           breadCrumbActive="Invoice"
//         /> */}
//         <Row>
//           <Col className="mb-1 invoice-header" md="5" sm="12">
//             <InputGroup>
//               <Input placeholder="Email" />
//               <InputGroupAddon addonType="append">
//                 <Button.Ripple color="primary" outline>
//                   Pharma Supplier Invoice
//                 </Button.Ripple>
//               </InputGroupAddon>
//             </InputGroup>
//           </Col>
//           <Col
//             className="d-flex flex-column flex-md-row justify-content-end invoice-header mb-1"
//             md="7"
//             sm="12"
//           >
//             <Button
//               className="mr-1 mb-md-0 mb-1"
//               color="primary"
//               onClick={() => window.print()}
//             >
//               <FileText size="15" />
//               <span className="align-middle ml-50">Print</span>
//             </Button>
//             <Button.Ripple color="primary" outline>
//               <Download size="15" />
//               <span className="align-middle ml-50">Download</span>
//             </Button.Ripple>
//           </Col>
//           <Col className="invoice-wrapper" sm="12">
//             <Card className="invoice-page">
//               <CardBody>
//                 <Row>
//                   <Col md="6" sm="12" className="pt-1">
//                     <Media className="pt-1">
//                       <img src={logo} alt="logo" />
//                     </Media>
//                   </Col>
//                   <Col md="6" sm="12" className="text-right">
//                     <h1>Invoice</h1>
//                     <div className="invoice-details mt-2">
//                       <h6>INVOICE NO.</h6>
//                       <p>001/2020</p>
//                       <h6 className="mt-2">INVOICE DATE</h6>
//                       <p>10 Dec 2018</p>
//                     </div>
//                   </Col>
//                 </Row>
//                 <Row className="pt-2">
//                   <Col md="6" sm="12">
//                     <h5>Recipient</h5>
//                     <div className="recipient-info my-2">
//                       <p>Peter Stark</p>
//                       <p>8577 West West Drive</p>
//                       <p>Holbrook, NY</p>
//                       <p>90001</p>
//                     </div>
//                     <div className="recipient-contact pb-2">
//                       <p>
//                         <Mail size={15} className="mr-50" />
//                         peter@mail.com
//                       </p>
//                       <p>
//                         <Phone size={15} className="mr-50" />
//                         +91 988 888 8888
//                       </p>
//                     </div>
//                   </Col>
//                   <Col md="6" sm="12" className="text-right">
//                     <h5>Microsion Technologies Pvt. Ltd.</h5>
//                     <div className="company-info my-2">
//                       <p>9 N. Sherwood Court</p>
//                       <p>Elyria, OH</p>
//                       <p>94203</p>
//                     </div>
//                     <div className="company-contact">
//                       <p>
//                         <Mail size={15} className="mr-50" />
//                         hello@pixinvent.net
//                       </p>
//                       <p>
//                         <Phone size={15} className="mr-50" />
//                         +91 999 999 9999
//                       </p>
//                     </div>
//                   </Col>
//                 </Row>
//                 <div className="invoice-items-table pt-1">
//                   <Row>
//                     <Col sm="12">
//                       <Table responsive borderless>
//                         <thead>
//                           <tr>
//                             <th>TASK DESCRIPTION</th>
//                             <th>HOURS</th>
//                             <th>RATE</th>
//                             <th>AMOUNT</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           <tr>
//                             <td>Website Redesign</td>
//                             <td>60</td>
//                             <td>15  </td>
//                             <td>90000  </td>
//                           </tr>
//                           <tr>
//                             <td>Newsletter template design</td>
//                             <td>20</td>
//                             <td>12  </td>
//                             <td>24000  </td>
//                           </tr>
//                         </tbody>
//                       </Table>
//                     </Col>
//                   </Row>
//                 </div>
//                 <div className="invoice-total-table">
//                   <Row>
//                     <Col
//                       sm={{ size: 7, offset: 5 }}
//                       xs={{ size: 7, offset: 5 }}
//                     >
//                       <Table responsive borderless>
//                         <tbody>
//                           <tr>
//                             <th>SUBTOTAL</th>
//                             <td>114000  </td>
//                           </tr>
//                           <tr>
//                             <th>DISCOUNT (5%)</th>
//                             <td>5700  </td>
//                           </tr>
//                           <tr>
//                             <th>TOTAL</th>
//                             <td>108300  </td>
//                           </tr>
//                         </tbody>
//                       </Table>
//                     </Col>
//                   </Row>
//                 </div>
//                 <div className="text-right pt-3 invoice-footer">
//                   <p>
//                     Transfer the amounts to the business amount below. Please
//                     include invoice number on your check.
//                   </p>
//                   <p className="bank-details mb-0">
//                     <span className="mr-4">
//                       BANK: <strong>FTSBUS33</strong>
//                     </span>
//                     <span>
//                       IBAN: <strong>G882-1111-2222-3333</strong>
//                     </span>
//                   </p>
//                 </div>
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>
//       </React.Fragment>
//     )
//   }
// }

// export default Invoice

// import React from "react";
// import {
//   Card,
//   CardBody,
//   Row,
//   Col,
//   InputGroup,
//   Input,
//   InputGroupAddon,
//   Button,
//   Table
// } from "reactstrap";
// import { Mail, Phone, FileText, Download } from "react-feather"
// // import { FileText, Download } from "react-feather";
// import logo from "../../../assets/img/logo/logo.png";




// class Invoice extends React.Component {
//   render() {
//     return (
//       <Row>
//         <Col md="5" sm="12" className="mb-1 invoice-header">
//           <InputGroup>
//             <Input placeholder="Email" />
//             <InputGroupAddon addonType="append">
//               <Button color="primary" outline>
//                 Pharma Supplier Invoice
//               </Button>
//             </InputGroupAddon>
//           </InputGroup>
//         </Col>
//         <Col md="7" sm="12" className="mb-1 d-flex flex-column flex-md-row justify-content-end invoice-header">
//           <Button className="mr-1 mb-md-0 mb-1" color="primary" onClick={() => window.print()}>
//             <FileText size="15" />
//             <span className="align-middle ml-50">Print</span>
//           </Button>
//           <Button color="primary" outline>
//             <Download size="15" />
//             <span className="align-middle ml-50">Download</span>
//           </Button>
//         </Col>
//         <Col sm="12" className="invoice-wrapper">
//           <Card className="invoice-page">
//             <CardBody>
//               <Row>
//                 <Col md="6" sm="12" className="pt-1">
//                   <img src={logo} alt="logo" height="50" className="pt-1" />
//                 </Col>
//                 <Col md="6" sm="12" className="text-right">
//                   <h1>Invoice</h1>
//                   <div className="invoice-details mt-2">
//                     <h6>INVOICE NO.</h6>
//                     <p>001/2020</p>
//                     <h6 className="mt-2">INVOICE DATE</h6>
//                     <p>10 Dec 2018</p>
//                   </div>
//                 </Col>
//               </Row>
//               <Row className="pt-2">
//                 <Col md="6" sm="12">
//                   <h5>Recipient</h5>
//                   <div className="recipient-info my-2">
//                       <p>Peter Stark</p>
//                       <p>8577 West West Drive</p>
//                       <p>Holbrook, NY</p>
//                       <p>90001</p>
//                     </div>
//                     <div className="recipient-contact pb-2">
//                       <p>
//                         <Mail size={15} className="mr-50" />
//                         peter@mail.com
//                       </p>
//                       <p>
//                         <Phone size={15} className="mr-50" />
//                         +91 988 888 8888
//                       </p>
//                     </div>
//                 </Col>
//                 <Col md="6" sm="12" className="text-right">
//                   <h5>Company</h5>
//                   <div className="company-info my-2">
//                       <p>9 N. Sherwood Court</p>
//                       <p>Elyria, OH</p>
//                       <p>94203</p>
//                     </div>
//                     <div className="company-contact">
//                       <p>
//                         <Mail size={15} className="mr-50" />
//                         hello@pixinvent.net
//                       </p>
//                       <p>
//                         <Phone size={15} className="mr-50" />
//                         +91 999 999 9999
//                       </p>
//                     </div>
//                 </Col>
//               </Row>
//               <div className="invoice-items-table pt-1">
//                 <Table responsive border>
//                   <thead>
//                     <tr>
//                       <th>TASK DESCRIPTION</th>
//                       <th>HOURS</th>
//                       <th>RATE</th>
//                       <th>AMOUNT</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                   <div className="invoice-items-table pt-1">
//                   <Row>
//                     <Col sm="12">
//                       <Table responsive borderless>
//                         <thead>
//                           <tr>
//                             <th>TASK DESCRIPTION</th>
//                             <th>HOURS</th>
//                             <th>RATE</th>
//                             <th>AMOUNT</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           <tr>
//                             <td>Website Redesign</td>
//                             <td>60</td>
//                             <td>15  </td>
//                             <td>90000  </td>
//                           </tr>
//                           <tr>
//                             <td>Newsletter template design</td>
//                             <td>20</td>
//                             <td>12  </td>
//                             <td>24000  </td>
//                           </tr>
//                         </tbody>
//                       </Table>
//                     </Col>
//                   </Row>
//                 </div>
//                 <div className="invoice-total-table">
//                   <Row>
//                     <Col
//                       sm={{ size: 7, offset: 5 }}
//                       xs={{ size: 7, offset: 5 }}
//                     >
//                       <Table responsive borderless>
//                         <tbody>
//                           <tr>
//                             <th>SUBTOTAL</th>
//                             <td>114000  </td>
//                           </tr>
//                           <tr>
//                             <th>DISCOUNT (5%)</th>
//                             <td>5700  </td>
//                           </tr>
//                           <tr>
//                             <th>TOTAL</th>
//                             <td>108300  </td>
//                           </tr>
//                         </tbody>
//                       </Table>
//                     </Col>
//                   </Row>
//                 </div>
//                     <tr>
//                       <td>Website Redesign</td>
//                       <td>60</td>
//                       <td>15  </td>
//                       <td>90000  </td>
//                     </tr>
//                     <tr>
//                       <td>Newsletter template design</td>
//                       <td>20</td>
//                       <td>12  </td>
//                       <td>24000  </td>
//                     </tr>
//                   </tbody>
//                 </Table>
//               </div>
//               <div className="invoice-total-table">
//                 <Table responsive borderless>
//                   <tbody>
//                     <tr>
//                       <th>SUBTOTAL</th>
//                       <td>114000  </td>
//                     </tr>
//                     <tr>
//                       <th>DISCOUNT (5%)</th>
//                       <td>5700  </td>
//                     </tr>
//                     <tr>
//                       <th>TOTAL</th>
//                       <td>108300  </td>
//                     </tr>
//                   </tbody>
//                 </Table>
//               </div>
//               <div className="text-right pt-3 invoice-footer">
//                 <p>
//                   Transfer the amounts to the business amount below. Please
//                   include invoice number on your check.
//                 </p>
//                 <p className="bank-details mb-0">
//                   <span className="mr-4">
//                     BANK: <strong>FTSBUS33</strong>
//                   </span>
//                   <span>
//                     IBAN: <strong>G882-1111-2222-3333</strong>
//                   </span>
//                 </p>
//               </div>
//             </CardBody>
//           </Card>
//         </Col>
//       </Row>
//     );
//   }
// }

// export default Invoice;

// import React from 'react';
// // import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from '@/components/ui/table';
// import logo from "../../../assets/img/logo/logo.png";
// import { Mail, Phone, FileText, Download } from 'react-feather';
// import { Card, CardBody, Row, Col, InputGroup, Input, InputGroupAddon, Button,TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from 'reactstrap';
// import '../../../assets/scss/pages/invoice.scss';
// import sign from '../../../assets/img/profile/sign.jpg';


// const Invoice = () => {
//   return (
//     <React.Fragment>
//       <Row>
//         <Col className="mb-1 invoice-header" md="5" sm="12">
//           <InputGroup>
//             <Input placeholder="Email" />
//             <InputGroupAddon addonType="append">
//               <Button.Ripple color="primary" outline>
//                 Pharma Supplier Invoice
//               </Button.Ripple>
//             </InputGroupAddon>
//           </InputGroup>
//         </Col>
//         <Col
//           className="d-flex flex-column flex-md-row justify-content-end invoice-header mb-1"
//           md="7"
//           sm="12"
//         >
//           <Button
//             className="mr-1 mb-md-0 mb-1"
//             color="primary"
//             onClick={() => window.print()}
//           >
//             <FileText size="15" />
//             <span className="align-middle ml-50">Print</span>
//           </Button>
//           <Button.Ripple color="primary" outline>
//             <Download size="15" />
//             <span className="align-middle ml-50">Download</span>
//           </Button.Ripple>
//         </Col>
//         <Col className="invoice-wrapper" sm="12">
//           <Card className="invoice-page">
//             <CardBody>
//               <Row>
//               <Col md="6" sm="12" className="pt-1">
//                   <img src={logo} alt="logo" height="100" className="pt-1" />
//                </Col>
//                 <Col md="6" sm="12" className="text-right">
//                   <h1>Invoice</h1>
//                   <div className="invoice-details mt-2">
//                     <h6>INVOICE NO.</h6>
//                     <p>01/2024</p>
//                     <h6 className="mt-2">INVOICE DATE</h6>
//                     <p>30 2024</p>
//                   </div>
//                 </Col>
//               </Row>
//               <Row className="pt-2">
//                 <Col md="6" sm="12">
//                   <h5>Recipient</h5>
//                   <div className="recipient-info my-2">
//                     <p>Arun </p>
//                     <p>101,Plot No. 56</p>
//                     <p>Dewas, M.P.</p>
//                     <p>455001</p>
//                   </div>
//                   <div className="recipient-contact pb-2">
//                     <p>
//                       <Mail size={15} className="mr-50" />
//                      arun@mail.com
//                     </p>
//                     <p>
//                       <Phone size={15} className="mr-50" />
//                       +91 888 888 8888
//                     </p>
//                   </div>
//                 </Col>
//                 <Col md="6" sm="12" className="text-right">
//                   <h5> Technologies Pvt. Ltd.</h5>
//                   <div className="company-info my-2">
//                     <p>20.LIG</p>
//                     <p>Indore, M.P.</p>
//                     <p>453771</p>
//                   </div>
//                   <div className="company-contact">
//                     <p>
//                       <Mail size={15} className="mr-50" />
//                       hello@gmail.com
//                     </p>
//                     <p>
//                       <Phone size={15} className="mr-50" />
//                       +91 999 999 9999
//                     </p>
//                   </div>
//                 </Col>
//               </Row>
//               <div className="invoice-items-table pt-1">
//                 <Row>
//                   <Col sm="12">
//                     <Table responsive borderless>
//                       <thead>
//                         <tr>
//                           <th>TASK DESCRIPTION</th>
//                           <th>HOURS</th>
//                           <th>RATE</th>
//                           <th>AMOUNT</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         <tr>
//                           <td>Website Redesign</td>
//                           <td>60</td>
//                           <td>15  </td>
//                           <td>90000  </td>
//                         </tr>
//                         <tr>
//                           <td>Newsletter template design</td>
//                           <td>20</td>
//                           <td>12  </td>
//                           <td>24000  </td>
//                         </tr>
//                       </tbody>
//                     </Table>
//                   </Col>
//                 </Row>
//               </div>
//               <div className="invoice-total-table">
//                 <Row className="pt-2">
//                 <Col md="6" sm="12">
//                     <Table>
//                       <tbody>
//                         <tr>
//                           <th>SUBTOTAL</th>
//                           <td>114000  </td>
//                         </tr>
//                         <tr>
//                           <th>DISCOUNT (5%)</th>
//                           <td>5700  </td>
//                         </tr>
//                         <tr>
//                           <th>TOTAL</th>
//                           <td>108300  </td>
//                         </tr>
//                       </tbody>
//                     </Table>
//                   </Col>
//                 </Row>
//               </div>
//               <div className="text-right">
//           <img
//             alt="Signature"
//             className="h-16"
//             height="50"
//             src={sign}
//             style={{
//               aspectRatio: "200/50",
//               objectFit: "cover",
//             }}
//             width="200"
//           />
//           <div>Authorized Signature</div>
//         </div>
//               {/* <div className="text-right pt-3 invoice-footer">
//                 <p>
//                   Transfer the amounts to the business amount below. Please
//                   include invoice number on your check.
//                 </p>
//                 <p className="bank-details mb-0">
//                   <span className="mr-4">
//                     BANK: <strong>FTSBUS33</strong>
//                   </span>
//                   <span>
//                     IBAN: <strong>G882-1111-2222-3333</strong>
//                   </span>
//                 </p>
//               </div> */}


//             </CardBody>
//           </Card>
//         </Col>
//       </Row>
//     </React.Fragment>
//   );
// };

// export default Invoice;


// import React from 'react';
// import { Card, CardBody, Row, Col, InputGroup, Input, InputGroupAddon, Button, Table } from 'reactstrap';
// import { Mail, Phone, FileText, Download } from 'react-feather';
// import '../../../assets/scss/pages/invoice.scss';
// import sign from '../../../assets/img/profile/sign.jpg';
// import logo from "../../../assets/img/logo/logo.png";

// const Invoice = () => {
//   return (
//     <React.Fragment>
//       <Row>
//         <Col className="mb-1 invoice-header" md="5" sm="12">
//           <InputGroup>
//             <Input placeholder="Email" />
//             <InputGroupAddon addonType="append">
//               <Button.Ripple color="primary" outline>
//                 Pharma Supplier Invoice
//               </Button.Ripple>
//             </InputGroupAddon>
//           </InputGroup>
//         </Col>
//         <Col
//           className="d-flex flex-column flex-md-row justify-content-end invoice-header mb-1"
//           md="7"
//           sm="12"
//         >
//           <Button
//             className="mr-1 mb-md-0 mb-1"
//             color="primary"
//             onClick={() => window.print()}
//           >
//             <FileText size="15" />
//             <span className="align-middle ml-50">Print</span>
//           </Button>
//           <Button.Ripple color="primary" outline>
//             <Download size="15" />
//             <span className="align-middle ml-50">Download</span>
//           </Button.Ripple>
//         </Col>
//         <Col className="invoice-wrapper" sm="12">
//           <Card className="invoice-page">
//             <CardBody>
//               <Row>
//               <Col md="4" sm="12" className="mr-1 mr-auto">
//   <img src={logo} alt="logo" height="100" className="pt-1" />
// </Col>

//                 <Col>
//                 <div className="flex justify-between items-start mb-8">
//                 <h1 className="text-2xl font-bold">Jupitech Techno Pvt Ltd.</h1>
//         <div className="text-left">

//           <p>101 plot no 76 pud scheme no 54 behind c21 mall</p>
//           <p>Email: juipitechtechno@gmail.com</p>
//           <p>Mobile: +7415686043</p>
//           <p>GSTIN: 18AKRPJ2121L1ZY</p>
//         </div>
//                        </div>
//                        </Col>
//               </Row>
//               <Row className="pt-2">
//   <Col md="6" sm="12">
//     <div className="table-heading">
//       <h5>Recipient</h5>
//     </div>
//     <div className="recipient-info my-2">
//       <p>Arun</p>
//       <p>101, Plot No. 56</p>
//       <p>Dewas, M.P.</p>
//       <p>455001</p>
//     </div>
//     <div className="recipient-contact pb-2">
//       <p>
//         <Mail size={15} className="mr-50" />
//         arun@mail.com
//       </p>
//       <p>
//         <Phone size={15} className="mr-50" />
//         +91 888 888 8888
//       </p>
//     </div>
//   </Col>
//   <Col md="6" sm="12">
//     <div className="table-heading">
//       <h5>Invoice ID</h5>
//     </div>
//     <div className="invoice-details mt-2">
//       <h6>INVOICE NO.</h6>
//       <p>01/2024</p>
//       <h6 className="mt-2">INVOICE DATE</h6>
//       <p>30 2024</p>
//     </div>
//   </Col>
//   <Col md="6" sm="12">
//     <div className="table-heading">
//       <h5>Ship To</h5>
//     </div>
//     <div className="company-info my-2">
//       <p>20.LIG</p>
//       <p>Indore, M.P.</p>
//       <p>453771</p>
//     </div>
//     <div className="company-contact">
//       <p>
//         <Mail size={15} className="mr-50" />
//         hello@gmail.com
//       </p>
//       <p>
//         <Phone size={15} className="mr-50" />
//         +91 999 999 9999
//       </p>
//     </div>
//   </Col>
//   <Col md="6" sm="12">
//     <div className="table-heading">
//       <h5>Bill To</h5>
//     </div>
//     <div className="company-info my-2">
//       <p>101 plot</p>
//       <p>no 76 pu4 scheme no 54 behind c21 mall</p>
//       <p>453771</p>
//     </div>
//     <div className="company-contact">
//       <p>
//         <Mail size={15} className="mr-50" />
//         hello@gmail.com
//       </p>
//       <p>
//         <Phone size={15} className="mr-50" />
//         +91 999
//       </p>
//     </div>
//   </Col>
// </Row>

//               <div className="invoice-items-table pt-1" >

//                 <Row>
//                   <Col sm="12">
//                     <Table responsive borderless>

//                       <thead>
//                         <tr>
//                           <th>TASK DESCRIPTION</th>
//                           <th>HOURS</th>
//                           <th>RATE</th>
//                           <th>AMOUNT</th>
//                           <th>UNIT</th>
//                           <th>GST</th>
//                           <th>DIS%</th>
//                           <th>TIME</th>
//                           <th>STATUS</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         <tr>
//                           <td>Website</td>
//                           <td>60</td>
//                           <td>15  </td>
//                           <td>90000  </td>
//                           <td>000  </td>
//                           <td>00  </td>
//                           <td>00  </td>
//                           <td>00  </td>
//                           <td>Success </td>
//                         </tr>
//                         <tr>
//                           <td>Template design</td>
//                           <td>20</td>
//                           <td>12  </td>
//                           <td>24000  </td>
//                           <td>00 </td>
//                           <td>00 </td>
//                           <td>00 </td>
//                           <td>00  </td>
//                           <td>Success </td>
//                         </tr>
//                       </tbody>
//                     </Table>
//                   </Col>
//                 </Row>
//               </div>


//               <div className="terms-and-conditions mt-3">
//               <Row>
//   <Col md="6" sm="12" style={{ borderRight: ' 1.8px solid #ddddddd1' }}>
//     <h5>Total In Words</h5>
//     <p>Five Thousand Nine Hundred One Rupees Only</p>
//     <h5>Terms and Conditions</h5>
//     <ol>
//       <li>Paid Amount/Payment are not refundable in any case.</li>
//       <li>Pay Payment under 30 days</li>
//     </ol>
//   </Col>
//   <Col md="6" sm="12">
//     <h5 className="d-flex justify-content-between">
//       <span>Other Charges</span>
//       <span>1450</span>
//     </h5>
//     <h5 className="d-flex justify-content-between">
//       <span>Sub Total</span>
//       <span>5191.2</span>
//     </h5>
//     <h5 className="d-flex justify-content-between">
//       <span>IGST</span>
//       <span>709.94</span>
//     </h5>
//     <h5 className="d-flex justify-content-between">
//       <span>RoundOff</span>
//       <span>-0.14</span>
//     </h5>
//     <h5 className="d-flex justify-content-between">
//       <span>Grand Total</span>
//       <span>5901</span>
//     </h5>
//   </Col>
// </Row>

//               </div>
//               <div className="tax-table mt-3">
//               <Table responsive bordered>
//   <thead>
//     <tr>
//       <th>HSN/SAC</th>
//       <th>Taxable value</th>
//       <th>Integrated Tax</th>
//       <th>Rate</th>
//       <th>Amount</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>7896541</td>
//       <td>3741.20</td>
//       <td>12 %</td>
//       <td>448.94</td>
//       <td>4190.14</td>
//     </tr>
//     <tr>
//       <td>Other Charges</td>
//       <td>1450.00</td>
//       <td>18 %</td>
//       <td>261.00</td>
//       <td>1711.00</td>
//     </tr>
//     <tr>
//       <td><strong>Total</strong></td>
//       <td><strong>5191.2</strong></td>
//       <td><strong>709.94</strong></td>
//       <td></td>
//       <td><strong>5901</strong></td>
//     </tr>
//   </tbody>
// </Table>

//               </div>
//               <div className="text-right mt-3">
//                 <p ><strong>For</strong></p>
//                 <p>AYUHPLUS SERVICES PVT. LTD.</p>
//                 <div className="text-right">
//                 <img
//                   alt="Signature"
//                   className="h-16"
//                   height="50"
//                   src={sign}
//                   style={{
//                     aspectRatio: "200/50",
//                     objectFit: "cover",
//                   }}
//                   width="200"
//                 />
//                 {/* <div>Authorized Signature</div> */}
//               </div>
//                 <p><strong>Authorized Signature</strong></p>
//               </div>
//             </CardBody>
//           </Card>
//         </Col>
//       </Row>
//     </React.Fragment>
//   );
// };

// export default Invoice;


import React from 'react';
import { Card, CardBody, Row, Col, InputGroup, Input, InputGroupAddon, Button, Table } from 'reactstrap';
import { Mail, Phone, FileText, Download } from 'react-feather';
import '../../../assets/scss/pages/invoice.scss';
import sign from '../../../assets/img/profile/sign.jpg';
import logo from "../../../assets/img/logo/logo.png";

const Invoice = () => {
  return (
    <React.Fragment>
      <Row>
        <Col className="mb-1 invoice-header" md="5" sm="12">
          <InputGroup>
            <Input placeholder="Email" />
            <InputGroupAddon addonType="append">
              <Button.Ripple color="primary" outline>
                Pharma Supplier Invoice
              </Button.Ripple>
            </InputGroupAddon>
          </InputGroup>
        </Col>
        <Col
          className="d-flex flex-column flex-md-row justify-content-end invoice-header mb-1"
          md="7"
          sm="12"
        >
          <Button
            className="mr-1 mb-md-0 mb-1"
            color="primary"
            onClick={() => window.print()}
          >
            <FileText size="15" />
            <span className="align-middle ml-50">Print</span>
          </Button>
          <Button.Ripple color="primary" outline>
            <Download size="15" />
            <span className="align-middle ml-50">Download</span>
          </Button.Ripple>
        </Col>
        <Col className="invoice-wrapper" sm="12">
          <Card className="invoice-page">
            <CardBody>
              <Row>
                <Col md="4" sm="12" className="mr-1 mr-auto">
                  <img src={logo} alt="logo" height="100" className="pt-1" />
                </Col>
                <Col>
                  <div className="flex justify-between items-start mb-8">
                    <h1 className="text-2xl font-bold">Jupitech Techno Pvt Ltd.</h1>
                    <div className="text-left">
                      <p>101 plot no 76 pud scheme no 54 behind c21 mall</p>
                      <p>Email: juipitechtechno@gmail.com</p>
                      <p>Mobile: +7415686043</p>
                      <p>GSTIN: 18AKRPJ2121L1ZY</p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="pt-2">
                <Col md="6" sm="12">
                  <div className="table-heading">
                    <h5>Recipient</h5>
                  </div>
                  <div className="recipient-info my-2">
                    <p>Arun</p>
                    <p>101, Plot No. 56</p>
                    <p>Dewas, M.P.</p>
                    <p>455001</p>
                  </div>
                  <div className="recipient-contact pb-2">
                    <p>
                      <Mail size={15} className="mr-50" />
                      arun@mail.com
                    </p>
                    <p>
                      <Phone size={15} className="mr-50" />
                      +91 888 888 8888
                    </p>
                  </div>
                </Col>
                <Col md="6" sm="12">
                  <div className="table-heading">
                    <h5>Invoice ID</h5>
                  </div>
                  <div className="invoice-details mt-2">
                    <h6>INVOICE NO.</h6>
                    <p>01/2024</p>
                    <h6 className="mt-2">INVOICE DATE</h6>
                    <p>30 2024</p>
                  </div>
                </Col>
                <Col md="6" sm="12">
                  <div className="table-heading">
                    <h5>Ship To</h5>
                  </div>
                  <div className="company-info my-2">
                    <p>20.LIG</p>
                    <p>Indore, M.P.</p>
                    <p>453771</p>
                  </div>
                  <div className="company-contact">
                    <p>
                      <Mail size={15} className="mr-50" />
                      hello@gmail.com
                    </p>
                    <p>
                      <Phone size={15} className="mr-50" />
                      +91 999 999 9999
                    </p>
                  </div>
                </Col>
                <Col md="6" sm="12">
                  <div className="table-heading">
                    <h5>Bill To</h5>
                  </div>
                  <div className="company-info my-2">
                    <p>101 plot</p>
                    <p>no 76 pu4 scheme no 54 behind c21 mall</p>
                    <p>453771</p>
                  </div>
                  <div className="company-contact">
                    <p>
                      <Mail size={15} className="mr-50" />
                      hello@gmail.com
                    </p>
                    <p>
                      <Phone size={15} className="mr-50" />
                      +91 999
                    </p>
                  </div>
                </Col>
              </Row>

              <div className="invoice-items-table pt-1">
                <Row>
                  <Col sm="12">
                    <Table responsive bordered>
                      <thead>
                        <tr>
                          <th>TASK DESCRIPTION</th>
                          <th>HOURS</th>
                          <th>RATE</th>
                          <th>AMOUNT</th>
                          <th>UNIT</th>
                          <th>GST</th>
                          <th>DIS%</th>
                          <th>TIME</th>
                          <th>STATUS</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Website</td>
                          <td>60</td>
                          <td>15  </td>
                          <td>90000  </td>
                          <td>000  </td>
                          <td>00  </td>
                          <td>00  </td>
                          <td>00  </td>
                          <td>Success </td>
                        </tr>
                        <tr>
                          <td>Template design</td>
                          <td>20</td>
                          <td>12  </td>
                          <td>24000  </td>
                          <td>00 </td>
                          <td>00 </td>
                          <td>00 </td>
                          <td>00  </td>
                          <td>Success </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </div>

              <div className="terms-and-conditions mt-3">
                <Row>
                  <Col md="6" sm="12" style={{ borderRight: '1.8px solid #ddddddd1' }}>
                    <h5>Total In Words</h5>
                    <p>Five Thousand Nine Hundred One Rupees Only</p>
                    <h5>Terms and Conditions</h5>
                    <ol>
                      <li>Paid Amount/Payment are not refundable in any case.</li>
                      <li>Pay Payment under 30 days</li>
                    </ol>
                  </Col>
                  <Col md="6" sm="12">
                    <h5 className="d-flex justify-content-between">
                      <span>Other Charges</span>
                      <span>1450</span>
                    </h5>
                    <h5 className="d-flex justify-content-between">
                      <span>Sub Total</span>
                      <span>5191.2</span>
                    </h5>
                    <h5 className="d-flex justify-content-between">
                      <span>IGST</span>
                      <span>709.94</span>
                    </h5>
                    <h5 className="d-flex justify-content-between">
                      <span>RoundOff</span>
                      <span>-0.14</span>
                    </h5>
                    <h5 className="d-flex justify-content-between">
                      <span>Grand Total</span>
                      <span>5901</span>
                    </h5>
                  </Col>
                </Row>
              </div>

              <div className="tax-table mt-3">
                <Table responsive bordered>
                  <thead>
                    <tr>
                      <th>HSN/SAC</th>
                      <th>Taxable value</th>
                      <th>Integrated Tax</th>
                      <th>Rate</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>7896541</td>
                      <td>3741.20</td>
                      <td>12 %</td>
                      <td>448.94</td>
                      <td>4190.14</td>
                    </tr>
                    <tr>
                      <td>Other Charges</td>
                      <td>1450.00</td>
                      <td>18 %</td>
                      <td>261.00</td>
                      <td>1711.00</td>
                    </tr>
                    <tr>
                      <td><strong>Total</strong></td>
                      <td><strong>5191.2</strong></td>
                      <td><strong>709.94</strong></td>
                      <td></td>
                      <td><strong>5901</strong></td>
                    </tr>
                  </tbody>
                </Table>
              </div>

              <div className="text-right mt-3">
                <p ><strong>For</strong></p>
                <p>AYUHPLUS SERVICES PVT. LTD.</p>
                <div className="text-right">
                  <img
                    alt="Signature"
                    className="h-16"
                    height="50"
                    src={sign}
                    style={{
                      aspectRatio: "200/50",
                      objectFit: "cover",
                    }}
                    width="200"
                  />
                </div>
                <p><strong>Authorized Signature</strong></p>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Invoice;


