import { Controller, useFormContext } from "react-hook-form";
import Select, { SelectProps } from "@mui/material/Select";
import { InputLabel } from "@mui/material";

interface InputProps extends SelectProps {
  name: string;
}

export const FormSelect = ({
  name,
  required,
  placeholder,
  defaultValue,
  label,
  children,
}: InputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <>
          <InputLabel id={name}>{label}</InputLabel>
          <Select
            required={required}
            placeholder={placeholder}
            defaultValue={defaultValue}
            label={label}
            labelId={name}
            {...field}
          >
            {children}
          </Select>
        </>
      )}
    />
  );
};
