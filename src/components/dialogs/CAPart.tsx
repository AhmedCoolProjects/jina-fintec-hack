import { Input, TextField } from "@mui/material";
import { useState } from "react";

export function CAPart() {
  const [caList, setCaList] = useState<number[]>([0, 0, 0]);

  return (
    <div className="flex flex-col space-y-3 p-4 border-[1px] border-gray-400 rounded-md my-3">
      <h1 className="font-semibold text-2xl mb-3 text-center">
        CA (Chiffre d&apos;Affaire)
      </h1>
      <TextField
        fullWidth
        type="number"
        value={caList[0]}
        onChange={(e) =>
          setCaList([parseInt(e.target.value), caList[1], caList[2]])
        }
        label="CA (N-2)"
      />
      <TextField
        fullWidth
        type="number"
        value={caList[1]}
        onChange={(e) =>
          setCaList([caList[0], parseInt(e.target.value), caList[2]])
        }
        label="CA (N-1)"
      />
      <TextField
        fullWidth
        type="number"
        value={caList[2]}
        onChange={(e) =>
          setCaList([caList[0], caList[1], parseInt(e.target.value)])
        }
        label="CA (N)"
      />
    </div>
  );
}
