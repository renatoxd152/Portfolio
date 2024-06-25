import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";

export const Projetos = () => {
  const projetos = [
    { id: 1, nome: "Projeto 1", descricao: "Descrição do Projeto 1" },
    { id: 2, nome: "Projeto 2", descricao: "Descrição do Projeto 2" },
    { id: 3, nome: "Projeto 3", descricao: "Descrição do Projeto 3" },
    { id: 4, nome: "Projeto 4", descricao: "Descrição do Projeto 4" },
  ];
  return (
    <Flex
      direction="column"
      align="center"
      backgroundColor="#002e15"
      flex="1"
      justify="flex-start"
      minH="100vh"
      backgroundImage={`url(${process.env.PUBLIC_URL + "/pizza.gif"})`}
      backgroundSize="cover"
      backgroundPosition="center"
      color="white"
    >
      <Flex
        direction="column"
        width="100%"
        p={4}
        justify="center"
        align="center"
        
        borderRadius="md"
      >
        
        <Heading
          as='h1'
          size='4xl'
          bgGradient="linear(to-r, green.400, blue.400)"
          bgClip="text"
          textAlign="center"
          fontWeight="bold"
          mb={4}
        >
          Projetos
        </Heading>
        
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8} width="100%">
          {projetos.map((projeto) => (
            <Box key={projeto.id} p={4} boxShadow="lg" bg="gray.800" borderRadius="md">
              <Heading as="h3" size="lg" mb={2}>
                {projeto.nome}
              </Heading>
              <Text>{projeto.descricao}</Text>
             
            </Box>
          ))}
        </SimpleGrid>
        
      </Flex>

      
    </Flex>
  );
};
