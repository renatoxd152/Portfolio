import { Box, Button, Flex, Heading, Image, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
export const Projetos = () => {
  const [selectedProjeto, setSelectedProjeto] = useState(null);

  const skillImages = [
    { id: 1, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
    { id: 2, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" },
    { id: 3, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" },
    { id: 4, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { id: 5, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" },
    { id: 6, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" },
  ];

  const projetos = [
    { 
      id: 1, 
      url: process.env.PUBLIC_URL + "/loja.png", 
      descricao: "Projeto de gerenciamento de lojas",
      detalhamento: "Esse projeto tem como objetivo gerenciar uma loja de vendas sendo possível cadastrar os clientes, produtos e compras. Além disso, é possível cadastrar os produtos com um scanner o que torna o cadastro de compras muito mais versátil. Nesse sistema, também possui uma aba de relatórios que pode ser muito útil para o melhor gerenciamento de uma loja. Ademais, possui um sistema de autenticação utilizando JWT e rotas protegendo o sistema.",
      siteUrl: "https://example.com/loja",
      link:"https://github.com/renatoxd152/Projeto_PRJ",
      imagens:[
        {id:1,link:process.env.PUBLIC_URL + "/loja/compras_cadastrar.png"},
        {id:2,link:process.env.PUBLIC_URL + "/loja/compras.png"},
        {id:3,link:process.env.PUBLIC_URL + "/loja/login.png"},
        {id:4,link:process.env.PUBLIC_URL + "/loja/relatorios.png"},
      ],
      linguagens:[2,3,5]
    },
    {
      id: 2, 
      url: process.env.PUBLIC_URL + "/sorvete.png", 
      descricao: "Projeto de gerenciamento para sorveterias",
      detalhamento: "Esse projeto tem como objetivo cadastrar sorvetes, clientes, vendedores e compras. Além disso, possui como sistema de autenticação utilizando JWT e rotas para proteger o sistema.",
      siteUrl: "https://example.com/sorvete",
      link:"https://github.com/renatoxd152/Sorveteria_NodeJs",
      imagens:[
        {id:1,link:process.env.PUBLIC_URL + "/sorveteria/cadastro.png"},
        {id:2,link:process.env.PUBLIC_URL + "/sorveteria/compra.png"},
        {id:3,link:process.env.PUBLIC_URL + "/sorveteria/listagem.png"},
        {id:4,link:process.env.PUBLIC_URL + "/sorveteria/login.png"},
      ],
      linguagens:[2,3,5]
    }
  ];

  const renderIconesLinguagens = (linguagens) => {
    return linguagens.map((id) => {
      const icon = skillImages.find((skill) => skill.id === id);
      if (icon) {
        return (
          <motion.div
          key={selectedProjeto.id}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          >
              <Image
            key={icon.id}
            src={icon.src}
            alt={`Icone ${icon.id}`}
            height="10vh"
            width="10vw"
            mx={2}
            cursor="pointer"
          />
         </motion.div>
        );
      }
      return null;
    });
  };

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
        <Modal isOpen={true} onClose={() => setSelectedProjeto(null)} size="x1"> 
          <ModalOverlay />
          <ModalContent  mx="16">
            <ModalHeader><Heading as="h2" size="2x1">{selectedProjeto.descricao}</Heading></ModalHeader>
            <ModalCloseButton _hover={{ bg: 'red.500',color:"white"}} />
            <ModalBody>
            <SimpleGrid columns={2} spacing={4}>
                {selectedProjeto.imagens.map((imagem) => (
                  <Image
                    key={imagem.id}
                    src={imagem.link}
                    alt={`Imagem ${imagem.id}`}
                    borderRadius="md"
                    width="100%"
                  />
                ))}
              </SimpleGrid>
              <Heading mb={4} as="h4" size="md">{selectedProjeto.detalhamento}</Heading>
              <Heading as="h3"
              size="lg"
              bgGradient="linear(to-r, green.400, blue.400)"
              bgClip="text"
              textAlign="left"
              fontWeight="bold"
              >Tecnologias utilizadas</Heading>
              <Flex
                display="flex"
                justifyContent="center"
                alignItems="center"
                backgroundColor="rgba(255, 255, 255, 0.3)"
                p={4}
                borderRadius="md"
                boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
              >
                {renderIconesLinguagens(selectedProjeto.linguagens)}
              
              </Flex>
              <Flex justify="space-between">
                <Button colorScheme="red"><Link href={selectedProjeto.siteUrl}  _hover={{ textDecoration: "none" }} isExternal color="white" textDecoration="none">
                  Visite o Site
                </Link></Button>
                
                <motion.div
                  key={selectedProjeto.id}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  >
                <Image
                  key={selectedProjeto.id}
                  boxSize="60px"
                  src={process.env.PUBLIC_URL + "/icones/github-logo.png"}
                  mx={2}
                  cursor="pointer"
                  onClick={() => window.open(selectedProjeto.link, '_blank')} />
                </motion.div>
              </Flex>
            </ModalBody>
            <ModalFooter>
              
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Flex>
  );
};
