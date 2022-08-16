import TopNav from '../navbars/TopNav'
import Footer from '../Footer'

interface Props {
   children: React.ReactNode;
}

export default function Layout({ children } : Props) {
   return(
      <>      
         <TopNav />
         {children}
         <Footer />
      </>
   )
}