import Link from "next/link";

export default function Page() {
  const links = [
    {name:"Home", href: "/"},
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Invoices', href: '/dashboard/invoices' },
    { name: 'Customers', href: '/dashboard/customers' },
  ];

  return (
    <main className="min-h-screen p-6 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-col items-center justify-around gap-4">
          {links.map((link) => (
            <Link key={link.name} href={link.href} passHref className="w-full">
              <div className="flex h-12 items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium transition duration-300 hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:px-4 shadow-md">
                <p>{link.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
