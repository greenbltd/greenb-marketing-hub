import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/greenb-logo.png";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-greenb-50 to-greenb-100">
      <div className="text-center container-padding">
        <img src={logo} alt="GreenB Logo" className="w-20 h-20 mx-auto mb-8 animate-float" />
        <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
        <p className="text-2xl font-semibold text-foreground mb-2">Page Not Found</p>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()} className="border-primary text-primary hover:bg-primary/5">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
