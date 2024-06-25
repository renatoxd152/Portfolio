import { Box, Flex, Link } from "@chakra-ui/react";

export const Nav = () => {
    return (
        <Flex
            bg="#1a0069"
            w="100%"
            minH="5vh"
            color="white"
            p={4}
            alignItems="center"
            boxShadow="md"
        >
            
            <Box display="flex" gap={4}>
                <Link
                    href="/about"
                    px={3}
                    py={2}
                    borderRadius="md"
                    _hover={{ textDecoration: "none", color: "gray.200", backgroundColor: "#39277d" }}
                    _activeLink={{ color: "gray.200", backgroundColor: "#39277d" }}
                >
                    Sobre Mim
                </Link>
                <Link
                    href="/projetos"
                    px={3}
                    py={2}
                    borderRadius="md"
                    _hover={{ textDecoration: "none", color: "gray.200", backgroundColor: "#39277d" }}
                    _activeLink={{ color: "gray.200", backgroundColor: "#39277d" }}
                >
                    Experiências
                </Link>
                <Link
                    href="/experiencias"
                    px={3}
                    py={2}
                    borderRadius="md"
                    _hover={{ textDecoration: "none", color: "gray.200", backgroundColor: "#39277d" }}
                    _activeLink={{ color: "gray.200", backgroundColor: "#39277d" }}
                >
                     Projetos
                </Link>
            </Box>
        </Flex>
    );
};
