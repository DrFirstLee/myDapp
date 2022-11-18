import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Link as ScrollLink } from "react-scroll";

const Header: FC = () => {
  const scrollLink = [
    { id: "story", name: "세계관" },
    { id: "roadMap", name: "로드맵" },
    { id: "team", name: "팀" },
  ];

  return (
    <Flex
      position="fixed"
      w="full"
      top={0}
      justifyContent="space-between"
      alignItems="center"
      px={8}
      py={2}
      shadow="md"
      zIndex={1}
      bgColor="gray.50"
    >
      <Box>
        {/* PLN 로고 이름 or 이미지 변경 */}
        <Text>ProjectLion NFT</Text>
      </Box>
      <Box>
        {scrollLink.map((v, i) => {
          return (
            <ScrollLink key={i} to={v.id} spy={true} smooth={true}>
              <Button mx={12} variant="ghost">
                {v.name}
              </Button>
            </ScrollLink>
          );
        })}
      </Box>
      <Flex>Wallet, MyPage</Flex>
    </Flex>
  );
};

export default Header;
