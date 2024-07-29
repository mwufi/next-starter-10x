import React from 'react';
import Link from 'next/link';

const Navbar = () => (
    <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-white text-xl font-bold">
                Playground V0
            </Link>
            <ul className="flex space-x-4">
                <li>
                    <Link href="/demos" className="text-white hover:text-gray-300">
                        Demos
                    </Link>
                </li>
                <li>
                    <Link href="#" className="text-white hover:text-gray-300">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="#" className="text-white hover:text-gray-300">
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
);

export default function DemosLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto py-8">
                {children}
            </main>
        </div>
    );
}
