import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { activeStyle } from "../common/Header";

const CourseList = ({ courses }) => (
  <table className="table">
    <thead>
      <tr>
        <th
          style={activeStyle}
          className="is-size-5 has-text-centered"
          colSpan={2}
        >
          Title
        </th>
        <th style={activeStyle} className="is-size-5">
          Author
        </th>
        <th style={activeStyle} className="is-size-5">
          Category
        </th>
      </tr>
    </thead>
    <tbody>
      {courses.map((course) => {
        return (
          <tr key={course.id}>
            <td>
              <a
                className="button is-link is-outlined my-2"
                href={"https://pluralsight.com/courses" + course.slug}
              >
                Watch
              </a>
            </td>
            <td>
              <Link to={`/course/${course.slug}`}>{course.title}</Link>
            </td>
            <td>{course.authorName}</td>
            <td>{course.category}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
};

export default CourseList;
