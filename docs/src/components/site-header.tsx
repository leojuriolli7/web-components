import Link from "next/link";

import { siteConfig } from "@/site-config";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileDropdown } from "@/components/mobile-nav";

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-50 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Link href="/" passHref>
          <a className="items-center space-x-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring ring-offset-background flex h-9 mr-3 px-3">
            <Icons.logo className="h-6 w-6" />
            <span className="font-bold text-lg sm:block hidden">
              {siteConfig.name}
            </span>
          </a>
        </Link>

        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              passHref
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
            >
              <a>
                <Icons.gitHub className="h-5 w-5" />
              </a>
            </Link>
            <ThemeToggle />
            <MobileDropdown
              items={{ main: siteConfig.mainNav, docs: siteConfig.sidebarNav }}
            />
          </nav>
        </div>
      </div>
    </header>
  );
}
