import type React from "react"
import { Toaster } from "@/components/ui/toaster"

export default function NewShipmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <Toaster />
    </>
  )
}

