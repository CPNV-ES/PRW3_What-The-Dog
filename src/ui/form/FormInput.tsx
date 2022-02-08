import { PropsWithoutRef } from "react";
import { useFormContext } from "react-hook-form";
import clsx from "clsx";

interface InputProps
  extends Omit<
    PropsWithoutRef<JSX.IntrinsicElements["input"]>,
    "defaultValue"
  > {
  errorClassName?: string;
  name: string;
  valueAsNumber?: boolean;
  valueAsDate?: boolean;
}

export const FormInput = ({
  name,
  valueAsNumber,
  valueAsDate,
  className,
  required,
  ...props
}: InputProps) => {
  const { register, getValues } = useFormContext();
  const value = getValues(name);

  return (
    <input
      className={clsx("", className)}
      {...props}
      required={required}
      defaultValue={value}
      {...register(name, {
        valueAsDate,
        valueAsNumber,
        value,
        required,
        setValueAs: (val) =>
          typeof val === "string" ? (val === "" ? undefined : val.trim()) : val,
      })}
    />
  );
};
