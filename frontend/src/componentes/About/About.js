import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Nav } from "../Nav/Nav";

export const About = () => {


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
    >
      <Nav />
      <Flex width="100%" flex="1" direction="row">
        <Flex
          direction="column"
          width="50%"
          p={4}
          justify="center"
          backgroundColor="rgba(0, 0, 0, 0.5)"
          borderRadius="md"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Heading
              as="h3"
              size="lg"
              bgGradient="linear(to-r, green.400, blue.400)"
              bgClip="text"
              textAlign="left"
              fontWeight="bold"
            >
              Olá! Meu nome é Renato Porto Morillo,
            </Heading>
            <Text mb={4}>
              sou um desenvolvedor web full stack apaixonado por criar soluções
              digitais inovadoras e eficientes. Com anos de experiência na área,
              tenho habilidade em todas as etapas do desenvolvimento web, desde a
              concepção inicial e design até a implementação e manutenção de
              aplicativos complexos.
            </Text>
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
          backgroundColor="rgba(255, 255, 255, 0.1)"
          p={4}
          borderRadius="md"
          boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)">
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image
                height="10vh"
                width="10vw"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
                mx={2}
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image
                height="10vh"
                width="10vw"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
                mx={2}
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image
                height="10vh"
                width="10vw"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
                mx={2}
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image
                height="10vh"
                width="10vw"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                mx={2}
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image
                height="10vh"
                width="10vw"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
                mx={2} 
              />
             
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image
                height="10vh"
                width="10vw"
                src=" https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"
                mx={2} 
              />
      
            </motion.div>
          </Flex>
        </Flex>
        <Flex
          direction="column"
          width="50%"
          p={4}
          justifyContent="center"
          alignItems="center"
          backgroundColor="rgba(0, 0, 0, 0.5)"
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
    </Flex>
  );
};

export default About;
