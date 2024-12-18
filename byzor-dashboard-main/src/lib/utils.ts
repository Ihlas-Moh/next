import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
let timer: null | ReturnType<typeof setTimeout>  = null
export async function sleep(time = 300) {
  if(timer) clearTimeout(timer);
  return new Promise<null>((resolve) => {
    timer = setTimeout(() => {
      resolve(null)
    }, time)
  })
}
