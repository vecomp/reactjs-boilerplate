export interface ColumnProps {
  backgroundColor?: string;
  padding?: string;
  margin?: string;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    alignItems?:
      | "flex-start"
      | "center"
      | "flex-end"
      | "space-between"
      | "space-around"
      | "space-evenly";
    justifyContent?:
      | "flex-start"
      | "center"
      | "flex-end"
      | "space-between"
      | "space-around"
      | "space-evenly";
  }