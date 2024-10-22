import Head from 'next/head';

interface StructuredDataProps {
  data: object;
}

const StructuredData: React.FC<StructuredDataProps> = ({ data }) => {
  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Head>
  );
};

export default StructuredData;
