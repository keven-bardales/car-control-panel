import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import AppLayout from "./modules/shared/layouts/app-layout";
import VehicleLayout from "./modules/vehicles/layouts/vehicle.layout";
import { vehicleRoutes } from "./modules/vehicles/vehicles.routes";
import Providers from "./modules/shared/providers/providers";

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
    <Providers>
      <PrimeReactProvider>
        <RouterProvider router={router}></RouterProvider>
      </PrimeReactProvider>
    </Providers>
  </StrictMode>
);
