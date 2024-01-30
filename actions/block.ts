"use server";

import { revalidatePath } from "next/cache";

import { blockUser, unBlockUser } from "@/lib/block-service";

export const onBlock = async (id: string) => {
  try {
    // TODO: Adapt to disconnect from livestream
    // TODO: Allow ability to kick the guest
    const blockedUser = await blockUser(id);

    revalidatePath("/");

    if (blockedUser) {
      revalidatePath(`/${blockedUser.blocked.username}`);
    }

    return blockedUser;
  } catch (error) {
    throw new Error("Internal Error");
  }
};

export const onUnBlock = async (id: string) => {
  try {
    const unBlockedUser = await unBlockUser(id);

    revalidatePath("/");

    if (unBlockedUser) {
      revalidatePath(`/${unBlockedUser.blocked.username}`);
    }

    return unBlockedUser;
  } catch (error) {
    throw new Error("Internal Error");
  }
};
