import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import RepMark from "@/assets/icons/rep-mark.svg";

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  return (
<div className={cn("navbar_wrapper", className)}>
  <div className="navbar_container">
    <div className="navbar_top">
      <a href="#home" aria-current="page" className="navbar_brand-wrap w-inline-block w--current">
        <img loading="lazy" src={RepMark.src} alt="REP CLUB" className="navbar_brand-image" />
      </a>
      <div className="menu-wrap">
        <div className="menu-line one"></div>
        <div className="menu-line two"></div>
        <div className="menu-line three"></div>
      </div>
    </div>
    <div className="navbar_bottom">
      <div className="navbar_item-wrap">
        <div className="nav_item-wrap">
          <a href="#home" aria-current="page" className="nav_item w-inline-block w--current">
            <div className="nav_item-text">
              {"Home"}
            </div>
            <div className="nav_icon-wrap">
              <ArrowUpRight className="nav_icon" aria-hidden="true" />
            </div>
          </a>
          <a href="#about" className="nav_item w-inline-block">
            <div className="nav_item-text">
              {"About"}
            </div>
            <div className="nav_icon-wrap">
              <ArrowUpRight className="nav_icon" aria-hidden="true" />
            </div>
          </a>
          <a href="#events" className="nav_item w-inline-block">
            <div className="nav_item-text">
              {"Events"}
            </div>
            <div className="nav_icon-wrap">
              <ArrowUpRight className="nav_icon" aria-hidden="true" />
            </div>
          </a>
          <a href="#schedule" className="nav_item w-inline-block">
            <div className="nav_item-text">
              {"Schedule"}
            </div>
            <div className="nav_icon-wrap">
              <ArrowUpRight className="nav_icon" aria-hidden="true" />
            </div>
          </a>
          <a href="#register" className="nav_item w-inline-block">
            <div className="nav_item-text">
              {"Register"}
            </div>
            <div className="nav_icon-wrap">
              <ArrowUpRight className="nav_icon" aria-hidden="true" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}
