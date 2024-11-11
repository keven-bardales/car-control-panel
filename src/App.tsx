import "./App.css";
import { Button } from "primereact/button";

export default function App() {
  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button icon="pi pi-plus" className="mr-2" label="Increment"></Button>
    </div>
  );
}
