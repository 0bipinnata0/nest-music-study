import GradientLayout from "@/components/GradientLayout";
import type { NextPage } from "next";

const Home: NextPage = () => {
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
