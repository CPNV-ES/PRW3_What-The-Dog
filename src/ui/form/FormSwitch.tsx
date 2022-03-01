import Switch, { SwitchProps } from "@mui/material/Switch";
import { Controller, useFormContext } from "react-hook-form";

interface FormSwitchProps extends SwitchProps {
  name: string;
  defaultChecked?: boolean;
}

export const FormSwitch = ({
  name,
  required,
  placeholder,
  disabled,
  defaultChecked = false,
}: FormSwitchProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultChecked}
      render={({ field }) => {
        return (
          <Switch
            required={required}
            placeholder={placeholder}
            defaultChecked={defaultChecked}
            disabled={disabled}
            {...field}
          />
        );
      }}
    ></Controller>
  );
};
