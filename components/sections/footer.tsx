import { ContactDrawer } from "../contact-drawer";
import { SocialDrawer } from "../social-drawer";

const Footer = () => {
    return ( 
        <div className="flex justify-between items-center bg-secondary/10 p-1.5 py-2">
            <div className="text-xs text-white/50 px-1 select-none">
                © AM//PM 2024
            </div>
            <div className="flex gap-x-2">
                <ContactDrawer />
                <SocialDrawer />
            </div>
        </div>
     );
}
 
export default Footer;