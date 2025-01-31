function NavLink() {
  const navItems = [
    { name: "Home", href: "#" },
    { name: "Team", href: "#" },
    { name: "Feature", href: "#" },
    { name: "Blog", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Source", href: "#" },
  ];

  return (
    <>
      {navItems.map((item, index) => (
        <li key={index} className="max-lg:border-b max-lg:py-3 px-3">
          <a
            href={item.href}
            className="hover:text-[#007bff] text-[#fff] block font-bold text-[15px]"
          >
            {item.name}
          </a>
        </li>
      ))}
    </>
  );
}

export default NavLink;
