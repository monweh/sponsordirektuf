'use client';

import { FilloutStandardEmbed } from "@fillout/react";
import "@fillout/react/style.css"

export default function Page() {
    return (
        <div>
            <div className="h-20"></div>
            <div className="w-100 h-fit">
                <FilloutStandardEmbed filloutId="e4FNFQKV71us" dynamicResize/>
            </div>
        </div>
    );
}