import LogoImage from "@logos/logo.svg";
import Link from "next/link";
import { AspectRatio } from "./ui/aspect-ratio";

function Logo() {
  return (
    <Link href="/">
      <div>
        <AspectRatio 
          ratio={}
      </div>
    </Link>
  )
}

export default Logo
