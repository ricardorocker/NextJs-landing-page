import Image from "next/image";
import Link from "next/link";

import LogoImg from "/public/logo.svg";
import SearchIcon from "/public/icon-search.svg";
import IconUser from "/public/icon-user.svg";

export function Header() {
  return (
    // HEADER
    <header className="relative w-full h-24 bg-green-primary flex items-center">
      <div>
        {/* LOGO */}
        <Image src={LogoImg} alt="logo" />
        <div>
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
      </div>
    </header>
  );
}
