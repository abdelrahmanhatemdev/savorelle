import { memo } from "react"

function MainMenu() {
  return (
    <ul className="flex gap-10 items-center text-lg dark:text-foreground font-poppins">
        <li><a href="#">Browse Food</a></li>
        <li><a href="#">Download App</a></li>
        <li><a href="#">About Us</a></li>
    </ul>
  )
}
export default memo(MainMenu)