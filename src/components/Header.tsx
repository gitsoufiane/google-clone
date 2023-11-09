import Link from "next/link";
export function Header() {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex space-x-3">
        <Link href="/about">About</Link>
        <Link href="/store">Store</Link>
      </div>
      <div className="flex space-x-3">
        <Link href="/gmail">Gmail</Link>
        <Link href="/image">Image</Link>
      </div>
    </nav>
  );
}
