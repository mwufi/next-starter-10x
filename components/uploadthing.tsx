'use client'

import {
    generateUploadButton,
    generateUploadDropzone,
} from "@uploadthing/react";

import type { OurFileRouter } from "@/app/api/uploadthing/core";
import { useState } from "react";

const UploadButton = generateUploadButton<OurFileRouter>();

const defaultImg = "https://utfs.io/f/cf50a3ad-69c5-448e-86ac-e8aaab81b493-tny64.jpeg"

export function UploadComponent() {
    const [src, setSrc] = useState<string | null>(null);

    const upload = <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
            // Do something with the response
            console.log("Files: ", res);
            setSrc(res[0].url);
        }}
        onUploadError={(error: Error) => {
            // Do something with the error.
            alert(`ERROR! ${error.message}`);
        }}
    />

    return <div className="flex flex-col">
        {defaultImg && <div className="max-h-[300px] p-2">
            <img src={defaultImg} alt="uploaded image" />
        </div>}
        {src && <div className="max-h-[300px] p-2">
            <img src={src} alt="uploaded image" />
        </div>}
        <div className="flex gap-2"
        >
            Upload another image
            {upload}
        </div>
        <div className="flex gap-2">
            <p>Upload some text too</p>
            <UploadButton
                endpoint="textUploader"
                onClientUploadComplete={(res) => {
                    // Do something with the response
                    console.log("Files: ", res);
                }}
                onUploadError={(error: Error) => {
                    // Do something with the error.
                    alert(`ERROR! ${error.message}`);
                }}
            />
        </div>
        <div className="flex gap-2">
            <p>Upload some text too</p>
            <UploadDropzone
                endpoint="textUploader"
                onClientUploadComplete={(res) => {
                    // Do something with the response
                    console.log("Files: ", res);
                }}
                onUploadError={(error: Error) => {
                    // Do something with the error.
                    alert(`ERROR! ${error.message}`);
                }}
            />
        </div>
    </div>
}

export const UploadDropzone = generateUploadDropzone<OurFileRouter>();