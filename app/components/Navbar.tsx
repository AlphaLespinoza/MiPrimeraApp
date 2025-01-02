import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-500 text-white p-[20px] shadow-md mt-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-[25px] font-bold">
          <Link href="/">Mi Primera App</Link>
        </h1>
        <ul className="flex space-x-4 font-bold">
          <li>
            <Link href="/" className="hover:text-[blue]">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-[blue]">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
