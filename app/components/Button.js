'use client'

import { useRouter } from "next/navigation";

const Button = ({path ,children}) => {
    const router= useRouter()
     const handleButton =()=>{
        router.push(path)
     }
    return (
        <button onClick={handleButton} className='px-3 py-2 bg-blue-500 mt-6 text-white'>
            {children}
        </button>
    );
};

export default Button;