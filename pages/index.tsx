import GradientLayout from "@/components/GradientLayout";
import type { GetServerSideProps, NextPage } from "next";
import { Artist } from "@prisma/client";
import prisma from "@/lib/prisma";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const artists = await prisma.artist.findMany({});
  return {
    props: { artists: JSON.parse(JSON.stringify(artists)) },
  };
};

const Home: NextPage<{ artists: Artist[] }> = (props) => {
  return (
    <GradientLayout
      roundImage
      color="green"
      subtitle="profile"
      title="hello kitty"
      description="10 test page"
      image="https://dl.dropboxusercontent.com/s/bgiv0ssz3xpotz9/peep.png?dl=0"
    >
      <div>home</div>
    </GradientLayout>
  );
};

export default Home;
