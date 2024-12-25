"use client";

import { useEffect, useState } from "react";
import WebApp from "@twa-dev/sdk";

interface UserData {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code: string;
  is_premium?: boolean;
}

export default function Home() {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    if (WebApp.initDataUnsafe.user) {
      setUserData(WebApp.initDataUnsafe.user as UserData);
    }
  }, []);

  return (
    <main className="p-4">
      {userData ? (
        <div>
          <h1 className="text-2xl font-bold">
            Welcome, {userData.first_name}!
          </h1>
          <p>
            Your user ID is <code>{userData.id}</code>.
          </p>
          <p>
            Your language code is <code>{userData.language_code}</code>.
          </p>
          {userData.is_premium && <p>You are a premium user.</p>}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}
