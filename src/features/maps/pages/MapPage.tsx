import { useState, useCallback } from "react";
import { initialCoordinates } from "../helpers/initialData";
import OpenLayersMap from "../components/OpenLayersMap";
import AttackForm, { AttackFormData } from "../components/AttackForm";

const MapPage = () => {
  const [coordinates, setCoordinates] = useState<number[]>(initialCoordinates);

  const handleCoordinates = useCallback(
    (coordinatesFromMap: number[]) => setCoordinates(coordinatesFromMap),
    [coordinates]
  );

  const handleSubmitAttackForm = (attackFormData: AttackFormData) => {
    const { coordinateX, coordinateY } = attackFormData;
    setCoordinates([coordinateX, coordinateY]);
  };

  return (
    <>
      <OpenLayersMap
        coordinates={coordinates}
        onChangeCoordinates={handleCoordinates}
      />
      <AttackForm onClick={handleSubmitAttackForm} />
    </>
  );
};

export default MapPage;
