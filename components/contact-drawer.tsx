"use client"

import * as React from "react"

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

export function ContactDrawer() {
  const [goal, setGoal] = React.useState(350)
  const contactEmail = 'info@theneighbourhood.me'

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="secondary">Contact</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm pt-2">
          <DrawerHeader>
            <DrawerTitle>
              Contact Us
            </DrawerTitle>
            <DrawerDescription>
              For general enquiries please contact us at
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex items-center justify-center space-x-5 pt-2 pb-6 text-lg select-text">
            {contactEmail}
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