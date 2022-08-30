import TopNav from '../navbars/TopNav';
import Footer from '../Footer';
import CookieConsent from "react-cookie-consent";
import { useToast } from '@chakra-ui/react';

interface Props {
   children: React.ReactNode;
}

export default function Layout({ children } : Props) {

   const toast = useToast()
   
   return(
      <>      
         <TopNav />
         {children}
         <Footer />
         <CookieConsent 
            enableDeclineButton
            onDecline = {
               () => {
                  toast({
                     title: 'Ouch!',
                     description: "Cookie rifiutati con successo",
                     status: 'success',
                     duration: 7000,
                     isClosable: true,
                   })
               }
            }
            onAccept = {
               () => {
                  toast({
                     title: 'Ottimo!',
                     description: "Hai accettato i cookies!",
                     status: 'success',
                     duration: 7000,
                     isClosable: true,
                   })
               }
            }
            style = {{ background: "#1d1d1d" }}
            buttonStyle = {{ background: "#2F855A", color: "white" }}
            declineButtonText	= "Rifiuta i cookies"
            buttonText = "Ok, capito!"
         >
            Questo sito utilizza i cookie per rendere l'esperienza di navigazione più accessibile.
         </CookieConsent>
      </>
   )
}