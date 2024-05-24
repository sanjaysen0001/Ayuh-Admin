import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  CustomInput,
} from 'reactstrap';

const Diagnosticform = () => {
  const history = useHistory();

  const [data, setData] = useState({
    commissionValue: '',
    diagnostics: [],
    selectAllDiagnostics: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleDoctorSelect = (selectedOptions) => {
    if (selectedOptions && Array.isArray(selectedOptions)) {
      const diagnostics = selectedOptions.map((option) => ({
        id: option.value,
        selected: true,
      }));
      setData({ ...data, diagnostics, selectAllDiagnostics: false });
    } else {
      console.error('Selected options are null or undefined.');
    }
  };

  const toggleSelectAllDiagnostics = () => {
    const { selectAllDiagnostics } = data;
    setData({
      ...data,
      diagnostics: selectAllDiagnostics ? [] : [],
      selectAllDiagnostics: !selectAllDiagnostics,
    });
  };

  return (
    <Row>
      <Col sm="12" md="8" className="mx-auto">
        <Card>
          <CardHeader>
            <h3>Diagnostic's Commission Form</h3>
            <Button color="danger" className="ml-2" onClick={() => history.goBack()}>
              Back
            </Button>
          </CardHeader>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <FormGroup row className="align-items-center">
                <Label for="diagnosticsDropdown" sm={3}>
                  Choose Diagnostic's:
                </Label>
                <Col sm={6} className="d-flex align-items-center">
                  <Select
                    isMulti
                    name="diagnosticsDropdown"
                    options={[]}
                    value={data.diagnostics}
                    onChange={handleDoctorSelect}
                    className="w-100"
                    required
                  />
                  <div className="ml-2">
                    <Label check>
                      <CustomInput
                        type="checkbox"
                        id="selectAllCheckbox"
                        checked={data.selectAllDiagnostics}
                        onChange={toggleSelectAllDiagnostics}
                      />
                      All
                    </Label>
                  </div>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="commissionValue" sm={3}>
                  Commission Value:
                </Label>
                <Col sm={6}>
                  <Input
                    type="number"
                    name="commissionValue"
                    id="commissionValue"
                    value={data.commissionValue}
                    onChange={handleInputChange}
                    placeholder="Enter commission value"
                    required
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col sm={{ size: 10, offset: 3 }}>
                  <Button color="primary" type="submit">
                    Submit
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Diagnosticform;
