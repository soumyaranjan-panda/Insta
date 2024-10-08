import { Avatar, Flex, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const SuggestedHeader = () => {
    return (
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
            <Flex alignItems={"center"} gap={2}>
                <Avatar
                    name="As a Programmer"
                    size={"md"}
                    src="/profilepic.png"
                />
                <Text fontSize={12} fontWeight={"bold"}>
                    Soumrnjn
                </Text>
            </Flex>
            <Link
                as={RouterLink}
                to={"/auth"}
                fontSize={14}
                fontWeight={"medium"}
                style={{ textDecoration: "none" }}
                color={"blue.400"}
                cursor={"pointer"}
                _hover={{color: "white"}}
            >
                Log out
            </Link>
        </Flex>
    );
};

export default SuggestedHeader;
