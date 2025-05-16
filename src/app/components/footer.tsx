'use client';
import React from "react";

const FooterComponent = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <p className={'text-center my-4'}> © {currentYear} Victor Dang. All Rights Reserved. </p>
        </>
    )
}

export default FooterComponent;