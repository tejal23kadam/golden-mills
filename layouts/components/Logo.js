import ImageFallback from "@components/ImageFallback";
import config from "@config/config.json";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

const Logo = ({ src }) => {
  const { logo, logo_white, logo_text, title } = config.site;

  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <Link href="/" className="navbar-brand">
      {src || logo ? (
        <ImageFallback
          width={220}   // ✅ match Tailwind width
          height={100}   // ✅ match Tailwind height
          src={
            mounted && (theme === "dark" || resolvedTheme === "dark")
              ? logo_white
              : logo
          }
          alt={title}
          priority
          className="m-auto w-[180px] h-[100px] object-contain"
        />
      ) : logo_text ? (
        logo_text
      ) : (
        title
      )}
    </Link>
  );
};

export default Logo;