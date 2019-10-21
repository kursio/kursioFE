/** @jsx jsx */
import { jsx } from '@emotion/core';
import Flex from 'components/Flex/Flex';
import withLayout from 'components/Layout/Layout';

const Home = () => (
  <div>
    <Flex>
      <label>Search courses or topics</label>
    </Flex>
  </div>
)

export default withLayout(Home);
