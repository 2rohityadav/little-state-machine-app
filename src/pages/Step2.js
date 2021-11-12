import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useNavigate } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../helpers/updateAction";

const Step2 = (props) => {
  const { actions, state } = useStateMachine({ updateAction });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: state.yourDetails,
  });
  const navigate = useNavigate();
  const onSubmit = (data) => {
    actions.updateAction(data);
    navigate("/result");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <h2>Step 2</h2>
      <label>
        Age:
        <input
          name="age"
          type="number"
          {...register("age", {
            required: "This is required.",
            min: {
              value: 18,
              message: "You are required to be 18 above.",
            },
          })}
        />
        <ErrorMessage errors={errors} name="age" as="p" />
      </label>
      <label>
        Years of experience:
        <input
          name="yearsOfExp"
          type="number"
          {...register("yearsOfExp", {
            required: "This is required.",
            min: {
              value: 1,
              message: "you need 1 year of exp.",
            },
          })}
        />
        <ErrorMessage errors={errors} name="yearsOfExp" as="p" />
      </label>
      <input type="submit" />
    </form>
  );
};

export default Step2;
