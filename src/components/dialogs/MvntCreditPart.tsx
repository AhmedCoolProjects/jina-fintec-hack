import { Input, TextField } from "@mui/material";
import { useState } from "react";

export function MvntCreditPart() {
  const [caList, setCaList] = useState<number[]>([0, 0, 0]);

  return (
    <div className="flex flex-col space-y-3 p-4 border-[1px] border-gray-400 rounded-md my-3">
      <h1 className="font-semibold text-2xl mb-3 text-center">
        Mouvements de crédit
      </h1>
      <TextField
        fullWidth
        type="number"
        value={caList[0]}
        onChange={(e) =>
          setCaList([parseInt(e.target.value), caList[1], caList[2]])
        }
        label="mouvements (N-2)"
      />
      <TextField
        fullWidth
        type="number"
        value={caList[1]}
        onChange={(e) =>
          setCaList([parseInt(e.target.value), caList[1], caList[2]])
        }
        label="mouvements (N-1)"
      />
      <TextField
        fullWidth
        type="number"
        value={caList[2]}
        onChange={(e) =>
          setCaList([parseInt(e.target.value), caList[1], caList[2]])
        }
        label="mouvements (N)"
      />
    </div>
  );
}
