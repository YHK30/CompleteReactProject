import React from "react";
import { 
    Card,
    CardBody,
    CardSubtitle,
    CardText,
    Button,
    Container
} from "reactstrap";
import axios from 'axios';
import base_url from "../api/connection_url";
import { toast } from 'react-toastify'; 
import { Link } from "react-router-dom";
import "../css/jumbotron.css";

const Course = ({ course, update }) => {

    // Function to delete a course by id
    const deleteCourse = (id) => {
        axios.delete(`${base_url}/courses/${id}`).then(
            (response) => {
                console.log(response);
                toast.success("Course deleted");
                update(id); // Call the update function to remove the course from the list
            },
            (error) => {
                console.log(error);
                toast.error("Something Went Wrong");
            }
        );
    };

    return (
        <Card style={{ backgroundColor: '#FAEBD7' }}> 
            <CardBody className="text-center">
                <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    {/* Link to navigate to the update course page with the course id */}
                    <Link className="btn btn-primary update-button" to={`/update-course/${course.id}`}>Update</Link>{' '}
                    {/* Button to delete the course */}
                    <Button onClick={() => {
                        deleteCourse(course.id); // Call deleteCourse function on button click
                    }} color="danger">Delete</Button>
                </Container>
            </CardBody>
        </Card>
    );
}

export default Course;

// Basic code template for reference
/*
return (
    <Card> 
        <CardBody className="text-center">
            <CardSubtitle className="font-weight-bold">Java Course</CardSubtitle>
            <CardText>It is a Java Course for Beginners</CardText>
            <Container className="text-center">
                <Button color="primary">Update</Button>{' '}
                <Button color="danger">Delete</Button>
            </Container>
        </CardBody>
    </Card>
)
*/