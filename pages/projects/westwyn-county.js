import Head from 'next/head';
import WestWynCounty from '@/components/projects/WestWynCounty';

export default function WestWynCountyPage() {
  return (
    <>
      <Head>
        <title>WestWyn County – Premium Plots in Dholera</title>
        <meta name="description" content="WestWyn County offers NA/NOC-approved plots in Dholera Smart City. Immediate possession, trusted developer, gated community with modern amenities." />
        <link rel="canonical" href="https://dholeragujarat.in/projects/westwyn-county" />
      </Head>
      <WestWynCounty />
    </>
  );
}
