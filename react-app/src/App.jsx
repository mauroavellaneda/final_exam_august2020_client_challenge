import React from "react";
import CourseList from "./components/CourseList";

const App = () => {
  return (
    <div data-cy="list-header">
      <h1>Course List</h1>
      <CourseList />
    </div>
  );
};

export default App;
