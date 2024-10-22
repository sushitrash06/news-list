
import ListArticle from "../components/organism/list-article";
import DefaultLayout from "../defaultLayout";

const Business: React.FC = () => {
  const seo = {
    title: "Business Article",
    description: "This is the Business Article description",
  };

  return (
    <DefaultLayout seo={seo}>
      <main>
        <ListArticle/>
        </main>
    </DefaultLayout>
  );
};

export default Business;
