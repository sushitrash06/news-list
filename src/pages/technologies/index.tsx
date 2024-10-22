
import ListArticle from "../components/organism/list-article";
import DefaultLayout from "../defaultLayout";

const Technologies: React.FC = () => {
  const seo = {
    title: "Technologies Article",
    description: "This is the Technologies Article description",
  };

  return (
    <DefaultLayout seo={seo}>
      <main>
        <ListArticle/>
        </main>
    </DefaultLayout>
  );
};

export default Technologies;
