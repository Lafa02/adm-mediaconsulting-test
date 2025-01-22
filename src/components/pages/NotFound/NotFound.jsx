import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center mb-8">
        404 - Page not found
      </h1>

      <Button className="self-center" asChild>
        <Link to="/">Go back to home</Link>
      </Button>
    </>
  );
};

export default NotFound;
