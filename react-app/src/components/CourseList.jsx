import React, { useState } from "react";
import axios from "axios";
import "./CourseList.css";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);

  useState(() => {
    axios
      .get("db.json")
      .then((response) => {
        setCourses(response.data.courses);
        setFilteredCourses(response.data.courses);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onClickButton = (chosenCategory) => {
    setFilteredCourses(
      courses.filter((course) => course.category === chosenCategory)
    );
  };

  return (
    <div className="container">
      <h1 data-cy="list-header">Course List</h1>
      {courses.map((course) => (
        <div data-cy={"course-" + course.id} key={course.id}>
          <button onClick={() => onClickButton(category)}>{category}</button>
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
        </div>
      ))}
    </div>
  );
};

export default CourseList;
