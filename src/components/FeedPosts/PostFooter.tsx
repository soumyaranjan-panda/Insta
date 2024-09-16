import {
    Flex,
    Box,
    Text,
    Image,
    InputGroup,
    Input,
    InputRightElement,
    Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { CommentLogo, HeartIcon } from "../../assets/constants";

import { useDoubleTap } from "use-double-tap";

const PostFooter = ({image, username}: { image: string, username: string}) => {
    const bind = useDoubleTap(() => {
        clickHandler();
        console.log("Double tapped");
    });
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(1000);
    const clickHandler = () => {
        setLiked(!liked);
        setLikes(liked ? likes - 1 : likes + 1);
    };
    return (
        <>
            <Box my={2} borderRadius={4} overflow={"hidden"}>
                <Image {...bind} src={image} />
            </Box>
            <Box mb={8}>
                <Flex
                    alignItems={"center"}
                    gap={4}
                    w={"full"}
                    pt={0}
                    mb={2}
                    mt={"4"}
                >
                    <Box
                        onClick={clickHandler}
                        cursor={"pointer"}
                        fontSize={18}
                    >
                        <HeartIcon liked={liked} />
                    </Box>
                    <Box cursor={"ponter"} fontSize={18}>
                        <CommentLogo />
                    </Box>
                </Flex>
                <Text fontWeight={600} fontSize={"sm"}>
                    {likes} likes
                </Text>
                <Text fontWeight={700} fontSize={"sm"}>
                    {username}{" "}
                    <Text as={"span"} fontWeight={400} fontSize={"sm"}>
                        Feeling good
                    </Text>
                </Text>
                <Text fontSize={"sm"} color={"gray"}>
                    View all 1,000 comments
                </Text>
                <Flex
                    alignItems={"center"}
                    gap={2}
                    justifyContent={"space-between"}
                    w={"full"}
                >
                    <InputGroup>
                        <Input
                            variant={"flushed"}
                            placeholder={"Add a comment..."}
                            fontSize={14}
                        />
                        <InputRightElement>
                            <Button
                                fontSize={14}
                                color={"blue.500"}
                                fontWeight={600}
                                cursor={"pointer"}
                                _hover={{ color: "white" }}
                                bg={"transparent"}
                            >
                                Post
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </Flex>
            </Box>
        </>
    );
};
export default PostFooter;
