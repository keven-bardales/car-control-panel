import { useQuery } from "react-query";
import { DriverService } from "../services/driver-service/driver.service";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Driver } from "../interfaces/api/driver.interface";
import dateFormatter from "../../../../shared/utils/formatters/date-formatter";
import { Button } from "primereact/button";
import { ProgressSpinner } from "primereact/progressspinner";
import { useState, useEffect } from "react";
import { ApiPagination } from "../../../../shared/interfaces/api/api-pagination";
import { InputText } from "primereact/inputtext";

const birthDateTemplate = (rowData: Driver) => {
  return <span>{dateFormatter(rowData.birthdate._value)}</span>;
};

const actionsTemplate = (rowData: Driver) => {
  return (
    <div className="flex justify-center space-x-2">
      <Button label="Editar" className="p-button-primary" />
      <Button label="Eliminar" className="p-button-danger" />
    </div>
  );
};

export default function DriversPage() {
  const [paginationOptions, setPaginationOptions] = useState<ApiPagination<Driver>>({
    includeAll: false,
    items: [],
    orderBy: "name",
    orderDirection: "asc",
    pageIndex: 0,
    pageSize: 10,
    parameter: "",
    totalItems: 0,
  });

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setPaginationOptions((prev) => ({ ...prev, parameter: searchTerm }));
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const { data: drivers, isLoading } = useQuery({
    queryKey: [
      "drivers",
      paginationOptions.pageIndex,
      paginationOptions.pageSize,
      paginationOptions.includeAll,
      paginationOptions.parameter,
      paginationOptions.orderBy,
      paginationOptions.orderDirection,
    ],
    queryFn: async () => new DriverService().getAll({ ...paginationOptions }),
  });

  const headerInput = (
    <div className="w-full flex justify-end">
      <InputText
        type="text"
        value={searchTerm}
        className="p-inputtext p-component p-column-filter bg-gray-100 text-gray-700 border border-gray-300 rounded-lg p-2"
        placeholder="Buscar por nombre"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );

  return (
    <main className="w-full p-6 h-full flex flex-col">
      <header className="w-full flex bg-white">
        <h1 className="text-3xl tracking-normal font-semibold mb-4">Gestión de Conductores</h1>
      </header>

      {isLoading ? (
        <div className="flex justify-center items-center h-60">
          <ProgressSpinner />
        </div>
      ) : (
        <DataTable
          header={headerInput}
          filterDelay={1000}
          value={drivers?.data?.items}
          className="p-datatable-sm shadow-md rounded-lg overflow-hidden"
          emptyMessage="No se encontraron conductores."
          paginator
          rows={paginationOptions.pageSize}
          rowsPerPageOptions={[5, 10, 20]}
          onSort={(e) => {
            setPaginationOptions((act) => {
              return {
                ...act,
                orderBy: e.sortField,
                orderDirection: e.sortOrder === 1 ? "asc" : "desc",
              };
            });
          }}
          onPage={(e) => {
            console.log(e);
            setPaginationOptions((act) => {
              return {
                ...act,
                pageIndex: e?.page ? e?.page - 1 : 0,
                pageSize: e?.rows ? e?.rows : 10,
                orderBy: e?.sortField ? e?.sortField : "name",
                orderDirection: e?.sortOrder === 1 ? "asc" : "desc",
              };
            });
          }}
        >
          <Column field="name" header="Nombre" sortable />
          <Column field="dni" header="Identidad" sortable />
          <Column field="birthdate._value" header="Fecha de nacimiento" body={birthDateTemplate} sortable />
          <Column header="Acciones" body={actionsTemplate} />
        </DataTable>
      )}
    </main>
  );
}
