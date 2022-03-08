import { useFormContext } from "react-hook-form";

export function useFormError(name: string) {
  const {
    formState: { errors },
  } = useFormContext();

  const error = Array.isArray(errors[name])
    ? errors[name].join(", ")
    : errors[name]?.message || errors[name];

  // We could return the `type` as well, but it's not really needed for now
  return {
    error,
  };
}
