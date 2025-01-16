import { ArrowUpDown, ArrowDown, ArrowUp } from "lucide-react";

const SortingArrow = ({ sortDir }) => {
  if (sortDir === "asc") {
    return <ArrowDown />;
  }
  if (sortDir === "desc") {
    return <ArrowUp />;
  }
  return <ArrowUpDown />;
};

export default SortingArrow;
