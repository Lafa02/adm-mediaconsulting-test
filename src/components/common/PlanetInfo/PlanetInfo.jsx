import { useEffect } from "react";
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
import { toast } from "sonner";
import { useMediaQuery } from "@/hooks";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";

const PlanetContent = ({ planetData, className }) => {
  return (
    <>
      <hr />
      <div className={cn("grid grid-cols-2 gap-4 text-sm", className)}>
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
    </>
  );
};

const PlanetInfo = ({ selectedPlanet, onClose }) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [triggerGetPlanetById, { data: planetData, isFetching }] =
    api.endpoints.getPlanetById.useLazyQuery();

  useEffect(() => {
    if (selectedPlanet === -1) return;
    toast.promise(triggerGetPlanetById(selectedPlanet), {
      loading: "Loading planet information...",
      success: "Planet information loaded successfully",
      error: "Failed to load planet information",
    });
  }, [selectedPlanet]);

  if (isDesktop) {
    return (
      <Dialog open={selectedPlanet !== -1} onOpenChange={onClose}>
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
            <PlanetContent planetData={planetData} />
          </DialogContent>
        )}
      </Dialog>
    );
  }

  return (
    <Drawer open={selectedPlanet !== -1} onOpenChange={onClose}>
      {isFetching ? (
        <DrawerContent className="w-full min-h-[300px] flex justify-center items-center">
          <LoaderCircleIcon className="h-12 w-12 animate-spin" />
        </DrawerContent>
      ) : (
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{planetData?.name}</DrawerTitle>
            <DrawerDescription>
              This is the information about the planet {planetData?.name}
            </DrawerDescription>
          </DrawerHeader>
          <PlanetContent className="px-4 pb-12 pt-4" planetData={planetData} />
        </DrawerContent>
      )}
    </Drawer>
  );
};

export default PlanetInfo;
