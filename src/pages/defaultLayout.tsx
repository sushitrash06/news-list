import { Layout } from "./components/layout/layout";
import Seo from "./seo";

interface SeoProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

interface DefaultLayoutProps {
  children: React.ReactNode;
  seo?: SeoProps;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children, seo }) => {
  return (
    <>
      <Seo
        title={seo?.title}
        description={seo?.description}
        keywords={seo?.keywords}
        image={seo?.image}
        url={seo?.url}
      />
      <div className="layout-container">
        <Layout>
        {children}
        </Layout>
      </div>
    </>
  );
};

export default DefaultLayout;
