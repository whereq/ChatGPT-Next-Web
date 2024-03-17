import { authOptions } from "@/app/lib/auth/auth-options";
import SignoutOfKeycloak from "@/app/components/auth/signout-of-keycloak";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import Locale from "../../locales";

/*
interface SignOutPageProp {
  callbackUrl: string;
  error: string;
}
*/

/*
export default async function SignoutPage({
  callbackUrl,
  error,
}: SignOutPageProp) {
*/
export default async function SignoutPage() {
  const session = await getServerSession(authOptions);
  if (session) {
    const userName = session.user?.name ?? "";
    return (
      <div className="flex flex-col space-y-3 justify-center items-center h-screen">
        {/* <div className="text-xl font-bold">{Locale.Navbar.Signout}</div> */}
        <div>{Locale.Auth.ConfirmSignout(userName as string)}</div>
        <div>
          <SignoutOfKeycloak />
        </div>
      </div>
    );
  }

  // Instead of redirecting to the signin page, redirect to the callback URL or the home page
  // return redirect("/api/auth/signin");
  // return redirect(callbackUrl || "/");
  return redirect("/");
}
