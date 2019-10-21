import Flex from 'components/Flex/Flex';
import Text from 'components/Text/Text';
import CardImage from 'components/CardImage/CardImage';
import { weights, sizes } from 'style';

const HomeSection = ({ title, objects }) => (
  <Flex flexDirection="column" width="100%" margin="30px 0">
    <Text
      textTransform="uppercase"
      fontWeight={weights.bold}
      fontSize={sizes.size2}
      marginBottom="25px"
    >
      {title}
    </Text>
    <Flex justifyContent="space-between" width="100%">
      {objects.map((item) => (
        <CardImage
          image={item.image}
          title={item.title}
          subtitle={item.subtitle}
          description={item.description}
        />
      ))}
    </Flex>
  </Flex>
);

export default HomeSection