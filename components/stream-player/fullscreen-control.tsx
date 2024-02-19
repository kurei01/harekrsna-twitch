"use client";

import { Maximize, Minimize } from "lucide-react";

import { Hint } from "@/components/hint";

interface FullscreenControlProps {
  isFullScreen: boolean;
  onToggle: () => void;
}

export const FullscreenControl = ({
  isFullScreen,
  onToggle,
}: FullscreenControlProps) => {
  const Icon = isFullScreen ? Minimize : Maximize;

  const label = isFullScreen ? "Exit fullscreeen" : "Enter fullscreen";

  return (
    <div className="flex items-center justify-center gap-4">
      <Hint label={label}>
        <button onClick={onToggle} className="text-white p-1.5 hover:bg-white/10 rounded-lg">
          <Icon className="h-5 w-5" />
        </button>
      </Hint>
    </div>
  );
};
