import { Controller, useFormContext } from "react-hook-form";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker, { DatePickerProps } from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

interface InputProps
  extends Omit<DatePickerProps, "renderInput" | "onChange" | "value"> {
  name: string;
}

export const FormDatePicker = ({ name, label }: InputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label={label}
            renderInput={(params) => <TextField {...params} />}
            {...field}
          />
        </LocalizationProvider>
      )}
    />
  );
};
