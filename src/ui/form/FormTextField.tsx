import { Controller, useFormContext } from "react-hook-form";
import TextField, { StandardTextFieldProps } from "@mui/material/TextField";
import { useFormError } from "./useFormError";

interface InputProps extends StandardTextFieldProps {
  name: string;
}

export const FormTextField = ({
  name,
  required,
  placeholder,
  defaultValue,
  label,
  className
}: InputProps) => {
  const { control } = useFormContext();
  const { error } = useFormError(name);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <TextField
          required={required}
          placeholder={placeholder}
          defaultValue={defaultValue}
          error={!!error}
          helperText={error}
          label={label}
          className={className}
          {...field}
        />
      )}
    />
  );
};
