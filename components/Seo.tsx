import Head from "next/head";
import websiteConfig from '../lib/config/website';
import { useRouter } from 'next/router';

export interface Seo {
   title: string,
   description: string,
   ogImage: string,
}

const Seo: React.FC<Seo> = ({ title, description, ogImage }) => {

  const path = useRouter().pathname;
  
  return (
    <>
      <Head>
        {/* main meta */}
        <title>
          {path === "/" ? title : `${websiteConfig.meta.title}  - ${title}`}
        </title>
        <meta name="description" content={description} />
        <link rel="icon" href={websiteConfig.meta.favicon} />
        <meta name="image" content={ogImage} />
        <meta name="image:alt" content={description} />
        <meta name="keywords" content={websiteConfig.meta.keywords} />

        {/* Facebook meta */}
        <meta 
          property="og:title" 
          content={path === "/" ? title : `${websiteConfig.meta.title}  - ${title}`}
        />
        <meta property="og:url" content={path} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content={description}></meta>

        {/* Twitter meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta 
          name="twitter:title" 
          content={path === "/" ? title : `${websiteConfig.meta.title}  - ${title}`}
        />
        <meta name="twitter:url" content={path} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content={description}></meta>
      </Head>
    </>
  )
 }
 
 export default Seo;