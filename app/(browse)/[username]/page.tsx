import { notFound } from "next/navigation";

import { getUserByUsername } from "@/lib/user-service";
import { isFollowingUser } from "@/lib/follow-service";

import { Actions } from "./_components/actions";

interface UserPageProps {
  params: {
    username: string;
  };
}

const UserPage = async ({ params }: UserPageProps) => {
  const user = await getUserByUsername(params.username);

  if (!user) {
    notFound();
  }

  const isFollowing = await isFollowingUser(user.id);

  return (
    <div className="flex flex-col gap-y-4">
      <p>User: {user.username}</p>
      <p>User ID: {user.id}</p>
      <p>is following: {JSON.stringify(isFollowing)}</p>
      <Actions isFollowing={isFollowing} />
    </div>
  );
};

export default UserPage;
