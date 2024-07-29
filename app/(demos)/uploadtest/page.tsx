export default function Page() {
    // read UPLOADTHING_SECRET from env
    const secret = process.env.UPLOADTHING_SECRET;
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Upload Test</h1>
            <p><strong>UPLOADTHING_SECRET</strong>: {secret}</p>
        </div>
    )
}