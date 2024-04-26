import React, { useState, useEffect } from "react";
import Course from "./Course";
import axios from 'axios';
import base_url from "./../api/connection_url";
import { toast } from 'react-toastify';

const AllCourses = () => {
    useEffect(() => {
        // Update document title when component mounts
        document.title = "View Courses || Let's Code";
    }, []);

    // Function to fetch all courses from the server
    const getAllCoursesfromServer = () => {
        axios.get(`${base_url}/courses`).then(
            (response) => {
                // Success
                console.log(response.data);
                toast.success("Courses have been loaded", {
                    position: "bottom-right"
                });
                setCourses(response.data); // Set the courses state with the fetched data
            },
            (error) => {
                // Error
                console.log(error);
                toast.error("Something went wrong", {
                    position: "bottom-right"
                });
            }
        );
    };

    // Call getAllCoursesfromServer function when component mounts
    useEffect(() => {
        getAllCoursesfromServer();
    }, []);

    const [courses, setCourses] = useState([]); // State to hold the list of courses

    // Function to update courses by filtering out a course with a specific id
    const updateCoursesById = (id) => {
        setCourses(courses.filter((c) => c.id !== id));
    };

    return (
        <div>
            <h1>All Courses</h1>
            <p>List of courses:</p>
            {
                courses.length > 0 ?
                courses.map((item) => (
                    <Course key={item.id} course={item} update={updateCoursesById} />
                )) :
                "No Courses"
            }
        </div>
    );
}

export default AllCourses;
