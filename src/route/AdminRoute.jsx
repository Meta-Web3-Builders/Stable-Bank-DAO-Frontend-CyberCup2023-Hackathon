import { useLocation, Navigate } from "react-router-dom";
import { useContractRead, useAccount } from "wagmi";
import { DAO_CONTRACT } from "../config";
const AdminRoute = ({ children }) => {
  const { data: adminAddressDetails } = useContractRead({
    ...DAO_CONTRACT,
    functionName: "Admin",
  });
  const { address } = useAccount();

  let location = useLocation();

  if (adminAddressDetails !== address) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default AdminRoute;
