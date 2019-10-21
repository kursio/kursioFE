import React from 'react';
import { FiBell } from "react-icons/fi";
import Flex from 'components/Flex/Flex';
import Text from 'components/Text/Text';
import Link from 'components/Link/Link';
import Image from 'components/Image/Image';
import { colors, weights, sizes } from 'style';

const HeaderLink = ({ children }) => (
  <Link fontSize={sizes.size4} margin="0 15px" fontWeight={weights.semiBold}>{children}</Link>
);

const Header = ({  }) => (
  <Flex justifyContent="space-between" alignItems="center" height="70px" padding="0 10%">
    {/* logo */}
    <Flex>
      <HeaderLink>About</HeaderLink>
      <HeaderLink>Contact</HeaderLink>
      <HeaderLink>FAQs</HeaderLink>
    </Flex>
    <Flex alignItems="center">
      <Link marginRight="15px"><FiBell size={20} /></Link>
      <Link>
        <Image url="/static/img/logo-instagram.png" height="40px" width="40px" borderRadius="50%" />
      </Link>
    </Flex>
  </Flex>
);

export default Header;