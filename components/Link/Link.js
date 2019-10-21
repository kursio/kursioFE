/** @jsx jsx */
import { jsx } from '@emotion/core';
import Text from 'components/Text/Text';

const Link = ({ children, ...props }) => (
  <a css={{ cursor: 'pointer', ...props }}>
    <Text>{children}</Text>
  </a>
);

export default Link;