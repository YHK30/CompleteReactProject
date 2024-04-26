import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import axios from 'axios';
import base_url from './../api/connection_url';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from "react-router-dom";

const UpdateCourse = () => {
    const { id } = useParams(); // Retrieve the id parameter from the URL using useParams()

    const [course, setCourse] = useState({
        id: id, // Set the initial value of id in state to the id from URL params
        title: '',
        description: ''
    });

    const navigate = useNavigate(); // Hook to perform navigation

    useEffect(() => {
        document.title = "Update Course || Let's Code"; // Update document title when component mounts

        // Fetch course details from the server if id parameter is available
        if (id) {
            axios.get(`${base_url}/courses/` + id)
                .then(response => {
                    // Update course state with fetched data
                    setCourse({
                        ...course,
                        title: response.data.title,
                        description: response.data.description
                    });
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Send PUT request to update course details on the server
        axios.put(`${base_url}/courses`, course)
            .then(response => {
                navigate('/'); // Navigate back to the home page after successful update
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <Fragment>
            <h1 className="text-center my-3">Update Course Details</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <label htmlFor="titleId">Course Title</label>
                    {/* Input field for course title */}
                    <Input
                        type="text"
                        placeholder="Enter Title here"
                        name="titleId"
                        id="titleId"
                        value={course.title} // Bind input value to course title in state
                        onChange={(e) => {
                            setCourse({ ...course, title: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="descId">Course Description</label>
                    {/* Textarea for course description */}
                    <Input
                        type="textarea"
                        placeholder="Enter Description here"
                        name="descId"
                        id="descId"
                        value={course.description} // Bind textarea value to course description in state
                        onChange={(e) => {
                            setCourse({ ...course, description: e.target.value });
                        }}
                        style={{ height: 120 }}
                    />
                </FormGroup>
                <Container className="text-center">
                    {/* Submit and Clear buttons */}
                    <Button type="submit" color="primary">Update Course</Button>{' '}
                    <Button type="reset" color="warning">Clear</Button>
                </Container>
            </Form>
        </Fragment>
    )
}

export default UpdateCourse;