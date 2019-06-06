import Layout from "../components/layout";
import Landing from "../components/landing";
import sites from "../resources/sites";
import Sites from "../components/sites";

const Index = () => (
  <Layout>
    <Landing />
    <Sites items={sites} />
  </Layout>
);

export default Index;
