import clsx from "clsx";
import { PropsWithoutRef } from "react";
import { useFormContext } from "react-hook-form";

interface FormTextAreaProps
  extends Omit<
    PropsWithoutRef<JSX.IntrinsicElements["textarea"]>,
    "defaultValue"
  > {
  name: string;
  errorClassName?: string;
}

export const FormTextArea = ({
  name,
  className,
  required,
  ...props
}: FormTextAreaProps) => {
  const { register, getValues } = useFormContext();
  const value = getValues(name);

  return (
    <textarea
      className={clsx("", className)}
      {...props}
      required={required}
      defaultValue={value}
      {...register(name, {
        value,
        required,
        setValueAs: (val) =>
          typeof val === "string" ? (val === "" ? undefined : val.trim()) : val,
      })}
    ></textarea>
  );
};
