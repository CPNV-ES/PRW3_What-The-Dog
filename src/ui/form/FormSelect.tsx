import { Controller, useFormContext } from "react-hook-form";
import Select, { SelectProps } from "@mui/material/Select";
import { FormControl, InputLabel } from "@mui/material";

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
  className,
}: InputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <FormControl className={className}>
          <InputLabel id={name}>{label}</InputLabel>
          <Select
            required={required}
            placeholder={placeholder}
            defaultValue={defaultValue}
            label={label}
            labelId={name}
            id={name}
            {...field}
          >
            {children}
          </Select>
        </FormControl>
      )}
    />
  );
};
