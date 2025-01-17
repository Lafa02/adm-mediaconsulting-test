import { UserTable } from "@/components/tables";
import { Card, CardContent } from "@/components/ui/card";
import { useCallback, useState } from "react";
import { PlanetInfo } from "./components";

const Homepage = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(-1);

  const openPlanetInfo = useCallback((planet) => {
    setSelectedPlanet(planet);
  }, []);

  return (
    <Card className="mx-4">
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

export default Homepage;
