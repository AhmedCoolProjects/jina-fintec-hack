import { Paper, IconButton, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "../../constants";
import { BsSun, BsMoonStars } from "react-icons/bs";

export function Header() {
  return (
    <>
      <Paper className="w-full z-10 p-3 sticky top-0 items-center justify-between flex flex-row">
        <Link href="/" passHref>
          <div className="flex cursor-pointer flex-row items-center space-x-2">
            <Image
              src={IMAGES.finLogo}
              alt="logo"
              height={60}
              objectFit="contain"
            />
          </div>
        </Link>
      </Paper>
    </>
  );
}
