import { Box, Button, Flex, Heading, Image, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, Text } from "@chakra-ui/react";
import { useState } from "react";

export const Projetos = () => {
  const [selectedProjeto, setSelectedProjeto] = useState(null);

  const projetos = [
    { 
      id: 1, 
      url: process.env.PUBLIC_URL + "/loja.png", 
      descricao: "Projeto de gerenciamento de lojas",
      detalhamento: "Detalhamento completo do projeto de gerenciamento de lojas...",
      siteUrl: "https://example.com/loja",
      githubUrl: "https://github.com/user/loja"
    },
    {
      id: 2, 
      url: process.env.PUBLIC_URL + "/sorvete.png", 
      descricao: "Projeto de gerenciamento para sorveterias",
      detalhamento: "Detalhamento completo do projeto de gerenciamento para sorveterias...",
      siteUrl: "https://example.com/sorvete",
      githubUrl: "https://github.com/user/sorvete"
    }
  ];

  const icones = [
    {id:1,url:process.env.PUBLIC_URL + "/linkedin.png"}
    ,
    
    {id:2,url:process.env.PUBLIC_URL + "/linkedin.png"}
    
  ]
  return (
    <Flex
      direction="column"
      align="center"
      backgroundColor="#002e15"
      flex="1"
      justify="flex-start"
      minH="100vh"
      backgroundImage={`url(${process.env.PUBLIC_URL + "/futuro_wallpaper.jpg"})`}
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
          as="h1"
          size="4xl"
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
            <Box
              key={projeto.id}
              p={4}
              boxShadow="lg"
              borderRadius="md"
              transition="transform 0.3s, box-shadow 0.3s"
              cursor="pointer"
              _hover={{ transform: "scale(1.05)", boxShadow: "2xl" }}
              height="15vh"
              width="15vw"
              bg="transparent"
              onClick={() => setSelectedProjeto(projeto)}
            >
              <Image
                src={projeto.url}
                alt={`Projeto ${projeto.id}`}
                borderRadius="md"
                mb={4}
                width="100%"
              />
              <Text
                fontSize="lg"
                fontWeight="bold"
                textAlign="center"
                color="white"
                textShadow="1px 1px 2px rgba(0, 0, 0, 0.8)"
              >
                {projeto.descricao}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Flex>

      {selectedProjeto && (
        <Modal isOpen={true} onClose={() => setSelectedProjeto(null)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{selectedProjeto.descricao}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Image src={selectedProjeto.url} alt={`Projeto ${selectedProjeto.id}`} mb={4} />
              <Text mb={4}>{selectedProjeto.detalhamento}</Text>
              <Flex justify="space-between">
                <Link href={selectedProjeto.siteUrl} isExternal color="blue.500">
                  Visite o Site
                </Link>
                <Link href={selectedProjeto.githubUrl} isExternal color="blue.500">
                  GitHub
                </Link>
              </Flex>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={() => setSelectedProjeto(null)}>
                Fechar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Flex>
  );
};
