import { useState, useCallback } from "react";
import styles from "./CustomTable.module.scss";
import { CustomUserTable } from "@/components/tables";
import { PlanetInfo } from "@/components/common";

const CustomTable = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(-1);

  const openPlanetInfo = useCallback((planet) => {
    setSelectedPlanet(planet);
  }, []);

  return (
    <div className={styles["custom-table"]}>
      <CustomUserTable openPlanetInfo={openPlanetInfo} />

      <PlanetInfo
        selectedPlanet={selectedPlanet}
        onClose={() => setSelectedPlanet(-1)}
      />
    </div>
  );
};

export default CustomTable;
