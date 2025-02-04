import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { TerminalSquareIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex sm:min-h-[85.5vh] min-h-[85vh] flex-col items-center justify-center text-center px-2 sm:py-8 py-12">
      <h1 className="text-3xl font-bold mb-4 sm:text-6xl">
        Welcome to the QuickTrips Documentation
      </h1>
      <p className="mb-8 sm:text-lg max-w-[800px] text-muted-foreground">
        QuickTrips is a modern platform for managing and booking unique stays and
        experiences. This documentation will guide you through its features,
        setup, and customization.
      </p>
      <div className="flex flex-row items-center gap-5">
        <Link
          href={`/docs${page_routes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Get Started
        </Link>
        <Link
          href="/docs/api"
          className={buttonVariants({
            variant: "secondary",
            className: "px-6",
            size: "lg",
          })}
        >
          API Reference
        </Link>
      </div>
      <span className="flex flex-row items-start sm:gap-2 gap-0.5 text-muted-foreground text-md mt-7 -mb-12 max-[800px]:mb-12 font-code sm:text-base text-sm font-medium">
        <TerminalSquareIcon className="w-5 h-5 sm:mr-1 mt-0.5" />
        {"git clone https://github.com/ISC-UPA/2025-1-ISC07A-QuickTrips.git QuickTrips"}
      </span>
    </div>
  );
}