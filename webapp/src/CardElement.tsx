import { Box, Heading, Text } from "@chakra-ui/react";

interface Props {
    heading: string;
    text: string;
}

const CardElement = (props: Props) => {
    const { heading, text } = props;
    return (
        <Box>
            <Heading size='xs' textTransform='uppercase'>
                {heading}
            </Heading>
            <Text pt='2' fontSize='sm'>
                {text}
            </Text>
        </Box>
    );

}

export default CardElement;
