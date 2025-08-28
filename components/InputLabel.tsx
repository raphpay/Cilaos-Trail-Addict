import { HTMLInputTypeAttribute } from "react";
import { Input } from "./input";
import { Label } from "./label";

export interface ILabelInputProps {
  id: string;
  value: string;
  label: string;
  type?: HTMLInputTypeAttribute | undefined;
  placeholder?: string;
  required?: boolean;
  children?: React.ReactNode;
  onChange: (e: any) => void;
}

export default function LabelInput({
  id,
  label,
  value,
  type,
  placeholder,
  required,
  children,
  onChange,
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
            value={value}
            onChange={onChange}
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
            value={value}
            onChange={onChange}
          />
        </div>
      )}
    </>
  );
}
