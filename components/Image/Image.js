/** @jsx jsx */
import { jsx } from '@emotion/core';

const Image = ({ url, ...props }) => (
  <img src={url} css={props} />
);

export default Image;