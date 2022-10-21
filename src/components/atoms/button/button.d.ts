export interface ButtonProps extends ButtonContainerProps {
  loader?: boolean;
  children?: string | JSX.Element;
}

export interface ButtonContainerProps {
    color:
      | "primary"
      | "accent"
      | "success"
      | "danger"
      | "warning"
      | "outline";
    outline?: boolean;
    borderless?: boolean;
    fullWidth?: boolean;
  }