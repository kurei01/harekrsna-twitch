"use server";

import { revalidatePath } from "next/cache";
import { RoomServiceClient } from "livekit-server-sdk";

import { getSelf } from "@/lib/auth-service";
import { blockUser, unBlockUser } from "@/lib/block-service";

const roomService = new RoomServiceClient(
  process.env.LIVEKIT_API_URL!,
  process.env.LIVEKIT_API_KEY!,
  process.env.LIVEKIT_API_SECRET!
);

export const onBlock = async (id: string) => {
  try {
    const self = await getSelf();

    let blockedUser;

    try {
      blockedUser = await blockUser(id);
    } catch {
      // User is a guest
    }

    try {
      const rooms = await roomService.removeParticipant(self.id, id);
    } catch {
      // User is not in the room
    }

    revalidatePath(`/u/${self.username}/community`);

    return blockedUser;
  } catch (error) {
    throw new Error("Internal Error");
  }
};

export const onUnBlock = async (id: string) => {
  try {
    const self = await getSelf();
    const unBlockedUser = await unBlockUser(id);

    revalidatePath(`/u/${self.username}/community`);

    return unBlockedUser;
  } catch (error) {
    throw new Error("Internal Error");
  }
};
