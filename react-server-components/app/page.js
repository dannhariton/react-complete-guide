import ClientDemo from "@/components/ClientDemo";
import DataFetchingDemo from "@/components/DataFetchingDemo";
import RSCDemo from "@/components/RSCDemo";
import ServerActionsDemo from "@/components/ServerActionsDemo";
import UsePromiseDemo from "@/components/UsePromisesDemo";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import fs from "node:fs/promises";
import { Suspense } from "react";

export default async function Home() {
  const fetchUsersPromise = new Promise((resolve, reject) =>
    setTimeout(async () => {
      const data = await fs.readFile("dummy-db.json", "utf-8");
      const users = JSON.parse(data);
      // resolve(users);
      reject("error");
    }, 2000)
  );
  return (
    <main>
      <RSCDemo />
      <ClientDemo />
      <DataFetchingDemo />
      <ServerActionsDemo />
      <ErrorBoundary fallback={<p>Error</p>}>
        <Suspense fallback="Loading...">
          <UsePromiseDemo usersPromise={fetchUsersPromise} />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
