"use client";

interface ChatCommunityProps {
  viewerName: string;
  hostName: string;
  isHidden: boolean;
}

export const ChatCommunity = ({
  viewerName,
  hostName,
  isHidden,
}: ChatCommunityProps) => {
  
  if (isHidden) {
    return null;
  }

  return <div>ChatCommunity</div>;
};
