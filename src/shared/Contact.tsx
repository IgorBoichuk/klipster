import Image from "next/image";
import Link from "next/link";
import React from "react";
import phone from "../../public/svg/phone.svg";
import viber from "../../public/svg/viber.svg";
import telegram from "../../public/svg/telegram.svg";
import email from "../../public/svg/email.svg";

function Contact() {
  return (
    <div className="flex flex-col">
      <h2 className="text-xl font-medium mb-6">
        Ви можете звʼязатись з нами за цими даними
      </h2>

      <ul className="flex flex-col gap-2 mb-6">
        <li className="flex gap-4">
          <Image
            src={phone}
            width={40}
            alt="phone link"
            className="fill-black"
          ></Image>
          <Link
            href="tel:+380930392656"
            className="text-slate-900 font-normal text-lg"
          >
            tel:+380930392656
          </Link>
        </li>
        <li className="flex gap-4">
          <Image
            src={viber}
            width={40}
            alt="phone link"
            className="fill-black"
          ></Image>
          <Link
            href="tel:+380930392656"
            className="text-slate-900 font-normal text-lg"
          >
            tel:+380930392656
          </Link>
        </li>
        <li className="flex gap-4">
          <Image
            src={telegram}
            width={40}
            alt="phone link"
            className="fill-black"
          ></Image>
          <Link
            href="tel:+380930392656"
            className="text-slate-900 font-normal text-lg"
          >
            tel:+380930392656
          </Link>
        </li>
        <li className="flex gap-4">
          <Image
            src={email}
            width={40}
            alt="phone link"
            className="fill-black"
          ></Image>
          <Link
            href="klipster@gmail.com"
            className="text-slate-900 font-normal text-lg"
          >
            klipster@gmail.com
          </Link>
        </li>
      </ul>

      <button className="add-to-cart cursor-pointer rounded-xl bg-amber-300 h-11 w-11/12 m-auto font-medium text-xl">
        Категорії
      </button>
    </div>
  );
}

export default Contact;
