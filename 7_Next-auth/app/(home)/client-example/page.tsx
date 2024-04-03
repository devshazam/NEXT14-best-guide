import { auth } from "@auth/core";
import ClientExample from "@/app/client-example/client-example";
import { Providers } from "@/app/client-example/providers";

export default async function ClientPage() {
  const session = await auth();
  if (session?.user)
    session.user = {
      name: session.user.name,
      email: session.user.email,
      picture: session.user.picture,
    }; // filter out sensitive data

  return (
    <Providers session={session}>
      <ClientExample />
    </Providers>
  );
}
