'use client'

import {
    generateUploadButton,
    generateUploadDropzone,
} from "@uploadthing/react";

import type { OurFileRouter } from "@/app/api/uploadthing/core";
import { useState } from "react";

const UploadButton = generateUploadButton<OurFileRouter>();

const testImg = "https://utfs.io/f/016a19bd-ce35-445e-b09f-2f87a7548126-tny64.jpeg"

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
        {src ? <img src={src} alt="uploaded image" /> : upload}
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