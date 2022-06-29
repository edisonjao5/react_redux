import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../redux/actions/courseActions";
import * as authorActions from "../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

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
  state = {
    redirectToAddCoursePage: false,
  };

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

  handleDeleteCourse = async (course) => {
    toast.error(`The Course ${course.title} was deleted`);
    try {
      await this.props.actions.deleteCourse(course);
    } catch (error) {
      toast.warning("Delete course failed. " + error.message, {
        autoClose: false,
      });
    }
  };

  render() {
    return (
      <div className="section has-text-justified">
        {/* <form onSubmit={this.handleSubmit}> */}
        {this.state.redirectToAddCoursePage && <Redirect to="/course" />}
        <p className="title my-5 is-family-code is-size-1 has-text-link">
          Courses
        </p>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <>
            <button
              className="button is-link is-outlined my-4"
              onClick={() => this.setState({ redirectToAddCoursePage: true })}
            >
              Add Course
            </button>
            <CourseList
              onDeleteClick={this.handleDeleteCourse}
              courses={this.props.courses}
            />
          </>
        )}
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
  loading: PropTypes.bool.isRequired,
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
    loading: state.apiCallsInProgress > 0,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
      deleteCourse: bindActionCreators(courseActions.deleteCourse, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
