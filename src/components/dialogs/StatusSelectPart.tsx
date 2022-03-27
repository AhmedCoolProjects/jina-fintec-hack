import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";

export function StatusSelectPart() {
  const [status, setStatus] = useState<number>(0);

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(parseInt(event.target.value));
  };
  return (
    <div className="flex flex-col space-y-3 p-4 border-[1px] border-gray-400 rounded-md my-3">
      <h1 className="font-semibold text-2xl mb-3 text-center">Le Status</h1>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status.toString()}
          label="Status"
          onChange={handleChange}>
          <MenuItem value={0}>Prédouteux</MenuItem>
          <MenuItem value={1}>Douteux</MenuItem>
          <MenuItem value={2}>Contitieux</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
