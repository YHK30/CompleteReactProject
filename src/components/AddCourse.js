import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import axios from 'axios';
import base_url from './../api/connection_url';
import {toast} from 'react-toastify';

const AddCourse = () => {
    useEffect(()=>{
        // Update document title when component mounts
        document.title = "Add Courses || Let's Code";
    },[]); // Empty array as dependency to run the effect only once when component mounts

    const [course, setCourse] = useState({}); // State to hold course data

    // Form submit handler function
    const handleForm = (e) => {
        console.log(course); 
        postDataToServer(course); // Call function to send data to server
        e.preventDefault(); // Prevent default form submission behavior
    }

    // Function to post course data to server
    const postDataToServer = (data) => {
        axios.post(`${base_url}/courses`, data).then(
            (response) => {
                console.log(response); 
                console.log("Success"); 
                toast.success("Course added successfully"); 
            },
            (error) => {
                console.log(error);
                console.log("error");
                toast.error("Something went wrong..!"); 
            }
        )
    }

    return (
        <Fragment>
            <h1 className="text-center my-3">Fill Course Details</h1>
            {/* Course details form */}
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label htmlFor="userId">Course Id</label>
                    {/* Input for Course Id */}
                    <Input
                        type="text"
                        placeholder="Enter Course ID here"
                        name="userId"
                        id="userId"
                        // Update course state with input value
                        onChange={(e) => {
                            setCourse({ ...course, id: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="titleId">Course Title</label>
                    {/* Input for Course Title */}
                    <Input
                        type="text"
                        placeholder="Enter Title here"
                        name="titleId"
                        id="titleId"
                        // Update course state with input value
                        onChange={(e) => {
                            setCourse({ ...course, title: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="descId">Course Description</label>
                    {/* Textarea for Course Description */}
                    <Input
                        type="textarea"
                        placeholder="Enter Description here"
                        name="descId"
                        id="descId"
                        // Update course state with input value
                        onChange={(e) => {
                            setCourse({ ...course, description: e.target.value });
                        }}
                        style={{ height: 120 }}
                    />
                </FormGroup>
                <Container className="text-center">
                    {/* Submit and Clear buttons */}
                    <Button type="submit" color="primary">Add Course</Button>{' '}
                    <Button type="reset" color="warning">Clear</Button>
                </Container>
            </Form>
        </Fragment>
    );
}

export default AddCourse;