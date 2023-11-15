import Image from "next/image";
import Link from "next/link";

import LogoImg from "/public/logo.svg";
import SearchIcon from "/public/icon-search.svg";
import IconUser from "/public/icon-user.svg";
import { GridContainer } from "./grid";

const arrayMenu = [
  "Início",
  "Benefícios",
  "Para quem é o curso?",
  "Preços promocionais",
  "Sobre nós",
];
export function Header() {
  const activedStyled = "bg-green-actived text-opacity-100 rounded-full";
  return (
    // HEADER
    <header className="relative w-full h-24 bg-green-primary flex items-center">
      <GridContainer className="flex items-center justify-between">
        {/* LOGO */}
        <Image src={LogoImg} alt="logo" />
        <div className="flex items-center gap-20">
          {/* NAV LINKS */}
          <nav className="flex gap-2">
            {arrayMenu.map((item, index) => (
              <Link
                key={index}
                href="#"
                className={`px-3 py-1 text-white text-opacity-40 hover:text-opacity-100 transition-all ${
                  index === 0 ? activedStyled : ""
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>
          {/* RIGHT BUTTONS */}
          <div className="flex items-center gap-6">
            {/* SEARCH */}
            <button>
              <Image src={SearchIcon} alt="Icon Search" />
            </button>
            {/* LOGIN */}
            <button className="flex items-center gap-2">
              <Image src={IconUser} alt="Icon user" />
              <span className="text-white font-medium">Fazer login</span>
            </button>
          </div>
        </div>
      </GridContainer>
    </header>
  );
}
