import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../redux/actions/courseActions";
import * as authorActions from "../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";

class CoursesPage extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     course: {
  //       title: "",
  //     },
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  // }
  //replace this.state with this.props.course
  // state = {
  //   course: {
  //     title: "",
  //   },
  // };

  // handleChange = (event) => {
  //   const course = { ...this.state.course, title: event.target.value };
  //   this.setState({ course });
  // };

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   //debbuger; dispatch
  //   this.props.actions.createCourse(this.state.course);
  //   this.setState({ course: { title: "" } });
  // };

  componentDidMount() {
    const { courses, authors, actions } = this.props;

    if (courses.length === 0) {
      actions.loadCourses().catch((error) => {
        alert("Loading courses failed" + error);
      });
    }

    if (authors.length === 0) {
      actions.loadAuthors().catch((error) => {
        alert("Loading authors failed" + error);
      });
    }
  }

  render() {
    return (
      <div className="section has-text-justified">
        {/* <form onSubmit={this.handleSubmit}> */}
        <p className="title my-5 is-family-code is-size-1 has-text-link">
          Courses
        </p>
        {/* <div className="field">
          <label className="label">Add a Course</label>
          <div className="control">
            <input
              className="input is-link"
              type="text"
              placeholder="Courses"
              onChange={this.handleChange}
              value={this.state.course.title}
            />
          </div>
          <input
            className="button is-link is-outlined my-4"
            type="submit"
            value="Add"
          /> */}
        <CourseList courses={this.props.courses} />
        {/* {this.props.courses.map((course) => (
          <div key={course.id}>
            <p>{course.title}</p>
          </div>
        ))} */}
        {/* </div> */}
        {/* </form> */}
      </div>
    );
  }
}

CoursesPage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  //debugger; mapStateToProps
  return {
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map((course) => {
            return {
              ...course,
              authorName: state.authors.find((a) => a.id === course.authorId)
                .name,
            };
          }),
    authors: state.authors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
