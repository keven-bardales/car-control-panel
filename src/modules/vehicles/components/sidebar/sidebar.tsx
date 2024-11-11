import { Button } from "primereact/button";
import { Sidebar as PrimeReactSidebar } from "primereact/sidebar";
import { useState } from "react";

export default function Sidebar() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card flex justify-content-center">
      <PrimeReactSidebar visible={visible} onHide={() => setVisible(false)}>
        <h2>Sidebar</h2>
        <p className="text-red-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </PrimeReactSidebar>
      <Button className="bg-red-400" icon="pi pi-arrow-right" onClick={() => setVisible(true)} />
    </div>
  );
}
