import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const CourseForm = ({
  course,
  authors,
  onSave,
  onChange,
  saving = false,
  errors = {},
}) => {
  <form onSubmit={onSave}>
    <p className="title my-5 is-family-code is-size-1 has-text-link">
      {course.id ? "Edit Course" : "Add Course"}
    </p>
    {errors.onSave && (
      <div className="alert alert-danger" role="alert">
        {errors.onSave}
      </div>
    )}
    <TextInput
      name="title"
      label="Title"
      value={course.title}
      onChange={onChange}
      error={errors.title}
    />
    <SelectInput
      name="authorId"
      label="Author"
      value={course.authorId || ""}
      defaultOption="Select Author"
      options={authors.map((author) => ({
        value: author.id,
        text: author.name,
      }))}
      onChange={onChange}
      error={errors.authorId}
    />
    <TextInput
      name="category"
      label="Category"
      value={course.category}
      onChange={onChange}
      error={errors.category}
    />
    <button type="submit" disabled={saving} className="button is-link">
      {saving ? "Saving..." : "Save"}
    </button>
  </form>;
};

CourseForm.propTypes = {
  authors: PropTypes.array.isRequired,
  course: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object,
};

export default CourseForm;
