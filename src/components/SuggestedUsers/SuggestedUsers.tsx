import { Flex, VStack, Text, Box, Link } from "@chakra-ui/react"
import SuggestedHeader from "./SuggestedHeader"
import SuggestedUser from "./SuggestedUser"


const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader/>
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontWeight={"bold"} fontSize={12} color={"gray.400"}>
          Suggested for you
        </Text>
        <Text fontWeight={"bold"} fontSize={12} color={"gray.200"} cursor={"pointer"} _hover={{color: "gray.500"}}> 
          See All
        </Text>
      </Flex>
      <SuggestedUser name = "Soumyaranjan Panda" followers={1392} avatar={'https://bit.ly/dan-abramov'}/>
      <SuggestedUser name = "Soumyaranjan Panda" followers={1392} avatar={'https://bit.ly/dan-abramov'}/>
      <SuggestedUser name = "Soumyaranjan Panda" followers={1392} avatar={'https://bit.ly/dan-abramov'}/>
      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
				© 2023 Built By{" "}
				<Link href='https://github.com/soumyaranjan-panda' target='_blank' color='blue.500' textDecoration={"none"} _hover={{color: "blue.200"}} fontSize={14}>
					Soumyaranjan Panda
				</Link>
			</Box>
    </VStack>
  )
}

export default SuggestedUsers