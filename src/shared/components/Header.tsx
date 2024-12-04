//import React from 'react';

import Image from "next/image";
import Form from "next/form";
import { Container } from "../Container";
import Link from "next/link";
// import Logo from '../../../public/logo/logo.svg';
import Phone from "../../../public/svg/phone.svg";
import Find from "../../../public/svg/find.svg";
// import Login from '../../../public/svg/login.svg';
import User from "../../../public/svg/user.svg";
import Cart from "../../../public/svg/cartt.svg";
import { Burger } from "../Burger";
import { NavMenu } from "../NavMenu";
import { Logo } from "../Logo";

export const Header = () => {
  // const pathname = usePathname().split('/')[1]

  return (
    <header className="sticky top-0 z-[100] bg-cdark ">
      <Container>
        <div className="py-4 flex justify-between items-center">
          <Link
            href={"/"}
            className="relative block w-[102px] h-[46px] xl:w-[180px] xl:h-[80px] 2xl:w-[231px] 2xl:h-[103px]"
          >
            <Logo />
          </Link>
          <Form action="/search" className="relative w-1/2 h-8 xl:h-10">
            {/* On submission, the input value will be appended to 
          the URL, e.g. /search?query=abc */}
            <input
              name="query"
              placeholder="Пошук по артикулу"
              className="absolute hidden lg:block w-full px-2 h-8 xl:h-10 rounded-lg bg-cdark border-cdarkgray borer border-[1px] text-cwhite"
            />
            <button
              type="submit"
              className="absolute right-1 top-1/2 -translate-y-1/2 hidden lg:block h-7 w-7 xl:h-8 xl:w-8"
            >
              <Image src={Find} fill={true} alt="Find link"></Image>
            </button>
          </Form>
          <div className="flex gap-3">
            <Link
              href={"tel:${+380930392656}"}
              className="w-6 h-6 lg:w-8 lg:h-8"
            >
              <Image
                src={Phone}
                width={40}
                alt="phone link"
                className="fill-white"
              ></Image>
            </Link>
            <Link href={""} className="w-6 h-6 lg:w-8 lg:h-8 lg:hidden">
              <Image src={Find} width={40} alt="Find link"></Image>
            </Link>
            <button className="w-6 h-6 lg:w-8 lg:h-8">
              <Image src={User} width={40} alt="Login link"></Image>
            </button>
            <Link href={"/cart"} className="w-6 h-6 lg:w-8 lg:h-8">
              <Image src={Cart} width={40} alt="Login link"></Image>
            </Link>
            <Burger />
          </div>
        </div>
        <NavMenu header />
      </Container>
    </header>
  );
};
