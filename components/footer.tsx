import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Github, PlaneTakeoff as IconApp, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t w-full h-16">
      <div className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3 max-sm:px-4">
        <div className="flex items-center gap-3">
          <IconApp className="sm:block hidden w-5 h-5 text-muted-foreground" />
          {/* Mensaje "Hecho con ❤️ por Daniel, Hector, Pedro, Yeshua" */}
          <div className="flex items-center gap-2">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>por Daniel, Hector, Pedro, Yeshua</span>
          </div>
        </div>

        <div className="gap-4 items-center hidden md:flex">
          <FooterButtons />
        </div>
      </div>
    </footer>
  );
}

export function FooterButtons() {
  return (
    <>
      <Link
        href="https://github.com/ISC-UPA/2025-1-ISC07A-QuickTrips"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <Github className="h-4 w-4 mr-2 text-black dark:text-white fill-current" />
        GitHub
      </Link>
    </>
  );
}