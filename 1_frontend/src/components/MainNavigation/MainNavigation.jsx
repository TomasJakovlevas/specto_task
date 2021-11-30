import React from 'react';
import IconNav from './IconNav/IconNav';

// Style
import { StyledNavigation } from './MainNavigation.styled';

// Icons
import ProfileIcon from '../../common/svg/mainNavigation/ProfileIcon.svg';
import OfficeIcon from '../../common/svg/mainNavigation/OfficeIcon.svg';
import PrinterIcon from '../../common/svg/mainNavigation/PrinterIcon.svg';
import IdeaIcon from '../../common/svg/mainNavigation/IdeaIcon.svg';
import ComputerIcon from '../../common/svg/mainNavigation/ComputerIcon.svg';
import BackIcon from '../../common/svg/mainNavigation/BackIcon.svg';

const MainNavigation = () => {
  return (
    <StyledNavigation>
      <IconNav tooltip='Naujas klientas' icon={ProfileIcon} />
      <IconNav tooltip='Nauja įmonė' icon={OfficeIcon} />
      <IconNav tooltip='Naujas laiškas' icon={PrinterIcon} />
      <IconNav tooltip='Nauja idėja' icon={IdeaIcon} />
      <IconNav tooltip='Naujas adminas' icon={ComputerIcon} />
      <IconNav tooltip='Grįžtį' icon={BackIcon} />
    </StyledNavigation>
  );
};

export default MainNavigation;
