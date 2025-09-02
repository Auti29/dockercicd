import { prismaClient } from "db/client";

export default async function Home() {
  const users = await prismaClient.user.findMany();
  return (
    <div>
      {JSON.stringify(users)}
    </div>
  );
}

export const revalidate = 60 
//revalidate the page every 60 secs -> force the page to follow isr
// or
// export const dynamic = 'force-dynamic' => force the page to be ssr