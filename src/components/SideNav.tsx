import Link from "next/link";
import { useSession, signOut, signIn } from "next-auth/react";
import IconHoverEffect from "~/components/IconHoverEffect";
import { VscHome, VscAccount, VscSignOut, VscSignIn } from "react-icons/vsc";

export default function SideNav() {
  const session = useSession();
  const user = session.data?.user;
  return (
    <nav className="sticky top-0 px-2 py-4">
      <ul className="flex flex-col items-start gap-2">
        <li>
          <Link href="/">
            <IconHoverEffect>
              <span className="flex items-center gap-4">
                <VscHome className="h-8 w-8" />
                <span className="hidden text-lg md:inline">Home</span>
              </span>
            </IconHoverEffect>
          </Link>
        </li>
        {user != null && (
          <li>
            <Link href={`/profiles/${user.id}`}>
              <IconHoverEffect>
                <span className="flex items-center gap-4">
                  <VscAccount className="h-8 w-8" />
                  <span className="hidden text-lg md:inline">Profile</span>
                </span>
              </IconHoverEffect>
            </Link>
          </li>
        )}
        {user == null ? (
          <li>
            <button onClick={() => void signIn()}>
              <IconHoverEffect>
                <span className="flex items-center gap-4">
                  <VscSignIn className="fill-g h-8 w-8 fill-green-700" />
                  <span className="hidden fill-green-700 text-lg md:inline">
                    Log In
                  </span>
                </span>
              </IconHoverEffect>
            </button>
          </li>
        ) : (
          <li>
            <button onClick={() => void signOut()}>
              <IconHoverEffect>
                <span className="flex items-center gap-4">
                  <VscSignOut className="fill-g h-8 w-8 fill-red-700" />
                  <span className="hidden fill-red-700 text-lg md:inline">
                    Log Out
                  </span>
                </span>
              </IconHoverEffect>
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
