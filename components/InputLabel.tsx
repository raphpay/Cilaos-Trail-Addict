import { HTMLInputTypeAttribute } from "react";
import { Input } from "./input";
import { Label } from "./label";

export interface ILabelInputProps {
  label: string;
  id: string;
  type?: HTMLInputTypeAttribute | undefined;
  placeholder?: string;
  required?: boolean;
  children?: React.ReactNode;
}

export default function LabelInput({
  label,
  id,
  type,
  placeholder,
  required,
  children,
}: ILabelInputProps) {
  return (
    <>
      {children ? (
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor={id}>{label}</Label>
            {children}
          </div>
          <Input
            id={id}
            type={type}
            placeholder={placeholder}
            required={required}
          />
        </div>
      ) : (
        <div className="grid gap-3">
          <Label htmlFor={id}>{label}</Label>
          <Input
            id={id}
            type={type}
            placeholder={placeholder}
            required={required}
          />
        </div>
      )}
    </>
  );
}
