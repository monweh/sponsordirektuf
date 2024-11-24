'use client';

import { FilloutStandardEmbed } from "@fillout/react";
import "@fillout/react/style.css"

export default function Page() {
    return (
        <div>
            <div className="fillout-form-space"></div>
            <div className="fillout-form md:w-100 h-fit">
                <FilloutStandardEmbed filloutId="oDn58WYqz5us" dynamicResize/>
            </div>
        </div>
    );
}