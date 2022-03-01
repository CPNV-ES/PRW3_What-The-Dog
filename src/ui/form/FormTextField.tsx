import { Controller, useFormContext } from "react-hook-form";
import TextField, { StandardTextFieldProps } from "@mui/material/TextField";

interface InputProps extends StandardTextFieldProps {
  name: string;
}

export const FormTextField = ({
  name,
  required,
  placeholder,
  defaultValue,
  label,
}: InputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <TextField
          required={required}
          placeholder={placeholder}
          label={label}
          {...field}
        />
      )}
    />
  );
};
