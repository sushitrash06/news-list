
import ListArticle from "../components/organism/list-article";
import DefaultLayout from "../defaultLayout";

const BBCNews: React.FC = () => {
  const seo = {
    title: "BBC News",
    description: "This is the BBC News description",
  };

  return (
    <DefaultLayout seo={seo}>
      <main>
        <ListArticle />
        </main>
    </DefaultLayout>
  );
};

export default BBCNews;
