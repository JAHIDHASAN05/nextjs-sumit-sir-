'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const CustomLinks = ({path, prefecth=true, children}) => {
    const pathName= usePathname()

    const isActiveLink= pathName===path
    return (
        <Link prefetch={prefecth} className={isActiveLink ? 'text-blue-500' :null} href={`${path}`}>{children}</Link>
    );
};

export default CustomLinks;