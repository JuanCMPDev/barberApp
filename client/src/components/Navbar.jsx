'use client';

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button
} from "@nextui-org/react";
import Link from "next/link";
import { useSession } from "../context/AuthContext";

const NavbarComponent = () => {
  const { currentUser, logout } = useSession();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Sobre nosotros', href: '/about' },
    { label: 'Reserva', href: '/citas' }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div>
      <Navbar position="static" className="bg-black text-white py-2">
        <NavbarBrand>
          <img
            src="/logo.png"
            className="relative h-20 w-20 my-5 cursor-pointer"
          />
          <p className="font-bold text-inherit text-lg cursor-pointer">BarberApp</p>
        </NavbarBrand>
        <NavbarContent className="hidden md:flex gap-4" justify="center">
          {navItems.map(item => (
            <NavbarItem key={item.label}>
              <Link color="foreground" href={item.href}>
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          {currentUser && currentUser.name ? (
            <>
              <NavbarItem className="hidden md:flex">
                <Link href="/perfil" className="mr-4">
                  {currentUser.name}
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Button
                  className="px-3 bg-[#f59e0b] text-[#fde68a] border-[#f59e0b] hover:!bg-[#ffcc40] hover:!text-[#f5900b] hidden md:flex"
                  color="primary"
                  variant="ghost"
                  radius="sm"
                  onClick={handleLogout}
                >
                  Cerrar Sesión
                </Button>
              </NavbarItem>
            </>
          ) : (
            <>
              <NavbarItem className="hidden md:flex">
                <Link href="/login">Ingresa</Link>
              </NavbarItem>
              <NavbarItem>
                <Button
                  className="px-3 bg-[#f59e0b] text-[#fde68a] border-[#f59e0b] hover:!bg-[#ffcc40] hover:!text-[#f5900b] hidden md:flex"
                  as={Link}
                  color="primary"
                  href="/registro"
                  variant="ghost"
                  radius="sm"
                >
                  Registrate
                </Button>
              </NavbarItem>
            </>
          )}
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden"
            onClick={toggleMenu}
          />
        </NavbarContent>
        <NavbarMenu isOpen={isMenuOpen} onClose={toggleMenu} className="flex md:hidden mt-3 gap-3 items-start text-center">
          <div className={`bg-black text-white absolute top-0 right-0 h-full w-1/2 sm:w-1/3 transition-width duration-300`}>
            {navItems.map(item => (
              <NavbarMenuItem key={item.label}>
                <Link className="block p-4" color="foreground" href={item.href} onClick={toggleMenu}>
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
            {currentUser && currentUser.name ? (
              <>
                <NavbarMenuItem className="p-4">
                  <Link href="/perfil" className="block p-4" onClick={toggleMenu}>
                    {currentUser.name}
                  </Link>
                </NavbarMenuItem>
                <NavbarMenuItem className="p-4">
                  <Button
                    className="w-[60%] text-lg bg-[#f59e0b] text-[#fde68a] border-[#f59e0b] hover:bg-[#ffcc40] hover:text-[#f5900b]"
                    color="primary"
                    variant="ghost"
                    radius="sm"
                    onClick={() => {
                      handleLogout();
                      toggleMenu();
                    }}
                  >
                    Logout
                  </Button>
                </NavbarMenuItem>
              </>
            ) : (
              <>
                <NavbarMenuItem>
                  <Link className="block p-4" href="/login" onClick={toggleMenu}>Ingresa</Link>
                </NavbarMenuItem>
                <NavbarMenuItem className="p-4">
                  <Button
                    className="w-[60%] text-lg bg-[#f59e0b] text-[#fde68a] border-[#f59e0b] hover:bg-[#ffcc40] hover:text-[#f5900b]"
                    as={Link}
                    color="primary"
                    href="/registro"
                    variant="ghost"
                    radius="sm"
                    onClick={toggleMenu}
                  >
                    Registrate
                  </Button>
                </NavbarMenuItem>
              </>
            )}
          </div>
        </NavbarMenu>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
