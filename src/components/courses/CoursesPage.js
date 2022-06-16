import React from "react";

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
  state = {
    course: {
      title: "",
    },
  };

  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(this.state.course.title);
    this.setState({ course: { title: "" } });
  };

  render() {
    return (
      <div className="section has-text-justified">
        <form onSubmit={this.handleSubmit}>
          <p className="title my-5 is-family-code is-size-1 has-text-link">
            Courses
          </p>
          <div className="field">
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
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CoursesPage;
