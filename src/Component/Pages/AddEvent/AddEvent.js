import React from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";

const AddEvent = () => {
  const submitHandler = (events) => {
    events.preventDefault();
    const name = events.target.title.value;
    const date = events.target.date.value;
    const description = events.target.description.value;
    const img = events.target.img.value;

    fetch("https://murmuring-journey-10809.herokuapp.com/event", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        img: img,
        date: date,
        description: description,
      }),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.acknowledged) {
          toast("Thank you, your product added!");
        }
        events.target.reset();
      });
  };

  return (
    <div>
      <h4>Add Event</h4>
      <div className="register-list">
        <div>
          <Form onSubmit={submitHandler}>
            <div className="row row-cols-md-2">
              <Form.Group className="mb-3 w-50 " controlId="formBasicEmail">
                <Form.Label>Event Title</Form.Label>
                <Form.Control
                  name="title"
                  type="text"
                  placeholder="Event Title"
                />
              </Form.Group>
              <Form.Group className="mb-3 w-50 " controlId="formBasicEmail">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" name="date" />
              </Form.Group>
            </div>
            <div className="row row-cols-md-2">
              <Form.Label className="w-50">
                Description
                <Form.Control
                  as="textarea"
                  name="description"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                  className="w-100"
                />
              </Form.Label>
              <Form.Group className="mb-3 w-50 " controlId="formBasicEmail">
                <Form.Label>Banner</Form.Label>
                <Form.Control type="text" name="img" placeholder="Image URL" />
              </Form.Group>
            </div>
            <div className="text-end">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
