import { Container, Flex, Box } from "@chakra-ui/react";
import FeedPosts from "../../components/FeedPosts/FeedPosts";

const HomePage = () => {
    return (
        <Container maxW={"container.lg"}>
            <Flex gap={20} >
                <Box flex={2} py={10} border={"1px solid blue"}>
                    <FeedPosts />
                </Box>
                <Box
                    flex={1}
                    mr={20}
                    display={{ base: "none", lg: "block" }}
                    maxW={"300px"}
                    border={"1px solid red"}
                >
                    Suggested
                </Box>
            </Flex>
        </Container>
    );
};

export default HomePage;
