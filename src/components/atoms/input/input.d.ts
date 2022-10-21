export interface InputProps {
    type: "text" | "email" | "password" | "checkbox";
    autoFocus?: boolean;
    mask?: string;
    placeholder?: string;
    name?: string;
    disabled?: boolean;
    value?: string | ReadonlyArray<string> | number | undefined;
    error?: string;
    touched?: string;
    onChange?: ChangeEventHandler | undefined;
  }