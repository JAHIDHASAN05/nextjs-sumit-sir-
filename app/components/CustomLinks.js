'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const CustomLinks = ({path, children}) => {
    const pathName= usePathname()

    const isActiveLink= pathName===path
    return (
        <Link className={isActiveLink ? 'text-blue-500' :null} href={`${path}`}>{children}</Link>
    );
};

export default CustomLinks;