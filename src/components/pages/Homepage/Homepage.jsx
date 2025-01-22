import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center mb-8">
        ADM Media Consulting Test
      </h1>

      <div className="flex justify-center gap-4">
        <Button asChild>
          <Link to="/lib-table">Go to Lib Table</Link>
        </Button>
        <Button asChild>
          <Link to="/custom-table">Go to Custom Table</Link>
        </Button>
      </div>
    </>
  );
};

export default Homepage;
