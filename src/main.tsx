import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { PrimeReactProvider } from "primereact/api";
import AppLayout from "./modules/shared/layouts/app-layout";
import VehicleLayout from "./modules/vehicles/layouts/vehicle.layout";
import { vehicleRoutes } from "./modules/vehicles/vehicles.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "vehicles",
        element: <VehicleLayout />,
        children: vehicleRoutes,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrimeReactProvider>
      <RouterProvider router={router}></RouterProvider>
    </PrimeReactProvider>
  </StrictMode>
);
