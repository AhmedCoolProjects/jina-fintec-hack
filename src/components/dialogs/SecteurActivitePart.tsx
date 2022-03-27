import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";

export function SecteurActivitePart() {
  const [secteur, setSecteur] = useState<number>(0);

  const handleChange = (event: SelectChangeEvent) => {
    setSecteur(parseInt(event.target.value));
  };
  return (
    <div className="flex flex-col space-y-3 p-4 border-[1px] border-gray-400 rounded-md my-3">
      <h1 className="font-semibold text-2xl mb-3 text-center">Le Secteur</h1>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Secteur</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={secteur.toString()}
          label="Secteur"
          onChange={handleChange}>
          <MenuItem value={0}>Industrie</MenuItem>
          <MenuItem value={1}>Services</MenuItem>
          <MenuItem value={2}>Commerce</MenuItem>
          <MenuItem value={3}>BTP/Immobilier</MenuItem>
          <MenuItem value={4}>Agriculture</MenuItem>
          <MenuItem value={5}>Location</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
