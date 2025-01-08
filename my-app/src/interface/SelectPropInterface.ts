import { SelectChangeEvent } from "@mui/material/Select";

export interface SelectElementProps {
  name: string;
  options: string[];
  selectedValues: string[];
  handleChange: (event: SelectChangeEvent<string[]>) => void;
}
