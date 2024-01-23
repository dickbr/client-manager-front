
import { ListClientsProps } from "@app/types/clients";
import ModalRouteGPS from "./ModalRouteGPS";
import { DataGrid, GridColDef, GridToolbar, ptBR } from '@mui/x-data-grid';
import { useState } from "react";
import useSWR from "swr";
import Link from "next/link";

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Nome', width: 130 },
  { field: 'email', headerName: 'E-mail', width: 130 },
  { field: 'cellphone', headerName: 'Telefone', width: 130 },
  {
    field: 'lat',
    headerName: 'Latitude',
    type: 'number',
    width: 90,
  },
  {
    field: 'log',
    headerName: 'Longitude',
    type: 'number',
    width: 90,
  },
];

const fetcher = (...args) => fetch(...args).then(res => res.json())
export default function ListClients({ clients }: ListClientsProps) {
  const [isShowModalRouteGPS, setIsShowModalRouteGPS] = useState(false);
  const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/clients/calc-routes`, fetcher);

  const toggleModalRouteGPS = () => {
    setIsShowModalRouteGPS(!isShowModalRouteGPS);
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <h1 className="text-2xl mb-4 text-white">Lista de clientes</h1>
      <DataGrid
        rows={clients}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{
          color: '#ffffff',
          '& .MuiDataGrid-cell:hover': {
            color: '#ffffff',
          },
          '& .MuiTablePagination-toolbar': {
            color: '#ffffff'
          },
          '& .MuiSelect-select': {
            borderColor: '#ffffff',
            border: '1px solid',
            borderRadius: '3px'
          },
          '& .MuiSvgIcon-root': {
            color: '#ffffff'
          },
          '& .MuiButtonBase-root': {
            color: '#ffffff'
          },
          '& .MuiButtonBase-root .MuiSvgIcon-root': {
            color: '#ffffff',
            opacity: 1
          },
          '& .MuiDataGrid-columnHeader:not(.MuiDataGrid-columnHeader--sorted) .MuiDataGrid-sortIcon': {
            opacity: .5
          }
        }}
        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
        slots={{
          toolbar: GridToolbar,
        }}
      />
      <div className="flex justify-end">
        <Link href="/clients/register" className="font-medium hover:bg-blue-600 hover:text-white text-blue-600 dark:text-blue-500 hover:underline flex float-right mt-6 items-center mr-6 border border-blue-600 rounded-md p-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M15 4a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4m0 1.9a2.1 2.1 0 1 1 0 4.2A2.1 2.1 0 0 1 12.9 8A2.1 2.1 0 0 1 15 5.9M4 7v3H1v2h3v3h2v-3h3v-2H6V7zm11 6c-2.67 0-8 1.33-8 4v3h16v-3c0-2.67-5.33-4-8-4m0 1.9c2.97 0 6.1 1.46 6.1 2.1v1.1H8.9V17c0-.64 3.1-2.1 6.1-2.1" />
          </svg>
          Cadastrar cliente
        </Link>
        <button onClick={toggleModalRouteGPS} className="font-medium hover:bg-blue-600 hover:text-white text-blue-600 dark:text-blue-500 hover:underline flex float-right mt-6 items-center mr-6 border border-blue-600 rounded-md p-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="24" height="24" viewBox="0 0 32 32">
            <path fill="currentColor" d="m16 24l-6.09-8.6A8.14 8.14 0 0 1 16 2a8.08 8.08 0 0 1 8 8.13a8.2 8.2 0 0 1-1.8 5.13Zm0-20a6.07 6.07 0 0 0-6 6.13a6.19 6.19 0 0 0 1.49 4L16 20.52L20.63 14A6.24 6.24 0 0 0 22 10.13A6.07 6.07 0 0 0 16 4" /><circle cx="16" cy="9" r="2" fill="currentColor" />
            <path fill="currentColor" d="M28 12h-2v2h2v14H4V14h2v-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2" />
          </svg>
          Calcular rotas
        </button>
      </div>
      {isShowModalRouteGPS && <ModalRouteGPS rankingClients={data} onClose={toggleModalRouteGPS} />}

    </div>
  )
}
