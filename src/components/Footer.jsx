import Aos from "aos";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });
  const myInstagram = "fzrlutma";
  const myFacebook =
    "https://www.facebook.com/profile.php?id=100076539854422&mibextid=ZbWKwL";
  const mylinkind =
    "https://www.linkedin.com/in/fazril-utama-28b83b2a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
  const myGithub = "https://github.com/Fazrilutama/web-smkn-2-sukabumi";

  return (
    <div className="flex justify-around items-center bg-[#151516] py-5 md:py-7">
      <div className="flex gap-2">
        <Image
          src="/img/cp.png"
          alt="linkind"
          width={15}
          height={15}
          className="rounded-full "
        />
        <p className="text-white text-xs sm:text-sm">
          Copy Right As Fazril Utama
        </p>
      </div>
      <div className="flex items-center justify-center gap-2 md:gap-4">
        <Link href={myFacebook} target="_blank">
          <Image src="/img/fb.png" alt="facebook" width={30} height={30} />
        </Link>
        <Link href={myInstagram} target="_blank">
          <Image src="/img/ig.png" alt="instagram" width={30} height={30} />
        </Link>
        <Link href={mylinkind} target="_blank">
          <Image src="/img/linkind.png" alt="linkind" width={30} height={30} />
        </Link>
        <Link href={myGithub} target="_blank">
          <Image src="/github.png" alt="github" width={30} height={30} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
