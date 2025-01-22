import { UserTable } from "@/components/tables";
import { Card, CardContent } from "@/components/ui/card";
import { useCallback, useState } from "react";
import { PlanetInfo } from "@/components/common";

const LibTable = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(-1);

  const openPlanetInfo = useCallback((planet) => {
    setSelectedPlanet(planet);
  }, []);

  return (
    <Card>
      <CardContent>
        <UserTable openPlanetInfo={openPlanetInfo} />

        <PlanetInfo
          selectedPlanet={selectedPlanet}
          onClose={() => setSelectedPlanet(-1)}
        />
      </CardContent>
    </Card>
  );
};

export default LibTable;
