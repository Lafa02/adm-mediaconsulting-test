import { Loader2 } from "lucide-react";

const FullscreenLoader = () => {
  return (
    <div className="fixed h-screen w-screen left-0 top-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">
      <Loader2 className="w-6 h-6 animate-spin" />
    </div>
  );
};

export default FullscreenLoader;
