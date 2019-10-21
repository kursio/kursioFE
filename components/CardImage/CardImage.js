import Flex from 'components/Flex/Flex';
import Image from 'components/Image/Image';
import Text from 'components/Text/Text';
import { weights, sizes, colors } from 'style';

const GrayText = ({ children }) => (
  <Text
    fontSize={sizes.size4}
    color={colors.gray}
    fontWeight={weights.light}
    marginTop="5px"
  >
    {children}
  </Text>
)

const CardImage = ({ image, title, subtitle, description }) => (
  <Flex flexDirection="column" maxWidth="200px">
    <Image url={image} width="100%" height="170px" />
    <Flex flexDirection="column" paddingRight="15px">
      <Text
        textTransform="uppercase"
        fontSize={sizes.size3}
        fontWeight={weights.bold}
        marginTop="15px"
      >
        {title}
      </Text>
      <GrayText>{subtitle}</GrayText>
      <GrayText>{description}</GrayText>
    </Flex>
  </Flex>
);

export default CardImage;