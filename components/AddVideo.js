import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

const AddVideo = (props) => {
  const [video, setVideo] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const { config, idRecipe, idUser, getVideo } = props;

  const insertVideo = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const body = {
      video,
      recipe_id: idRecipe,
      user_id: idUser,
      description,
    };
    axios
      .post(`http://localhost:8001/api/recipes/add/video`, body, config)
      .then((res) => {
        // console.log(res);
        getVideo();
        props?.handleClose();
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          text: "error",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <>
      <Button variant="primary" onClick={props?.handleShow}>
        Launch demo modal
      </Button>
      <Modal show={props?.show} onHide={props?.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Video</Form.Label>
              <Form.Control
                type="text"
                placeholder="name@example.com"
                autoFocus
                onChange={(e) => setVideo(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="name@example.com"
                autoFocus
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props?.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={insertVideo} disabled={isLoading}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddVideo;
