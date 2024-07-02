import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";

const PageLayout = ({ children }: { children: any }) => {
    const { pathname } = useLocation();
    return (
        <Flex>
            {pathname !== "/auth" ? (
                <Box w={{ base: "70px", md: "240px" }}>
                    <Sidebar />
                </Box>
            ) : null}
            <Box flex={1} w={{base:"calc(100% - 70px)",  md: "calc(100% - 240px"}} border={"1px solid white"}>{children}</Box>
        </Flex>
    );
};

export default PageLayout;
