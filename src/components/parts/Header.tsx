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
            <div className="w-10 h-10 sm:w-12 sm:h-12 relative">
              <Image src={IMAGES.finLogo} alt="logo" layout="fill" />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold">SCORE LAB</h1>
          </div>
        </Link>
      </Paper>
    </>
  );
}
