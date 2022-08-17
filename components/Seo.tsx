import Head from "next/head";
import websiteConfig from '../lib/config/website';
import { useRouter } from 'next/router';

interface Seo {
   title: string,
   description: string,
   ogImage: string,
}

const Seo: React.FC<Seo> = ({ title, description, ogImage }) => {

  const path = useRouter().asPath;
  
  return (
    <>
      <Head>
        {/* main meta */}
        <title>
          {path === "/" ? title : `${websiteConfig.meta.title}  - ${title}`}
        </title>
        <meta name="description" content={description} key="desc" />
        <link rel="icon" href={websiteConfig.meta.favicon} />
        <meta name="image" content={websiteConfig.meta.url + ogImage} />
        <meta name="image:alt" content={description} />
        <meta name="keywords" content={websiteConfig.meta.keywords} />

        {/* Facebook meta */}
        <meta 
          property="og:title" 
          content={path === "/" ? title : `${websiteConfig.meta.title}  - ${title}`}
          key="fb title"
        />
        <meta property="og:url" content={websiteConfig.meta.url + path} />
        <meta property="og:description" content={description} key="fb desc" />
        <meta property="og:image" content={websiteConfig.meta.url + ogImage} />
        <meta property="og:image:alt" content={description}></meta>

        {/* Twitter meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta 
          name="twitter:title" 
          content={path === "/" ? title : `${websiteConfig.meta.title}  - ${title}`}
          key="tw title"
        />
        <meta name="twitter:url" content={websiteConfig.meta.url + path} />
        <meta name="twitter:description" content={description} key="tw desc" />
        <meta name="twitter:image" content={websiteConfig.meta.url + ogImage} key="tw image" />
        <meta name="twitter:image:alt" content={description} />
      </Head>
    </>
  )
 }
 
 export default Seo;