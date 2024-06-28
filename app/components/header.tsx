import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="logo">
                    <Link href="/" className="pc_logo">
                        <img src="/logo_large.png" alt="" />
                    </Link>
                    <Link href="/" className="mo_logo">
                        <img src="/logo_small.png" alt="" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
