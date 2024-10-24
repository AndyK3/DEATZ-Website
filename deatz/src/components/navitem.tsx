import Link from 'next/link';

const NavItem = ({ href, name, onClick, dark }) => {
  return (
    <Link href={href}>
      <p onClick={onClick} className={`text-sm font-semibold ${dark ? "bg-white" : "bg-black"} bg-opacity-0 transition-all duration-200 hover:bg-opacity-20 px-6 rounded-full py-2`}>
        {name}
      </p>
    </Link>
  );
};

export default NavItem;