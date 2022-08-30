import CookieConsent from "react-cookie-consent";
import { useToast } from '@chakra-ui/react';

const CookieBanner: React.FC = () => { 

   const toast = useToast()
   
   return (
      <CookieConsent 
      enableDeclineButton
      onDecline = {
         () => {
            toast({
               title: 'Ouch!',
               description: "Cookie rifiutati con successo",
               status: 'success',
               duration: 6000,
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
               duration: 6000,
               isClosable: true,
             })
         }
      }
      style = {{ background: "#111413" }}
      buttonStyle = {{ background: "#2F855A", color: "white" }}
      declineButtonText	= "Rifiuta i cookies"
      buttonText = "Ok, capito!"
   >
      Questo sito utilizza i cookie per rendere l'esperienza di navigazione più accessibile.
   </CookieConsent>
   )
}

export default CookieBanner