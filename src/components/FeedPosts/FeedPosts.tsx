import {
    Box,
    Container,
    Flex,
    Skeleton,
    SkeletonCircle,
    VStack,
} from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import { useEffect, useState } from "react";

const FeedPosts = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    });
    return (
        <Container maxW={"container.sm"} py={8} px={2}>
            {isLoading &&
                [0, 1, 2, 3].map((_, idx) => {
                    return (
                        <VStack key={idx} my={10} gap={4} alignItems={"flex-start"}>
                            <Flex gap={2}>
                                <SkeletonCircle size={"10"} />
                                <VStack gap={2} alignItems={"flex-start"}>
                                    <Skeleton
                                        height={"10px"}
                                        w={"200px"}
                                    ></Skeleton>
                                    <Skeleton
                                        height={"10px"}
                                        w={"200px"}
                                    ></Skeleton>
                                </VStack>
                            </Flex>
                            <Skeleton w={"full"}>
                                <Box h={"500px"}>Contents wrapped</Box>
                            </Skeleton>
                        </VStack>
                    );
                })}
            {!isLoading && (
                <>
                    <FeedPost
                        img="/img1.png"
                        username="soumya panda1"
                        avatar="/img1.png"
                    />
                    <FeedPost
                        img="/img2.png"
                        username="soumya panda2"
                        avatar="/img2.png"
                    />
                    <FeedPost
                        img="/img3.png"
                        username="soumya panda3"
                        avatar="/img3.png"
                    />
                    <FeedPost
                        img="/img4.png"
                        username="soumya panda4"
                        avatar="/img4.png"
                    />
                </>
            )}
        </Container>
    );
};

export default FeedPosts;
