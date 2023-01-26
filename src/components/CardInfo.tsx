import { Box, Text } from "@chakra-ui/react";
import { MouseEventHandler } from "react";

interface ICardInfo {
    mainContent: string,
    content: string,
    onClick?: MouseEventHandler
}

const CardInfo = ({ mainContent, content, onClick }: ICardInfo) => {
  return (
    <Box 
        onClick={onClick}
        backgroundColor="white" 
        minHeight="120px" 
        padding={8}
        borderRadius="25px"
        cursor={onClick?'pointer':'cursor'}
        title={onClick?'Clique para informações da conta':''}//isso vai ter que sair dai um dia 
    >
        <Text fontSize='2xl' fontWeight='bold'>
            { mainContent }
        </Text>
        <Text fontSize='xl'>
            { content }
        </Text>
    </Box>
  );
};

export default CardInfo;
