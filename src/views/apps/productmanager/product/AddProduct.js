import React, { Component } from "react";
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  Label,
  Button,
  CustomInput,
} from "reactstrap";
import draftToHtml from "draftjs-to-html";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import axiosConfig from "../../../../axiosConfig";
import "react-toastify/dist/ReactToastify.css";
import { Route } from "react-router-dom";
import Breadcrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../../assets/scss/plugins/extensions/editor.scss";
import { data } from "jquery";
import swal from "sweetalert";
export class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      productname: "",
      category: "",
      image: "",
      desc: "",
      qsCount: "",
      price: "",
      limit: "",
      selectedFile: undefined,
      selectedName: "",
      status: "",
      editorState: EditorState.createEmpty(),
    };
    this.state = {
      categoryP: [],
    };
  }

  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files });
    this.setState({ selectedName: event.target.files.name });
    console.log(event.target.files);
  };
  uploadImageCallBack = (file) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "https://api.imgur.com/3/image");
      xhr.setRequestHeader("Authorization", "Client-ID 7e1c3e366d22aa3");
      const data = new FormData();
      data.append("image", file);
      xhr.send(data);
      xhr.addEventListener("load", () => {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      });
      xhr.addEventListener("error", () => {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      });
    });
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
      desc: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
  };

  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  async componentDidMount() {
    axiosConfig
      .get("/admin/getproductcalegory")
      .then((response) => {
        console.log(response);
        this.setState({
          categoryP: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", this.state.title);
    data.append("productname", this.state.productname);
    data.append("category", this.state.category);
    data.append("desc", this.state.desc);
    data.append("price", this.state.price);
    data.append("qsCount", this.state.qsCount);
    // data.append("limit", this.state.limit);

    data.append("status", this.state.status);

    for (const file of this.state.selectedFile) {
      if (this.state.selectedFile !== null) {
        data.append("image", file);
      }
    }
    // for (var value of data.values()) {
    //   console.log(value);
    // }
    // for (var key of data.keys()) {
    //   console.log(key);
    // }

    axiosConfig
      .post(`/admin/addProduct`, data)
      .then((response) => {
        console.log(response.data);
        swal("Product Added Successful");
        this.props.history.push("/app/productmanager/product/productList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // blockInvalidChar = (e) => {
  //   e.target.value > 50 ||
  //     (["e", "E", "+", "-"].includes(e.key) && e.preventDefault());
  // };
  render() {
    return (
      <div>
        <Breadcrumbs
          breadCrumbTitle="Add Product"
          breadCrumbParent=" Product Management"
          breadCrumbActive="Add Product"
        />
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add Product
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() =>
                      history.push("/app/productmanager/product/productList")
                    }
                  >
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>Product Title</Label>
                  <Input
                    required
                    type="text"
                    name="title"
                    placeholder="Enter Title"
                    value={this.state.title}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>

                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>Product Name</Label>
                  <Input
                    required
                    type="text"
                    name="productname"
                    placeholder="Enter Product Name"
                    value={this.state.productname}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Product Category</Label>
                  <CustomInput
                    type="select"
                    name="category"
                    value={this.state.category}
                    onChange={this.changeHandler}
                  >
                    <option>Select Product Category</option>
                    {this.state.categoryP?.map((allCategory) => (
                      <option value={allCategory?._id} key={allCategory?._id}>
                        {allCategory?.name}
                      </option>
                    ))}
                  </CustomInput>
                </Col>
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>Price(MRP)</Label>
                  <Input
                    required
                    type="number"
                    name="price"
                    placeholder="Enter price"
                    value={this.state.price}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>Set No of Question </Label>
                  <Input
                    required
                    type="number"
                    name="qsCount"
                    placeholder="Enter No of Question "
                    value={this.state.qsCount}
                    onChange={this.changeHandler}
                  />
                </Col>
                {/* <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label> * Limit(50)</Label>
                  <Input
                    required
                    type="number"
                    name="limit"
                    onKeyDown={this.blockInvalidChar}
                    min="0"
                    max="50"
                    placeholder="Enter limit max is 50"
                    value={this.state.limit}
                    onChange={this.changeHandler}
                  />
                </Col> */}
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>Thumnail Image</Label>

                  <Label>Image</Label>
                  <CustomInput
                    type="file"
                    multiple
                    onChange={this.onChangeHandler}
                  />
                </Col>
                <Col lg="12" md="12" sm="12" className="mb-2">
                  <Label>Description</Label>

                  <br />

                  <Editor
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={this.onEditorStateChange}
                    toolbar={{
                      inline: { inDropdown: true },
                      list: { inDropdown: true },
                      textAlign: { inDropdown: true },
                      link: { inDropdown: true },
                      history: { inDropdown: true },
                      image: {
                        uploadCallback: this.uploadImageCallBack,
                        previewImage: true,
                        alt: { present: true, mandatory: true },
                      },
                    }}
                  />
                </Col>
              </Row>
              <Col lg="6" md="6" sm="6" className="mb-2">
                <Label className="mb-1">Status</Label>
                <div
                  className="form-label-group"
                  onChange={(e) => this.changeHandler1(e)}
                >
                  <input
                    style={{ marginRight: "3px" }}
                    type="radio"
                    name="status"
                    value="Active"
                  />
                  <span style={{ marginRight: "20px" }}>Active</span>

                  <input
                    style={{ marginRight: "3px" }}
                    type="radio"
                    name="status"
                    value="Inactive"
                  />
                  <span style={{ marginRight: "3px" }}>Inactive</span>
                </div>
              </Col>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Add
                  </Button.Ripple>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default AddProduct;
