import { memo } from "react"

function MainMenu() {
  return (
    <ul className="flex gap-2 items-center text-2xl dark:text-foreground">
        <li><a href="#">Browse Food</a></li>
        <li><a href="#">Download App</a></li>
        <li><a href="#">About Us</a></li>
    </ul>
  )
}
export default memo(MainMenu)