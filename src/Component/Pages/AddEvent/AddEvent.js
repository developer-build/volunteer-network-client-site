import React from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";

const AddEvent = () => {
  return (
    <div>
      <h4>Add Event</h4>
      <div className="register-list">
        <div>
          <Form>
            <div className="row row-cols-md-2">
              <Form.Group className="mb-3 w-50 " controlId="formBasicEmail">
                <Form.Label>Event Title</Form.Label>
                <Form.Control type="text" placeholder="Event Title" />
              </Form.Group>
              <Form.Group className="mb-3 w-50 " controlId="formBasicEmail">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </div>
            <div className="row row-cols-md-2">
              <Form.Label className="w-50">
                Description
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                  className="w-100"
                />
              </Form.Label>
              <Form.Group className="mb-3 w-50 " controlId="formBasicEmail">
                <Form.Label>Banner</Form.Label>
                <Form.Control type="text" placeholder="Image URL" />
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
