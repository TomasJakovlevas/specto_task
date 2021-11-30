import React from 'react';

// Style
import { StyledTable } from './Table.styled';

const Table = ({ arrayOfClients, action }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Vardas</th>
          <th>Pavardė</th>
          <th>Miestas</th>
          <th>Kortelės NR</th>
          <th>Kliento ID</th>
          <th>Asmens kodas</th>
          <th>Gimes</th>
          <th>Telefono nr.1</th>
          <th>Telefono nr.2</th>
        </tr>
      </thead>
      <tbody>
        {arrayOfClients.map((client) => (
          <tr key={client.id} onClick={() => action(client.id)}>
            <td>{client.name}</td>
            <td>{client.lastName}</td>
            <td>{client.city}</td>
            <td>{client.cardId}</td>
            <td>{client.clientId}</td>
            <td>{client.personalId}</td>
            <td>{client.birth}</td>
            <td>{client.phoneNumberOne}</td>
            <td>{client.phoneNumberTwo}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
