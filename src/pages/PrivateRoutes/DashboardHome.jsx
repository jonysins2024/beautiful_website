import { Navigate } from "react-router-dom";
import Spinner from "../../components/Spinner";
import useUserRole from "../../hooks/useUserRole";

const DashboardHome = () => {
  const { role, isLoading } = useUserRole();
  if (isLoading) return <Spinner />;

  if (role === "admin")
    return <Navigate to="/dashboard/Entry" replace={true} />;
  if (role === "instructor")
    return <Navigate to="/dashboard/ManagePost" replace={true} />;
  if (role === "student")
    return <Navigate to="/dashboard/BAD_Request" replace={true} />;
};

export default DashboardHome;
