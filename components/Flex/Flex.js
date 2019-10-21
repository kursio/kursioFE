/** @jsx jsx */
import { jsx } from '@emotion/core';

const Flex = ({ children, justifyContent = 'flex-start', alignItems = 'flex-start', ...props }) => {
  const FlexStyles = {
    display: 'flex',
    justifyContent,
    alignItems,
    ...props,
  };

  return (
    <div css={FlexStyles}>
      {children}
    </div>
  );
};

export default Flex;