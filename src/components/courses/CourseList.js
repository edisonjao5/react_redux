import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { activeStyle } from "../common/Header";

const CourseList = ({ courses, onDeleteClick }) => (
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
        <th />
      </tr>
    </thead>
    <tbody>
      {courses.map((course) => {
        return (
          <tr key={course.id}>
            <td>
              <a
                className="button is-link is-light my-2"
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
            <td>
              <button
                className="button is-danger is-light my-2"
                onClick={() => onDeleteClick(course)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default CourseList;
