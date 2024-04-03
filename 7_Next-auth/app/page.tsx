import Image from "next/image";
import Link from "next/link";


import { auth  , signIn } from "../../auth";

import { SignIn, SignOut } from "@/app/components/auth-components";


export default async function Home() {

  const session = await auth();

  return (<>
    <div className="space-y-2">
      <Link href="/server-example" className="underline">
        Server
      </Link>{" "}
      and the{" "}
      <Link href="/client-example" className="underline">
        Client
      </Link>{" "}
    <h1 className="text-3xl font-bold">NextAuth.js Example (v5)</h1>

  {session ? (
        <>
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {session.user?.name}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {session.user?.email}
              </p>
            </div>
            <SignOut />
        </>
  ) : (
    <SignIn />
  )}

      <form
      action={async () => {
        "use server";
        await signIn('credentials', {password: 1});
      }}
      className="w-full"
    >
      <input value="^&&^*&)-0-" type="submit" />

    </form>
  </div>
  </>
  );
};
