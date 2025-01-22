import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PATH_BACK_BTN_ENABLED = ["/lib-table", "/custom-table"];

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="flex justify-center items-center min-h-screen py-24">
      <div className="max-w-[1200px] flex flex-col gap-4 justify-center w-full mx-4">
        {PATH_BACK_BTN_ENABLED.includes(location.pathname) && (
          <Button className="self-start" asChild>
            <Link to="/">
              <ArrowLeft /> Go back to home
            </Link>
          </Button>
        )}
        {children}
      </div>
    </div>
  );
};

export default Layout;
