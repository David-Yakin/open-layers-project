import { Box, TextField, Button } from "@mui/material";
import { FC, useState } from "react";
import { initialAttackFormData } from "../helpers/initialData";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { addAttack } from "../helpers/actions";
import { onChangeCoordinates } from "../mapSlice";

type AttackFormProps = {};

export interface AttackFormData {
  coordinateX: number;
  coordinateY: number;
}

const AttackForm: FC<AttackFormProps> = () => {
  const dispatch = useAppDispatch();
  const mapInst = useAppSelector((state) => state.map.map);
  const [mapFormData, setData] = useState<AttackFormData>(
    initialAttackFormData
  );

  const handleClick = (coordinates: number[]) => {
    if (mapInst) {
      dispatch(onChangeCoordinates(coordinates));
      addAttack(mapInst, coordinates);
    }
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
      <Button
        variant="contained"
        onClick={() =>
          handleClick([mapFormData.coordinateX, mapFormData.coordinateY])
        }
      >
        Attack
      </Button>
    </Box>
  );
};

export default AttackForm;
