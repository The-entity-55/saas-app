import { UserProfile } from "@clerk/nextjs";

export default function ProfilePage() {
  return (
    <main className="flex justify-center items-center min-h-screen">
      <UserProfile />
    </main>
  );
} 