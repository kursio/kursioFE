/** @jsx jsx */
import { jsx } from '@emotion/core';
import { colors, weights } from 'style';

const Text = ({ children, margin = '0', ...props }) => (
  <p css={{ margin, ...props }}>{children}</p>
);

export default Text;