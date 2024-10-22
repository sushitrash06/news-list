
import ArchivePage from "../components/organism/archive-page";
import DefaultLayout from "../defaultLayout";

const Archive: React.FC = () => {
  const seo = {
    title: "Archive List",
    description: "This is the Archive description",
  };

  return (
    <DefaultLayout seo={seo}>
      <main>
        <ArchivePage/>
        </main>
    </DefaultLayout>
  );
};

export default Archive;
