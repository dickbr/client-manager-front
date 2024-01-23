import { ChangeEvent, useState, useEffect } from 'react';
import Skeleton from "@app/components/Skeleton";
import ListClients from "@app/components/clients/List";
import { MenuItem, Select, TextField, styled } from '@mui/material';
import { ClientType } from '@app/types/clients';
import axios from 'axios';

const StyledDiv = styled('div')({
  display: 'flex',
  padding: '0.6rem',
  backgroundColor: '#f5f5f5',
  borderRadius: '4px',
});

export default function Page() {
  const [filters, setFilters] = useState<{ name?: string; email?: string; cellphone?: string; }>({});
  const [filterType, setFilterType] = useState<'name' | 'email' | 'cellphone'>('name');
  const [clients, setClients] = useState<ClientType[]>([]);

  useEffect(() => {
    axios.get<ClientType[]>(`${process.env.NEXT_PUBLIC_API_URL}/clients`, {
      params: { ...filters }
    }).then((res) => setClients(res.data))
  }, [filters, filterType])


  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilters({
      [filterType]: event.target.value
    });
  };

  const handleFilterTypeChange = (event: any) => {
    setFilterType(event.target.value as 'name' | 'email' | 'cellphone');
  };

  return (
    <>
      <div className="p-6 h-screen">
        <h1 className="text-2xl mb-4 text-white">Lista de clientes</h1>
        <StyledDiv>
          <Select value={filterType} onChange={handleFilterTypeChange} sx={{ marginRight: `5px` }}>
            <MenuItem value='name'>Nome</MenuItem>
            <MenuItem value='email'>E-mail</MenuItem>
            <MenuItem value='cellphone'>Telefone</MenuItem>
          </Select>
          <TextField
            label="Pesquisar"
            name={filterType}
            value={filters.name}
            onChange={handleFilterChange}
          />
        </StyledDiv>
        {<ListClients clients={clients} />}
      </div>
    </>
  );
}