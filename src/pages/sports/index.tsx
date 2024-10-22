
import ListArticle from "../components/organism/list-article";
import DefaultLayout from "../defaultLayout";

const Sports: React.FC = () => {
  const seo = {
    title: "Sports Article",
    description: "This is the Sports Article description",
  };

  return (
    <DefaultLayout seo={seo}>
      <main>
        <ListArticle/>
        </main>
    </DefaultLayout>
  );
};

export default Sports;
