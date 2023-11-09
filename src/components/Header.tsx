import Link from "next/link";
import { Grip } from "lucide-react";

export function Header() {
  return (
    <nav className="flex items-center justify-between text-sm p-5">
      <div className="flex space-x-3">
        <Link href="/about">About</Link>
        <Link
          href="https://store.google.com"
          target="_blank"
          className="hover:underline"
        >
          Store
        </Link>
      </div>
      <div className="flex space-x-3 items-center">
        <Link
          href="https://mail.google.com"
          target="_blank"
          className="hover:underline"
        >
          Gmail
        </Link>
        <Link
          href="https://image.google.com"
          target="_blank"
          className="hover:underline"
        >
          Image
        </Link>
        <Grip className="w-6 h-6" />
        <Link
          href="/signin"
          className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:shadow-md transition-shadow"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
}
