//import the core libraries to use in the component
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as courseActions from "../redux/actions/courseActions";
import * as authorActions from "../redux/actions/authorActions";
import PropTypes from "prop-types";
import CourseForm from "./CourseForm";
import { newCourse } from "../../../tools/mockData";

//this is the class component that will be rendered
// class ManageCourse extends React.Component {
//   componentDidMount() {
//     const { courses, authors, loadAuthors, loadCourses } = this.props;

//     if (courses.length === 0) {
//       loadCourses().catch((error) => {
//         alert("Loading courses failed" + error);
//       });
//     }

//     if (authors.length === 0) {
//       loadAuthors().catch((error) => {
//         alert("Loading authors failed" + error);
//       });
//     }
//   }

//   render() {
//     return (
//       <div className="section has-text-justified">
//         <p className="title my-5 is-family-code is-size-1 has-text-link">
//           Manage Courses
//         </p>
//       </div>
//     );
//   }
// }

//this is the function component that will be rendered
function ManageCourse(courses, authors, loadAuthors, loadCourses, ...props) {
  const [course, setCourse] = useState({ ...props.course });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch((error) => {
        alert("Loading courses failed" + error);
      });
    }

    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        alert("Loading authors failed" + error);
      });
    }
  });

  return (
    <div className="section has-text-justified">
      <CourseForm course={course} authors={authors} errors={errors} />
    </div>
  );
}

//proptypes declaration that is used to validate the props that are passed to the component
ManageCourse.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  loadCourses: PropTypes.func.isRequired,
};

//then the redux mapping functions are called to map the state to the props
function mapStateToProps(state) {
  return {
    course: newCourse,
    courses: state.courses,
    authors: state.authors,
  };
}

const mapDispatchToProps = {
  loadCourses: courseActions.loadCourses,
  loadAuthors: authorActions.loadAuthors,
};

//the redux connect function is called to connect the component to the store
export default connect(mapStateToProps, mapDispatchToProps)(ManageCourse);
