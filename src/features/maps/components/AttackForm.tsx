import { Box, TextField, Button } from "@mui/material";
import { FC, useState } from "react";
import { initialAttackFormData } from "../helpers/initialData";

type AttackFormProps = {
  onClick: (FormInputs: AttackFormData) => void;
};

export interface AttackFormData {
  coordinateX: number;
  coordinateY: number;
}

const AttackForm: FC<AttackFormProps> = ({ onClick }) => {
  const [mapFormData, setData] = useState<AttackFormData>(
    initialAttackFormData
  );

  const handleClick = () => {
    onClick(mapFormData);
  };

  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField
        size="small"
        id="outlined-basic-x"
        label="coordinate X"
        placeholder="Enter a number"
        variant="outlined"
        type="number"
        value={mapFormData.coordinateX}
        onChange={(e) =>
          setData((prev) => ({ ...prev, coordinateX: +e.target.value }))
        }
      />
      <TextField
        size="small"
        id="outlined-basic-y"
        label="coordinate Y"
        variant="outlined"
        type="number"
        value={mapFormData.coordinateY}
        onChange={(e) =>
          setData((prev) => ({ ...prev, coordinateY: +e.target.value }))
        }
      />
      <Button variant="contained" onClick={handleClick}>
        Attack
      </Button>
    </Box>
  );
};

export default AttackForm;
