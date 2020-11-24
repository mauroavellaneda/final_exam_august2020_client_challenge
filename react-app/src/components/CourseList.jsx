import React, { useState } from "react";
import axios from "axios";
import "./CourseList.css";

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useState(() => {
    axios
      .get("db.json")
      .then((response) => {
        setCourses(response.data.courses);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <ul>
        {courses.map((course) => (
          <li data-cy={"course-" + course.id} key={course.id}>
            <h2> {course.title}</h2>
            <div> {course.description}</div>
            <br />
            <div>
              <h4>Category:</h4>
              {course.category}
            </div>
            <br />
            <div>
              <h4>Instructors:</h4> {course.instructors}
            </div>
            <br />
            <div> {course.info}</div>
            <br />
            <div>
              <h4>Price:</h4> {course.price}
            </div>
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
