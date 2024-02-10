import { ModeToggle } from "../mode-toggle";
import Image from "next/image";
import navLogo from '@/public/images/logo2.png'

const Navbar = () => {
    return ( 
        <div className="flex flex-row justify-between p-4 items-center bg-primary/30">
            <Image
                src={navLogo}
                width={100}
                height={100}
                alt="ampm logo"
            />
            <ModeToggle/>
        </div>
     );
}
 
export default Navbar;