import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

import Paper from "@mui/material/Paper";
import axios from "axios";

const Contact = () => {
  const url = process.env.REACT_APP_port + "/getCurrentParent";
  const [informations, setInformations] = useState({
    CIN: null,
    Name: null,
    Subject: null,
    Message: null,
  });
  const [error, setError] = useState(null);
  const getCurrentParent = async () => {
    try {
      await axios
        .get(url, {
          headers: {
            token: localStorage.getItem("Token"),
          },
        })
        .then((res) => {
          console.log("successfuly", res.data);
          setInformations((prev) => {
            return { ...prev, Name: res.data.FirstName, CIN: res.data.CIN };
          });
        });
    } catch (err) {
      console.log("there is an error to get current user ", err);
    }
  };

  console.log("name", informations);
  React.useEffect(() => {
    getCurrentParent();
  }, []);

  const handleChange = (e, type) => {
    setInformations((prev) => {
      return { ...prev, [type]: e.target.value };
    });
    console.log(informations);
  };

  const verifyInputs = () => {
    if (informations.Subject === null) {
      return "Please Choose Your Subject ";
    }
    if (informations.CIN === null || informations.CIN === "") {
      return "All field required";
    }
    if (informations.Message === null || informations.Message === "") {
      return "All field required";
    }
    if (informations.Name === null || informations.Name === "") {
      return "All field required";
    }
    const CIN = Number(informations.CIN);
    if (!CIN) {
      return "CIN should be a number";
    }
    return null;
  };

  const sendInformations = () => {
    const inputError = verifyInputs();
    setError(inputError);
    if (!inputError) {
      toast.success("Message Send Successfuly ");
      setInformations({});
    } else {
      return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Paper
      className="m-5 p-5"
      style={{
        display: "flex",
        minWidth: "90%",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "3vh",
        padding: "3vh",
      }}
    >
      <Container>
        <ToastContainer />
        <Form onSubmit={handleSubmit}>
          <h1>Get In Touch</h1>

          <Form.Group style={{ marginTop: "3vh" }} controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your Name"
              value={informations.Name ? informations.Name : ""}
              onChange={(e) => handleChange(e, "Name")}
            />
          </Form.Group>

          <Form.Group style={{ marginTop: "2vh" }} controlId="email">
            <Form.Label>CIN</Form.Label>
            <Form.Control
              type="text"
              placeholder="CIN"
              value={informations.CIN ? informations.CIN : ""}
              onChange={(e) => handleChange(e, "CIN")}
            />
          </Form.Group>

          <Form.Group style={{ marginTop: "2vh" }} controlId="subject">
            <Form.Label>Subject</Form.Label>
            <Form.Select
              type="text"
              placeholder="CIN"
              value={informations.Subject ? informations.Subject : ""}
              onChange={(e) => handleChange(e, "Subject")}
            >
              <option value="help">Help</option>
              <option value="error">Report</option>
              <option value="other">Other</option>
            </Form.Select>
          </Form.Group>

          <Form.Group style={{ marginTop: "2vh" }} controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              value={informations.Message ? informations.Message : ""}
              onChange={(e) => handleChange(e, "Message")}
            />
          </Form.Group>
          {error && <div className="alert alert-danger">{error}</div>}

          <Button
            style={{
              justifyContent: "center",
              width: "150px",
              marginTop: "3vh",
            }}
            onClick={sendInformations}
            variant="primary"
            type="submit"
          >
            Send
          </Button>
        </Form>
      </Container>
    </Paper>
  );
};
export default Contact;
