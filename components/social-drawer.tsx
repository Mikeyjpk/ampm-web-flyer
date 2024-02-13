"use client"

import * as React from "react"
import { FaSquareXTwitter, FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare, FaTiktok } from "react-icons/fa";

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export function SocialDrawer() {
  const [goal, setGoal] = React.useState(350)

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="secondary">Social</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm pt-2">
          <DrawerHeader>
            <DrawerTitle>
              Social
            </DrawerTitle>
            <DrawerDescription>
              Follow us @
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex items-center justify-center space-x-5 pt-2 pb-6">
            <FaSquareXTwitter size={36} className="hover:cursor-pointer" onClick={() => window.open('https://x.com/ampmemonight', '_ blank')} />
            <FaFacebookSquare size={36} className="hover:cursor-pointer" onClick={() => window.open('https://www.facebook.com/AMPMemonight', '_ blank')} />
            <FaTiktok size={36} className="hover:cursor-pointer py-0.5" onClick={() => window.open('https://www.tiktok.com/@ampmemonight', '_ blank')} />
            <FaSquareInstagram size={36} className="hover:cursor-pointer py-0.5" onClick={() => window.open('https://www.instagram.com/ampmemonight', '_ blank')} />
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
