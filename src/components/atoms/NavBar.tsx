import Link from "next/link"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const currentRoute = usePathname()
  const groupMenus = [
    [
      {
        name: "Home",
        path: "/",
      },
      {
        name: "Posts",
        path: "/posts",
      },
      {
        name: "Sign Up",
        path: "/sign-up",
      },
    ],
  ]

  return (
    <nav className="flex justify-between py-4">
      {groupMenus.map((groupMenu, i) => (
        <div className="space-x-2" key={i}>
          {groupMenu.map((menu, i) => (
            <Link
              key={i}
              href={menu.path}
              className={menu.path == currentRoute ? "font-bold" : ""}
            >
              {menu.name}
            </Link>
          ))}
        </div>
      ))}
    </nav>
  )
}

export default Navbar
