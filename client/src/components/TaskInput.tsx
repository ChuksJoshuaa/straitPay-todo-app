import React, { useContext, useState } from "react";
import { FormProps } from "../interface";
import { isEmptyString } from "../utils/validate";
import { ErrorPopup, SuccessPopup } from "../utils/notification";
import { serverUrl } from "../routes";
import MyContext from "../contexts";
import { ADDDATA } from "../constants/actionTypes";

const initialState: FormProps = {
  title: "",
  description: "",
};

const TaskInput = () => {
  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState(initialState);
  const fieldsToValidate = ["title", "description"];
  const { dispatch } = useContext(MyContext);

  const handleEnterKeyPress = (e: React.KeyboardEvent) => {
    e.preventDefault();
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const emptyField = () => {
    setErrors(initialState);
    setFormData(initialState);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let hasErrors = false;
    let newErrors = initialState;

    fieldsToValidate.forEach((field) => {
      if (!formData[field as keyof FormProps]) {
        newErrors = {
          ...newErrors,
          [field]: "This field is required",
        };
        hasErrors = true;
      } else {
        newErrors = {
          ...newErrors,
          [field]: "",
        };
      }
    });

    setErrors(newErrors);

    if (hasErrors) {
      return;
    }
    setIsSubmitting(true);
    try {
      let createUrl = `${serverUrl}/api/v1/tasks/create`;
      const response = await fetch(createUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const result = await response.json();
        let data = result?.data;
        dispatch({ type: ADDDATA, payload: data });
        SuccessPopup("Success! Your task has been created.");
        emptyField();
      } else {
        ErrorPopup("Sorry, an error occurred");
      }
    } catch (error) {
      ErrorPopup("Sorry, an error occurred");
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="form__container"
      id="form__container"
      data-testid="form__container"
    >
      <div className="bg-white shadow-md rounded px-8 pt-2 pb-2 mb-4 flex flex-col my-2">
        <h3 className="py-3 text-center text-lg font-bold capitalize">
          Add task
        </h3>
        <div className="-mx-3 flex flex-col mb-6">
          <div className="mb-6 md:mb-3">
            <label
              className="block capitalize tracking-wide text-grey-darker text-md md:text-lg font-normal mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className={`${
                isEmptyString(errors.title) ? "input" : "input-invalid"
              } appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-1 outline-none`}
              id="title"
              placeholder="-- Enter title --"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
            <div className="text-red-900 text-sm">{errors.title}</div>
          </div>
          <div className="mb-6 md:mb-3">
            <label
              className="block capitalize tracking-wide text-grey-darker text-md md:text-lg font-normal mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className={`${
                isEmptyString(errors.description) ? "input" : "input-invalid"
              } appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-1 outline-none`}
              id="description"
              placeholder="-- Enter description --"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
            <div className="text-red-900 text-sm">{errors.description}</div>
          </div>

          <div className="flex flex-end justify-end items-center">
            <button
              type="button"
              onClick={emptyField}
              className="mr-3 text-gray-900 cursor-pointer"
            >
              Cancel
            </button>

            <button
              className={`flex flex-row navy bg-gray-900 capitalize hover:bg-gray-700 text-white font-[semi-bold] py-2 px-4 rounded ${
                isSubmitting && "opacity-50"
              }`}
              onClick={handleSubmit}
              onKeyDown={handleEnterKeyPress}
              disabled={isSubmitting}
            >
              {isSubmitting && (
                <div aria-label="Loading..." role="status" className="mr-1">
                  <svg className="h-5 w-5 animate-spin" viewBox="3 3 18 18">
                    <path
                      className="fill-gray-200"
                      d="M12 5C8.13401 5 5 8.13401 5 12c0 3.866 3.13401 7 7 7 3.866.0 7-3.134 7-7 0-3.86599-3.134-7-7-7zM3 12c0-4.97056 4.02944-9 9-9 4.9706.0 9 4.02944 9 9 0 4.9706-4.0294 9-9 9-4.97056.0-9-4.0294-9-9z"
                    ></path>
                    <path
                      className="fill-gray-800"
                      d="M16.9497 7.05015c-2.7336-2.73367-7.16578-2.73367-9.89945.0-.39052.39052-1.02369.39052-1.41421.0-.39053-.39053-.39053-1.02369.0-1.41422 3.51472-3.51472 9.21316-3.51472 12.72796.0C18.7545 6.02646 18.7545 6.65962 18.364 7.05015c-.390599999999999.39052-1.0237.39052-1.4143.0z"
                    ></path>
                  </svg>
                </div>
              )}
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskInput;
