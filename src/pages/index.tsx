import EntertainmentNews from "./components/organism/entertaiment-news";
import NewsBBC from "./components/organism/top-bbc-news";
import NewsComponent from "./components/organism/top-headlines";
import DefaultLayout from "./defaultLayout";
import HealthInfo from "./components/organism/healty-info";

const Home: React.FC = () => {
  const seo = {
    title: "Home Page",
    description: "This is the home page description",
  };

  return (
    <DefaultLayout seo={seo}>
      <main>
        <div className="flex justify-between">
        <NewsComponent />
        <NewsBBC />
        </div>
        <div className="flex justify-between">
        <HealthInfo />
        <EntertainmentNews />
        </div>
      </main>
    </DefaultLayout>
  );
};

export default Home;
