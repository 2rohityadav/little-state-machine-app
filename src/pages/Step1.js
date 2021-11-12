import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useNavigate } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../helpers/updateAction";

const Step1 = () => {
  const { actions, state } = useStateMachine({ updateAction });
  console.log("useStateMachine-->", useStateMachine);
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    defaultValues: state.yourDetails,
  });
  const navigate = useNavigate();
  const onSubmit = (data) => {
    actions.updateAction(data);
    navigate("/step2");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <h2>Step 1</h2>
      <label>
        First Name:
        <input
          name="firstName"
          {...register("firstName", {
            required: "This is required.",
          })}
        />
        <ErrorMessage errors={errors} name="firstName" as="p" />
      </label>
      <label>
        Last Name:
        <input
          name="lastName"
          {...register("lastName", {
            required: "This is required.",
          })}
        />
        {/* <ErrorMessage errors={errors} name="lastName" as="p" /> */}
      </label>
      <input type="submit" />
    </form>
  );
};

export default Step1;
