
import ListArticle from "../components/organism/list-article";
import DefaultLayout from "../defaultLayout";

const Health: React.FC = () => {
  const seo = {
    title: "Health Article",
    description: "This is the Health Article description",
  };

  return (
    <DefaultLayout seo={seo}>
      <main>
        <ListArticle />
        </main>
    </DefaultLayout>
  );
};

export default Health;
