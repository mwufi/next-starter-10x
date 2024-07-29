import { createUploadthing, type FileRouter } from "uploadthing/next"
import { UploadThingError } from "uploadthing/server"

// fake auth!
const auth = (req: Request) => ({ id: "fakeId" })

const f = createUploadthing()

export const ourFileRouter: FileRouter = {
    // deefine as many routes as you want, each with a unique slug?
    imageUploader: f({ image: { maxFileSize: "4MB" } }).middleware(
        async ({ req }) => {
            const user = await auth(req)

            // If the user is not authenticated, throw an error
            if (!user) throw new UploadThingError("Unauthorized")

            return { userId: user.id }
        }
    ).onUploadComplete(async ({ metadata, file }) => {
        console.log("Upload complete for", metadata)
        console.log("file url", file.url)

        return { uploadedBy: metadata.userId }
    })
}
export type OurFileRouter = typeof ourFileRouter