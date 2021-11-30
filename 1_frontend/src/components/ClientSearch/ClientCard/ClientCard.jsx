import React from 'react';

// Style
import {
  ClientContainer,
  ClientInfoDiv,
  ClientImportantInfoDiv,
  InfoIconContainer,
  InfoIconDiv,
  ClientInfoWrapper,
  ClientInfoCategoriesWrapper,
  ClientInfoCategories,
} from './ClientCard.styled';

// Icons
import InfoIcon from '../../../common/svg/info/InfoIcon.svg';

const ClientCard = ({ client }) => {
  return (
    <ClientContainer>
      <h2>
        {client.name} {client.lastName}
      </h2>
      <ClientInfoDiv>
        <ClientInfoWrapper>
          <p>Svarbi informacija</p>
          <ClientImportantInfoDiv>
            <p>
              Neatvyko po užsakymo patvirtinimo:{' '}
              <span>{client.missedMeetings}</span> kartai
            </p>
            <InfoIconContainer>
              <InfoIconDiv>
                <img src={InfoIcon} alt='icon' />
              </InfoIconDiv>
              <InfoIconDiv>
                <img src={InfoIcon} alt='icon' />
              </InfoIconDiv>
            </InfoIconContainer>
          </ClientImportantInfoDiv>
        </ClientInfoWrapper>
        <ClientInfoCategoriesWrapper>
          <p>Kortelės</p>
          <ClientInfoCategories>
            <p>Bendra informacija</p>
            <p>Užsakymai</p>
            <p>Gydytojo įrašai</p>
            <p>Gydimo planai</p>
            <p>Nuotraukos</p>
            <p>Receptai</p>
            <p>Injekcijos</p>
            <p>TLK</p>
            <p>Svarbi informacija</p>
            <p>SMS nustatymai</p>
          </ClientInfoCategories>
        </ClientInfoCategoriesWrapper>
      </ClientInfoDiv>
    </ClientContainer>
  );
};

export default ClientCard;
