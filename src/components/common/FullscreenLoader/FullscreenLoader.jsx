import { Loader2 } from "lucide-react";

const FullscreenLoader = () => {
  return (
    <div className="absolute h-full w-full left-0 top-0 bg-background/70 backdrop-blur-sm flex justify-center items-center z-50">
      <Loader2 className="w-6 h-6 animate-spin" />
    </div>
  );
};

export default FullscreenLoader;
