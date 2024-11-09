import { RouteObject } from "react-router-dom";
import DriversPage from "./features/driver/pages/drivers.page";
import VehiclesPage from "./features/vehicle/pages/vehicle-list/vehicle-page";
import VehicleEntrancePage from "./features/vehicle-entrance/pages/vehicle-entrances/vehicle-entrances.page";
import VehicleExitsPage from "./features/vehicle-exit/pages/vehicle-exits/vehicle-exits.page";
import VehicleMileagesPage from "./features/vehicle-mileage/pages/vehicle-mileages/vehicle-mileages.page";

export const vehicleRoutes: RouteObject[] = [
  {
    path: "",
    element: <VehiclesPage />,
  },
  {
    path: "drivers",
    element: <DriversPage />,
  },
  {
    path: "vehicle-entrances",
    element: <VehicleEntrancePage />,
  },
  {
    path: "vehicle-exits",
    element: <VehicleExitsPage />,
  },
  {
    path: "vehicle-mileages",
    element: <VehicleMileagesPage />,
  },
  {
    path: "*",
    element: <h1>Not Found</h1>,
  },
];
