/** @jsx jsx */
import { jsx } from '@emotion/core';
import { colors, weights } from 'style';

const Text = ({ children, ...props }) => (
  <p css={{ ...props }}>{children}</p>
);

export default Text;