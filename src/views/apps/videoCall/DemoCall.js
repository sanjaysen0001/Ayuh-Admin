import { Container, Row, Col, Button, Input, Alert, Spinner } from "reactstrap";
import React from "react";
import AgoraUIKit from "agora-react-uikit";
// import axiosConfig from "../../axiosConfig";
import swal from "sweetalert";

class userVideoCall extends React.Component {
  constructor(props) {
    super(props);
    this.countRef = React.createRef();
    this.apicall = React.createRef();

    this.state = {
      setTimer: 0,
      Loader: false,
      setIsPaused: false,
      hours: 0,
      minutes: 0,
      seconds: 0,
      stream: null,
      changeView: false,
      videocall: true,
      userid: "",
      astroid: "",
      mobile: "",
      userData: {},
      data: [],
      setVideoCall: false,
      toggle: true,
      userVideocalltoken: "",
    };
  }

  formatTime = (timer) => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);
    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  handlestartinterval = () => {
    this.apicall.current = setInterval(() => {
      // Fetchuserdetail();

      // let userId = JSON.parse(localStorage.getItem("user_id"));
      // let astroId = localStorage.getItem("videoCallAstro_id");
      sessionStorage.setItem("typeofcall", "videocall");

      // let payload = {
      //   userId: userId,
      //   astroId: astroId,
      // };
      // axiosConfig
      //   .post(`/user/deductChatBalance`, payload)
      //   .then((res) => {
      //     console.log("callduration", res);
      //     if (res.status === 203) {
      //       console.log("callduration", res.status === 203);
      clearInterval(this.countRef.current);
      clearInterval(this.apicall.current);
      this.setState({ setIsPaused: false });
      this.setState({ setVideoCall: false });
      swal(
        "Low Balance",
        "Your Balance is getting low As per minimum charge of this Doctor",
        {
          buttons: {
            catch: { text: "Cancel ", value: "catch" },
            // recharge: { text: "Recharge NOW ", value: "Recharge" },
          },
        }
      ).then((value) => {
        switch (value) {
          case "catch":
            // this.props.history.push("/");
            break;
          case "Recharge":
            swal("move to recharge ");
            break;
          default:
        }
      });
      //     }
      //     // for low balance
      //     if (res.status === 404) {
      //       console.log("callduration", res.status === 404);
      //       clearInterval(this.countRef.current);
      //       clearInterval(this.apicall.current);
      //       this.setState({ setIsPaused: false });
      //       this.setState({ setVideoCall: false });
      //     }
      //     // move to another page no balance
      //   })
      //   .catch((err) => {
      //     console.log(err.response.data.message);
      //   });
    }, 60000);
  };

  handleStart = () => {
    this.setState({ setIsPaused: true });
    setInterval(() => {
      this.setState({ setTimer: this.state.setTimer + 1 });
    }, 1000);
  };

  handlePause = () => {
    clearInterval(this.countRef.current);
    clearInterval(this.apicall.current);
    this.setState({ setIsPaused: false });
  };

  componentDidMount() {
    const userchannel_name = localStorage.getItem("userchannel_name");
    this.setState({ userchannelname: "demo" });
    // const usertoken_for_videocall = localStorage.getItem(
    //   "usertoken_for_videocall"
    // );
    this.setState({ usertoken: userchannel_name });
    // const userid = "001user";
    // const callingastro_id = "001Calling";
    // api for token generation
    // const payload = {
    //   userAccount: userid,
    //   astroAccount: callingastro_id,
    // };
    // axiosConfig
    //   .post(`/user/userVideoCall`, payload)
    //   .then((res) => {
    //     console.log(object)
    //     this.setState({ userVideocalltoken: res?.data?.userAccount });
    //     localStorage.setItem("usertoken_for_videocall", res?.data?.userAccount);
    //     localStorage.setItem("userchannel_name", res?.data?.channelName);
    this.setState({ changeView: true });
    this.setState({ setVideoCall: true });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // axiosConfig
    //   .get(`/user/viewoneuser/${userid}`)
    //   .then((response) => {
    //     console.log("videocal", response);
    //     this.setState({ mobile: response.data.data.mobile });
    //     this.setState({ userData: response.data.data });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  //   changeHandler = (e) => {
  //     this.setState({ [e.target.name]: e.target.value });
  //   };

  rtcProps = {
    // Pass your App ID here.
    appId: "61a94c26a48147f4b61c2cd32be384f0",
    // Set the channel name.

    channel: "demo",
    // Pass your temp token here.
    token: null,

    // Set the user ID.
    // uid: 1,
    // Set the user role
    // role: "",
    // layout:"",
  };
  // callbacks = {
  //   EndCall: () => this.setState({ videocall: false }),
  // };
  callbacks = {
    ["user-joined"]: (user) => {
      if (user) {
        this.handleStart();
        // this.handlestartinterval();
        // this.setState({ Loader: false });
        swal("Doctor Joined");
      }
    },

    ["user-left"]: (user) => {
      if (user) {
        swal("Doctor leave the Videocall");
        sessionStorage.setItem("typeofcall", "Videocall");
        this.handlePause();
        clearInterval(this.apicall.current);
        // let userid = localStorage.getItem("user_id");
        // const astroId = localStorage.getItem("astroId");
        // let value = {
        //   userId: userid,
        //   astroId: astroId,
        // };
        // axiosConfig
        //   .post(`/user/changeStatus`, value)
        //   .then((res) => {
        //     console.log(res.data);
        //     this.props.history.push("/astrorating");
        //   })
        //   .catch((err) => {
        //     console.log(err.response);
        //   });
      }
    },
    EndCall: () => {
      this.setState({ videocall: false });
      // this.setState({ setVideoCall: false });
      this.handlePause();
      clearInterval(this.apicall.current);
      swal("Doctor leave the Videocall");
      setTimeout(() => {
        this.props.history.push("/");
      }, 1000);
      // sessionStorage.setItem("typeofcall", "Videocall");
      // let userid = localStorage.getItem("user_id");

      // const astroId = localStorage.getItem("astroId");
      // let value = {
      //   userId: userid,
      //   astroId: astroId,
      // };
      // axiosConfig
      //   .post(`/user/changeStatus`, value)
      //   .then((res) => {
      //     console.log(res.data);
      //     this.props.history.push("/astrorating");
      //   })
      //   .catch((err) => {
      //     console.log(err.response);
      //   });
    },
  };

  render() {
    return (
      <>
        {this.state.Loader ? (
          <>
            <div className="d-flex justify-content-center">
              <h2 className="mt-5">Wait Till Patient Joins Room...</h2>
            </div>
          </>
        ) : null}

        <>
          {this.state.changeView === true ? (
            <>
              <section>
                {this.state.setVideoCall === true ? (
                  <>
                    <Row>
                      <Col className="d-flex justify-content-center">
                        <p>
                          {this.state.Loader ? null : (
                            <>
                              {/* <button>Join Video Call</button> */}
                              {this.formatTime(this.state.setTimer)}
                            </>
                          )}
                        </p>
                      </Col>
                    </Row>
                    {this.state.videocall && (
                      <div
                        style={{
                          display: "flex",
                          width: "80vw",
                          // width: "100vw",
                          height: "80vh",
                        }}
                      >
                        <AgoraUIKit
                          rtcProps={this.rtcProps}
                          callbacks={this.callbacks}
                        />
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    {" "}
                    <div>
                      Thank you for being our valued customer.<br></br> We are
                      so grateful and hope we met your expectations.{" "}
                    </div>
                  </>
                )}
              </section>
            </>
          ) : null}
        </>
      </>
    );
  }
}
export default userVideoCall;
// import React, { useEffect, useState } from "react";
// import {
//   Alert,
//   Button,
//   Card,
//   Col,
//   FormGroup,
//   Input,
//   Label,
//   Row,
// } from "reactstrap";
// import AgoraUIKit, { layout } from "agora-react-uikit";
// import { useParams } from "react-router-dom";
// import axiosConfig from "../../../axiosConfig";
// import { history } from "../../../history";
// import swal from "sweetalert";

// function YourVideocall() {
//   const [videoCall, setVideoCall] = useState(false);
//   const [channelNamecreated, setchannelName] = useState("");
//   const [Status, setStatus] = useState("");
//   const [Token, setToken] = useState("");
//   const [Addcall, setAddcall] = useState(false);
//   const param = useParams();

//   useEffect(() => {}, []);
//   const rtcProps = {
//     // Pass your App ID here.
//     appId: "61a94c26a48147f4b61c2cd32be384f0",

//     // channel: "anujesh",
//     channel: channelNamecreated,
//     // Pass your temp token here.
//     token: (Token && Token) || localStorage.getItem("astrotokenforvideocall"),

//     // Set the user ID.
//     uid: 0,
//     // Set the user role
//     // layout: layout.grid,
//     // layout: isPinned ? layout.pin : layout.grid,
//   };
//   const callbacks = {
//     ["user-left"]: (user) => {
//       if (user) {
//         swal("User Leave The Room");
//       }
//     },
//     EndCall: (e) => {
//       handleCloseChat(e);
//       setVideoCall(false);
//       window.location.reload();
//     },
//   };

//   const handlestatus = async (e) => {
//     e.preventDefault();
//     let userid = localStorage.getItem("CurrentChat_userid");
//     let astroid = localStorage.getItem("astroId");
//     let payload = {
//       astroAccount: astroid,
//     };
//     if (Status === "Active") {
//       await axiosConfig
//         .post(`/user/astroVideoCall`, payload)
//         .then((res) => {
//           console.log(res.data);
//           setchannelName(res.data.channelName);
//           setToken(res.data.astroAccount);
//           localStorage.setItem("astrotokenforvideocall", res.data.astroAccount);
//           if (res.data.channelName && res.data.astroAccount) {
//             setAddcall(true);
//             setVideoCall(true);
//           }
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
//     if (Status === "Deactive") {
//       handleCloseChat(e);
//       setAddcall(false);
//     }

//     if ((userid !== "" && userid !== undefined && userid !== null) || userid) {
//       let load = {
//         userId: userid,
//         astroId: astroid,
//         type: "Video",
//       };

//       await axiosConfig
//         .post(`/user/deductChatBalance`, load)
//         .then((res) => {
//           console.log(res);
//         })
//         .catch((err) => {
//           console.log(err.response);
//         });
//     }
//   };

//   const handleCloseChat = (e) => {
//     e.preventDefault();
//     let astroid = localStorage.getItem("astroId");
//     let userid = localStorage.getItem("CurrentChat_userid");
//     let value = {
//       userId: userid,
//       astroId: astroid,
//     };
//     axiosConfig
//       .post(`/user/changeStatus`, value)
//       .then((res) => {
//         console.log(res);
//         localStorage.removeItem("CurrentChat_userid");
//         window.location.replace("/");
//       })
//       .catch((err) => {
//         console.log(err.response.data);
//       });
//   };
//   return (
//     <div className="videocallmain mt-2">
//       <Card className="mt-2">
//         <Row>
//           <Col lg="4" md="4" sm="4">
//             <div className="container mt-2 mb-1">
//               <Button onClick={(e) => handlestatus(e)} color="success">
//                 Join VideoCall
//               </Button>
//             </div>
//           </Col>

//           <Col lg="6" md="6" sm="6">
//             <div className="container mt-1 mb-1">
//               <Row>
//                 <Col className="mt-1">
//                   <FormGroup check>
//                     <Input
//                       value="Active"
//                       onClick={(e) => {
//                         setStatus(e.target.value);
//                       }}
//                       name="radio1"
//                       type="radio"
//                     />
//                     <Label check>Online</Label>
//                   </FormGroup>
//                 </Col>
//                 <Col className="mt-1">
//                   <FormGroup check>
//                     <Input
//                       value="Deactive"
//                       onClick={(e) => {
//                         setStatus(e.target.value);
//                         setAddcall(false);
//                         handleCloseChat(e);
//                       }}
//                       name="radio1"
//                       type="radio"
//                     />{" "}
//                     <Label check>Offline</Label>
//                   </FormGroup>
//                 </Col>
//               </Row>
//             </div>
//           </Col>
//           <Col>
//             <Col>
//               <div className="d-flex justify-content-end mt-1">
//                 <Button
//                   className="closebtnchat"
//                   onClick={(e) => handleCloseChat(e)}
//                   color="primary"
//                 >
//                   Close VideoCall
//                 </Button>
//               </div>
//             </Col>
//           </Col>
//         </Row>
//         <Row>
//           {videoCall && Status === "Active" ? (
//             <>
//               <div style={{ display: "flex", width: "90vw", height: "80vh" }}>
//                 <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
//               </div>
//             </>
//           ) : (
//             <>
//               {Addcall === true ? (
//                 <>
//                   {/* <div className="mx-2 mb-2"> */}
//                   {/* <Button onClick={() => setVideoCall(true)} color="success">
//                       Click to join Now
//                     </Button> */}
//                   {/* </div> */}
//                 </>
//               ) : null}
//             </>
//           )}
//         </Row>
//       </Card>
//     </div>
//   );
// }

// export default YourVideocall;

// import React, { useState } from "react";
// import AgoraUIKit from "agora-react-uikit";

// const DemoCall = () => {
//   const [videoCall, setVideoCall] = useState(true);
//   const rtcProps = {
//     appId: "61a94c26a48147f4b61c2cd32be384f0",
//     channel: "demo",
//     token: null,
//   };
//   const callbacks = {
//     EndCall: () => setVideoCall(false),
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         width: "100vw",
//         height: "100vh",
//       }}
//     >
//       {videoCall ? (
//         <AgoraUIKit
//           rtcProps={rtcProps}
//           callbacks={callbacks}
//           style={{ width: "100%", height: "100%" }}
//         />
//       ) : (
//         <h3 onClick={() => setVideoCall(true)}>Start Call</h3>
//       )}
//     </div>
//   );
// };

// export default DemoCall;

// import React, { useState } from "react";

// const ToDoList = () => {
//   const [todos, setTodos] = useState([]);
//   const [currentTodo, setCurrentTodo] = useState({
//     id: null,
//     name: "",
//     address: "",
//   });
//   const [isEditing, setIsEditing] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCurrentTodo({
//       ...currentTodo,
//       [name]: value,
//     });
//   };

//   const addTodo = () => {
//     if (currentTodo.name && currentTodo.address) {
//       setTodos([...todos, { ...currentTodo, id: Date.now() }]);
//       setCurrentTodo({ id: null, name: "", address: "" });
//     }
//   };

//   const editTodo = (todo) => {
//     setCurrentTodo(todo);
//     setIsEditing(true);
//   };

//   const updateTodo = () => {
//     setTodos(
//       todos.map((todo) => (todo.id === currentTodo.id ? currentTodo : todo))
//     );
//     setCurrentTodo({ id: null, name: "", address: "" });
//     setIsEditing(false);
//   };

//   const deleteTodo = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   return (
//     <div>
//       <h1>To-Do List</h1>
//       <div>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={currentTodo.name}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="address"
//           placeholder="Address"
//           value={currentTodo.address}
//           onChange={handleChange}
//         />
//         {isEditing ? (
//           <button onClick={updateTodo}>Update</button>
//         ) : (
//           <button onClick={addTodo}>Add</button>
//         )}
//       </div>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             <span>
//               ID: {todo.id}, Name: {todo.name}, Address: {todo.address}
//             </span>
//             <button onClick={() => editTodo(todo)}>Edit</button>
//             <button onClick={() => deleteTodo(todo.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ToDoList;
