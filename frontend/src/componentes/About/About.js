import { Flex, Heading, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Nav } from "../Nav/Nav";

export const About = () => {
  const skillImages = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg",
  ];

  const icones = [
    { id: 1, url: process.env.PUBLIC_URL + "/icones/gmail.png",link:"mailto:renatomorillo@gmail.com" },
    { id: 2, url: process.env.PUBLIC_URL + "/icones/linkedin.png", link:"https://www.linkedin.com/in/renato-morillo-b91a761b4/"},
    { id: 3, url: process.env.PUBLIC_URL + "/icones/whatsapp.png",link:"https://wa.me/5516997410581" },
    { id: 4, url: process.env.PUBLIC_URL + "/icones/github-logo.png",link:"https://github.com/renatoxd152" }
  ];

  return (
    <Flex
      direction="column"
      align="center"
      backgroundColor="#002e15"
      flex="1"
      justify="flex-start"
      minH="100vh"
      backgroundImage={`url(${process.env.PUBLIC_URL + "/futuro.gif"})`}
      backgroundSize="cover"
      backgroundPosition="center"
      color="white"
      position="relative"
    >
      <Nav />
      <Flex width="100%" flex="1" direction="row">
        <Flex
          direction="column"
          width="50%"
          p={4}
          justify="center"
          backgroundColor="rgba(0, 0, 0, 0.6)"
          borderRadius="md"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Heading as="h4"
              size="md"
              bgGradient="linear(to-r,  purple.400, blue.400)"
              bgClip="text"
              textAlign="left"
              fontWeight="bold">
              Olá! Meu nome é 
            </Heading>
            <Heading
              as="h3"
              size="lg"
              bgGradient="linear(to-r, green.400, blue.400)"
              bgClip="text"
              textAlign="left"
              fontWeight="bold"
            >
              Renato Porto Morillo,
            </Heading>
            <Heading as="h4"
              size="md"
              bgGradient="linear(to-r, purple.400, blue.400)"
              bgClip="text"
              textAlign="left"
              fontWeight="bold">
              sou um desenvolvedor web full stack que desenvolve soluções
              digitais inovadoras e eficientes. Com anos de experiência na área,
              tenho habilidade em todas as etapas do desenvolvimento web, desde a
              concepção inicial e design até a implementação e manutenção de
              aplicativos complexos.
            </Heading>
          </motion.div>
          <Heading
            as="h2"
            size="2xl"
            bgGradient="linear(to-r, green.400, blue.400)"
            bgClip="text"
            textAlign="left"
            fontWeight="bold"
          >
            Minhas habilidades
          </Heading>
          <Flex
            display="flex"
            justifyContent="center"
            alignItems="center"
            backgroundColor="rgba(255, 255, 255, 0.3)"
            p={4}
            borderRadius="md"
            boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
          >
            {skillImages.map((src, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image
                  height="10vh"
                  width="10vw"
                  src={src}
                  mx={2}
                  cursor="pointer"
                />
              </motion.div>
            ))}
          </Flex>
        </Flex>
        <Flex
          direction="column"
          width="50%"
          p={4}
          justifyContent="center"
          alignItems="center"
          backgroundColor="rgba(0, 0, 0, 0.6)"
          borderRadius="md"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Image
              boxSize="400px"
              borderRadius="full"
              src={process.env.PUBLIC_URL + "/programador.jpg"}
              mx="auto"
            />
          </motion.div>
        </Flex>
      </Flex>
    
      <Flex
        position="absolute"
        bottom={4}
        right={4}
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        gap={4}
        backgroundColor="rgba(255, 255, 255, 0.3)"
        p={4}
        borderRadius="md"
        boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
      >
        {icones.map((icone) => (

          <motion.div
          key={icone.id}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          >
          <Image
            key={icone.id}
            boxSize="60px"
            src={icone.url}
            mx={2}
            cursor="pointer"
            onClick={() => window.open(icone.link, '_blank')}
          />
          </motion.div>
                
        ))}

         
      </Flex>
    </Flex>
  );
};

export default About;
