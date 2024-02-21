"use client";

import { format } from "date-fns";
import { ReceivedChatMessage } from "@livekit/components-react";

import { stringToColor } from "@/lib/utils";

interface ChatMessageProps {
  data: ReceivedChatMessage;
}

export const ChatMessage = ({ data }: ChatMessageProps) => {
  const color = stringToColor(data.from?.name || "");

  return (
    <div className="flex gap-2 p-2 rounded-md hover:bg-white/5">
      <p className="">{format(data.timestamp, "HH: MM")}</p>
    </div>
  );
};
