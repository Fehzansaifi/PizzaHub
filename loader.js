'use client'
 
export default function myImageLoader({ src, width, quality }) {
  return `https://webdev.freehostmost.com/${src}?w=${width}&q=${quality || 75}`
}