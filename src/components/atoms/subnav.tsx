"use client"

import { usePathname } from "next/navigation"

interface props {
  root: string,
  length: number,
  backgroundColor: string
}
export const SubNav = (props: props) => {
  const pathname = usePathname()
  return <div className={`flex flex-col justify-center gap-y-1 absolute top-10 p-2 ${props.backgroundColor}`}>
    {Array.from(Array(props.length)).map((el, index) =>
      <a key={index} href={!pathname.includes("blog") ? `${props.root}/${index === 0 ? "first" : "second"}` : `${pathname}/${index === 0 ? "first" : "second"}`}>{`${index === 0 ? "First" : "Second"}`}</a>
    )}
  </div>
}