import Link from "next/link";

export default function Page() {
    return <div>
        <h1 className="text-2xl font-bold mb-4">Demos</h1>
        <ul className="mt-4 space-y-4">
            <li>
                <Link href="/demos/uploadtest" className="block p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
                    <h2 className="text-lg font-semibold text-blue-600">Image Upload Demo</h2>
                    <p className="text-gray-600 mt-1">Explore our image upload functionality using UploadThing</p>
                </Link>
            </li>
            <li>
                <Link href="#" className="block p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
                    <h2 className="text-lg font-semibold text-green-600">Chat Demo</h2>
                    <p className="text-gray-600 mt-1">Experience our real-time chat application</p>
                </Link>
            </li>
            <li>
                <Link href="#" className="block p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
                    <h2 className="text-lg font-semibold text-purple-600">Data Visualization Demo</h2>
                    <p className="text-gray-600 mt-1">Interact with dynamic charts and graphs</p>
                </Link>
            </li>
        </ul>
    </div>
}