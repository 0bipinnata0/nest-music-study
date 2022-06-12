import GradientLayout from "@/components/GradientLayout";
import type { GetServerSideProps, NextPage } from "next";
import { Artist } from "@prisma/client";
import prisma from "@/lib/prisma";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const artists = await prisma.artist.findMany({});
  return {
    props: { artists: JSON.parse(JSON.stringify(artists)) },
  };
};

const Home: NextPage<{ artists: Artist[] }> = ({ artists }) => {
  return (
    <GradientLayout
      roundImage
      color="green"
      subtitle="profile"
      title="hello kitty"
      description="10 test page"
      image="https://dl.dropboxusercontent.com/s/bgiv0ssz3xpotz9/peep.png?dl=0"
    >
      <Box color="white" paddingX="40px">
        <Box marginBottom="40px">
          <Text fontSize="2xl" fontWeight="bold">
            Top artist this month
          </Text>
          <Text fontSize="md">only visible to you</Text>
        </Box>
        <Flex>
          {artists.map((artist) => (
            <Box paddingX="10px" width="20%" key={artist.id}>
              <Box bg="gray.900" borderRadius="4px" padding="15px" width="100%">
                <Image
                  src="https://placekitten.com/300/300"
                  borderRadius="100%"
                />
                <Box marginTop="20px">
                  <Text fontSize="large">{artist.name}</Text>
                  <Text fontSize="x-small">Artist</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  );
};

export default Home;
