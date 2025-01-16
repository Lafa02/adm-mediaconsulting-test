import { UserTable } from "@/components/tables";
import { Card, CardContent } from "@/components/ui/card";
import { useCallback, useEffect, useState } from "react";
import api from "@/services/api";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { LoaderCircleIcon } from "lucide-react";
import { formatNumber } from "@/lib/utils";

const Homepage = () => {
  const [triggerGetPlanetById, { data: planetData, isFetching }] =
    api.endpoints.getPlanetById.useLazyQuery();
  const [selectedPlanet, setSelectedPlanet] = useState(-1);

  const openPlanetInfo = useCallback((planet) => {
    setSelectedPlanet(planet);
  }, []);

  useEffect(() => {
    if (selectedPlanet === -1) return;
    triggerGetPlanetById(selectedPlanet);
  }, [selectedPlanet]);

  return (
    <Card>
      <CardContent>
        <UserTable openPlanetInfo={openPlanetInfo} />

        <Dialog
          open={selectedPlanet !== -1}
          onOpenChange={() => setSelectedPlanet(-1)}
        >
          {isFetching ? (
            <DialogContent className="w-full min-h-[300px] flex justify-center items-center">
              <LoaderCircleIcon className="h-12 w-12 animate-spin" />
            </DialogContent>
          ) : (
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{planetData?.name}</DialogTitle>
                <DialogDescription>
                  This is the information about the planet {planetData?.name}
                </DialogDescription>
              </DialogHeader>
              <hr />
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex flex-col gap-2">
                  <b>Diameter</b>
                  <span>{formatNumber(planetData?.diameter)} km</span>
                </div>
                <div className="flex flex-col gap-2">
                  <b>Climate</b>
                  <span className="capitalize">{planetData?.climate}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <b>Population</b>
                  <span>{formatNumber(planetData?.population)}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <b>Surface water</b>
                  <span>{planetData?.surface_water}%</span>
                </div>
                <div className="flex flex-col gap-2">
                  <b>Terrain</b>
                  <span className="capitalize">{planetData?.terrain}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <b>Gravity</b>
                  <span>{planetData?.gravity}</span>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default Homepage;
