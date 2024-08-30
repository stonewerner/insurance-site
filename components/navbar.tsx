"use client"
import { cn } from "@/lib/utils"
import { BookOpen, MenuIcon } from 'lucide-react'
import Link from "next/link"
import * as React from "react"
import { Dialog, DialogClose } from "./ui/dialog"
import { Button } from "./ui/button"
import { NavigationMenu, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu"
// import ModeToggle from "../mode-toggle"
import { SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
//import ModeToggle from "./mode-toggle"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  


export function NavBar() {

    return (
        <div className="flex items-center min-w-full w-full fixed justify-center p-2 z-[50] mt-[2rem]">
            <div className="flex justify-between md:w-[90%] w-[95%] max-w-[1200px] border dark:border-zinc-900 dark:bg-black bg-opacity-10 relative backdrop-filter backdrop-blur-lg bg-white border-white border-opacity-20 rounded-xl p-2 shadow-lg">
            <Dialog>
                    <SheetTrigger className="min-[825px]:hidden p-2 transition">
                        <MenuIcon />
                    </SheetTrigger>
                    <SheetContent side="left">
                        <SheetHeader>
                            <SheetTitle>Lange & Associates</SheetTitle>
                            <SheetDescription>
                            Lange and Associates has been "The Contractors' Insurance Specialist" for over 25 years.
                            </SheetDescription>
                        </SheetHeader>
                        <div className="flex flex-col space-y-3 mt-[1rem] z-[99]">
                            <DialogClose asChild>
                                <Link href="/">
                                    <Button variant="outline" className="w-full">Home</Button>
                                    {/*TODO: make these dropdowns as well*/}
                                </Link>
                            </DialogClose>
                            <DialogClose asChild>
                                <Link href="/software">
                                    <Button variant="outline" className="w-full">About Us</Button>
                                </Link>
                            </DialogClose>
                            <DialogClose asChild>
                                <Link href="/automation">
                                    <Button variant="outline" className="w-full">Applications</Button>
                                </Link>
                            </DialogClose>
                            <DialogClose asChild>
                                <Link href="/blog">
                                    <Button variant="outline" className="w-full">Online Services</Button>
                                </Link>
                            </DialogClose>
                            <DialogClose asChild>
                                <Link href="/projects">
                                    <Button variant="outline" className="w-full">Privacy & Refunds</Button>
                                </Link>
                            </DialogClose>
                            
                        </div>
                    </SheetContent>
                </Dialog>
                <NavigationMenu>
                    <NavigationMenuList className="max-[825px]:hidden ">
                        <Link href="/" className="pl-2">
                            <h1 className="font-bold">Lange & Associates</h1>
                        </Link>
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="flex items-center gap-2 max-[825px]:hidden">
                <DropdownMenu>
                        <DropdownMenuTrigger><Button variant="ghost">About Us</Button></DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>Company Story</DropdownMenuItem>
                            <DropdownMenuItem>Mission Statement</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu>
                        <DropdownMenuTrigger><Button variant="ghost">Applications</Button></DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>first</DropdownMenuItem>
                            <DropdownMenuItem>second</DropdownMenuItem>
                            <DropdownMenuItem>third</DropdownMenuItem>
                            <DropdownMenuItem>fourth</DropdownMenuItem>
                            <DropdownMenuItem>fifth</DropdownMenuItem>
                            <DropdownMenuItem>sixth</DropdownMenuItem>
                            <DropdownMenuItem>seventh</DropdownMenuItem>
                            <DropdownMenuItem>eighth</DropdownMenuItem>
                            <DropdownMenuItem>ninth</DropdownMenuItem>
                            <DropdownMenuItem>tenth</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu>
                        <DropdownMenuTrigger><Button variant="ghost">Online Services</Button></DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>first</DropdownMenuItem>
                            <DropdownMenuItem>second</DropdownMenuItem>
                            <DropdownMenuItem>third</DropdownMenuItem>
                            <DropdownMenuItem>fourth</DropdownMenuItem>
                            <DropdownMenuItem>fifth</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu>
                        <DropdownMenuTrigger><Button variant="ghost">Privacy & Refunds</Button></DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>Privacy Policy</DropdownMenuItem>
                            <DropdownMenuItem>Refund Policy</DropdownMenuItem>
                            <DropdownMenuItem>FAQs</DropdownMenuItem> {/*use brijr faq component, privacy and refund could be in the footer*/}
                            <DropdownMenuItem>Glossary</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>

    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"