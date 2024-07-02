import { Avatar, Box, Flex, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {
    CreatePostLogo,
    InstagramLogo,
    InstagramMobileLogo,
    NotificationsLogo,
    SearchLogo,
} from "../../assets/constants";
import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";

const Sidebar = () => {
    const sidebarItems = [
        {
            icon: <AiFillHome size={25} />,
            text: "Home",
            link: "/",
        },
        {
            icon: <SearchLogo />,
            text: "Search",
        },
        {
            icon: <NotificationsLogo />,
            text: "Notification",
        },
        {
            icon: <CreatePostLogo />,
            text: "Create",
        },
        {
            icon: (
                <Avatar size={"sm"} name="Soumya Panda" src="/profilepic.png" />
            ),
            text: "Profile",
            link: "/asaprogrammer",
        },
    ];
    return (
        <Box
            height={"100vh"}
            borderRight={"1px solid"}
            borderColor={"whiteAlpha.300"}
            py={8}
            position={"sticky"}
            top={0}
            left={0}
            px={{ base: 2, md: 4 }}
        >
            <Flex direction={"column"} gap={10} w={"full"} height={"full"}>
                <Link
                    to={"/"}
                    as={RouterLink}
                    p={2}
                    h={10}
                    display={{ base: "none", md: "block" }}
                    cursor={"pointer"}
                >
                    <InstagramLogo />
                </Link>
                <Link
                    to={"/"}
                    as={RouterLink}
                    p={2}
                    display={{ base: "block", md: "none" }}
                    cursor={"pointer"}
                    _hover={{ bg: "whiteAlpha.300" }}
                    h={10}
                    w={10}
                    borderRadius={6}
                >
                    <InstagramMobileLogo />
                </Link>
                <Flex direction={"column"} gap={5} cursor={"pointer"}>
                    {sidebarItems.map((item, index) => {
                        return (
                            <Tooltip
                                hasArrow
                                label={item.text}
                                placement="right"
                                ml={1}
                                openDelay={200}
                                display={{ base: "block", md: "none" }}
                            >
                                <Link
                                    as={RouterLink}
                                    display={"flex"}
                                    to={item.link || "#"}
                                    alignItems={"center"}
                                    gap={4}
                                    _hover={{ bg: "whiteAlpha.400" }}
                                    borderRadius={6}
                                    p={2}
                                    w={{ base: 10, md: "full" }}
                                    justifyContent={{
                                        base: "center",
                                        md: "flex-start",
                                    }}
                                >
                                    {item.icon}
                                    <Box
                                        display={{ base: "none", md: "block" }}
                                    >
                                        {item.text}
                                    </Box>
                                </Link>
                            </Tooltip>
                        );
                    })}
                </Flex>
                <Tooltip
                    hasArrow
                    label="Logout"
                    placement="right"
                    ml={1}
                    openDelay={200}
                    display={{ base: "block", md: "none" }}
                >
                    <Link
                        marginTop={"auto"}
                        as={RouterLink}
                        display={"flex"}
                        to={'/auth'}
                        alignItems={"center"}
                        gap={4}
                        _hover={{ bg: "whiteAlpha.400" }}
                        borderRadius={6}
                        p={2}
                        w={{ base: 10, md: "full" }}
                        justifyContent={{ base: "center", md: "flex-start" }}
                    >
                        <BiLogOut size={25}/>
                        <Box display={{ base: "none", md: "block" }}>
                            Logout
                        </Box>
                    </Link>
                </Tooltip>
            </Flex>
        </Box>
    );
};
export default Sidebar;
