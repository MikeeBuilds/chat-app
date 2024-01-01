import LogoImage from "@logos/logo.svg";
import Link from "next/link";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";

function Logo() {
  return (
    <Link href="/">
      <div>
        <AspectRatio 
          ratio={16/9}
          className="flex items-center justify-center"
          >
            <Image 
              priority
              src={LogoImage}
              alt="Anychat logo"
              className="rounded-full dark:filter dark:invert"
            />
          </AspectRatio>
      </div>
    </Link>
  )
}

export default Logo
