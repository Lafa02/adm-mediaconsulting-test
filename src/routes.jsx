import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { FullscreenLoader } from "@/components/common";
import { LibTable, Homepage, NotFound, CustomTable } from "@/components/pages";

const RoutePaths = () => (
  <Suspense fallback={<FullscreenLoader />}>
    <Routes>
      <Route path="/" element={<Homepage />} end />
      <Route path="/lib-table" element={<LibTable />} end />
      <Route path="/custom-table" element={<CustomTable />} end />

      <Route path="*" element={<NotFound />} end />
    </Routes>
  </Suspense>
);
export default RoutePaths;
