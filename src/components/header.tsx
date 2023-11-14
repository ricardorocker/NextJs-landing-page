import Image from "next/image";
import Link from "next/link";

import LogoImg from "/public/logo.svg";
import SearchIcon from "/public/icon-search.svg";
import IconUser from "/public/icon-user.svg";
import { GridContainer } from "./grid";

export function Header() {
  return (
    // HEADER
    <header className="relative w-full h-24 bg-green-primary flex items-center">
      <GridContainer className="flex items-center justify-between">
        {/* LOGO */}
        <Image src={LogoImg} alt="logo" />
        <div className="flex items-center gap-20">
          {/* NAV LINKS */}
          <nav>
            <Link href="#">Início</Link>
            <Link href="#">Benefícios</Link>
            <Link href="#">Para quem é o curso?</Link>
            <Link href="#">Preços promocionais</Link>
            <Link href="#">Sobre nós</Link>
          </nav>
          {/* RIGHT BUTTONS */}
          <div>
            {/* SEARCH */}
            <button>
              <Image src={SearchIcon} alt="Icon Search" />
            </button>
            {/* LOGIN */}
            <button>
              <Image src={IconUser} alt="Icon user" />
              <span>Fazer login</span>
            </button>
          </div>
        </div>
      </GridContainer>
    </header>
  );
}
