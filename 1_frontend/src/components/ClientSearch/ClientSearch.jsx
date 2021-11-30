import React, { useState, useEffect } from 'react';

// Style
import {
  StyledClientSearch,
  SearchDiv,
  StyledSearchInput,
  TableWrapper,
  LoadingDiv,
} from './ClientSearch.styled';

// Icons
import SearchIcon from '../../common/svg/search/SearchIcon.svg';
import CleanIcon from '../../common/svg/search/CleanIcon.svg';
import LoadingIcon from '../../common/svg/loading/LoadingIcon.svg';

// Components
import Button from '../Button/Button';
import ClientCard from './ClientCard/ClientCard';

// Clients
import { arrOfClients } from '../../common/clients/clients';
import Table from '../Table/Table';

const ClientSearch = () => {
  // Hooks
  // -- local
  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedClient, setSelectedClient] = useState();

  const [showClient, setShowClient] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  // -- side effect
  useEffect(() => {
    setClients(arrOfClients);
  }, []);

  useEffect(() => {
    let result = clients.filter((person) => {
      return person.name.toLowerCase().includes(search.toLowerCase());
    });
    setSearchResults(result);
  }, [search, clients]);

  // handling loading screen with timeout
  useEffect(() => {
    if (selectedClient) {
      setShowClient(false);
      setShowLoading(true);
      setTimeout(() => {
        setShowLoading(false);
        setShowClient(true);
      }, 1000);
    }
  }, [selectedClient]);

  // Funtions
  const handleChane = (e) => {
    setSearch(e.target.value);
  };

  const handleClientSelect = (id) => {
    const client = arrOfClients.find((client) => client.id === id);

    setSelectedClient(client);
  };

  return (
    <StyledClientSearch>
      <h2>Kliento Paieška</h2>
      <SearchDiv>
        <StyledSearchInput>
          <div>
            <img src={SearchIcon} alt='search' />
          </div>
          <input
            type='text'
            placeholder='Kliento paieška'
            value={search}
            onChange={handleChane}
          />
          <Button icon={CleanIcon} text='Valyti' action={() => setSearch('')} />
        </StyledSearchInput>
        <TableWrapper>
          <Table arrayOfClients={searchResults} action={handleClientSelect} />
        </TableWrapper>
      </SearchDiv>
      {showLoading && (
        <LoadingDiv>
          <p>Informacija kraunasi</p> <img src={LoadingIcon} alt='loading' />
        </LoadingDiv>
      )}
      {showClient && <ClientCard client={selectedClient} />}
    </StyledClientSearch>
  );
};

export default ClientSearch;
