'use client'
import Link from 'next/link';
import React from 'react';

const CustomLinks = ({path, children}) => {
    return (
        <Link href={`${path}`}>{children}</Link>
    );
};

export default CustomLinks;