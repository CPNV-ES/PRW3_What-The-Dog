import { Controller, useFormContext } from "react-hook-form";
import { SelectProps } from "@mui/material/Select";
import { Autocomplete, AutocompleteProps } from "@mui/material";

interface InputProps<T, Multiple extends boolean | undefined, DisableClearable extends boolean | undefined, FreeSolo extends boolean | undefined> 
extends AutocompleteProps<T, Multiple, DisableClearable, FreeSolo> {
  name: string;
  renderInput: (params: SelectProps) => JSX.Element;
  options: any[];
}

export const FormAutocomplete = ({
  name,
  defaultValue,
  renderInput,
  options,
  className,
}: InputProps<any, boolean | undefined, boolean | undefined, boolean | undefined>) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <Autocomplete 
          className={className} 
          renderInput={renderInput}
          options={options} 
        />
      )}
    />
  );
};
