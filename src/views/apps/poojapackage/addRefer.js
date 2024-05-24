import React, { useState } from "react";
import { Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useHistory } from "react-router-dom";

const ReferForm = () => {
  const [referTitle, setReferTitle] = useState("");
  const [referAmount, setReferAmount] = useState("");
  const history = useHistory();

  const handleReferTitleChange = (e) => {
    setReferTitle(e.target.value);
  };

  const handleReferAmountChange = (e) => {
    setReferAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Refer Title:", referTitle);
    console.log("Refer Amount:", referAmount);

    setReferTitle("");
    setReferAmount("");
  };

  return (
    <Row>
      <Col sm="12" md={{ size: 6, offset: 3 }}>
        <Card>
          <CardHeader>
            <h1>Add Referral</h1>
            <Button onClick={() => history.goBack()} className="btn btn-danger float-right">Back</Button>
          </CardHeader>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="referTitle">Refer Title:</Label>
                <Input
                  type="text"
                  name="referTitle"
                  id="referTitle"
                  value={referTitle}
                  onChange={handleReferTitleChange}
                  placeholder="Enter refer title"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="referAmount">Refer Amount:</Label>
                <Input
                  type="number"
                  name="referAmount"
                  id="referAmount"
                  value={referAmount}
                  onChange={handleReferAmountChange}
                  placeholder="Enter refer amount"
                  required
                />
              </FormGroup>
              <Button color="primary" type="submit">Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default ReferForm;
