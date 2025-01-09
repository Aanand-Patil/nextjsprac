import React from "react";
import * as HoverCard from "@radix-ui/react-hover-card";
import "./styles.css";

const HoverCardDemo = () => (
  <HoverCard.Root openDelay={200}>
    <HoverCard.Trigger asChild>
      <a
        className="ImageTrigger"
        href="https://twitter.com/radix_ui"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          className="Image normal"
          src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
          alt="Radix UI"
        />
      </a>
    </HoverCard.Trigger>
    <HoverCard.Portal>
      <HoverCard.Content className="HoverCardContent" sideOffset={5}>
        <div>anand</div>

        <HoverCard.Arrow className="HoverCardArrow" />
      </HoverCard.Content>
    </HoverCard.Portal>
  </HoverCard.Root>
);

export default HoverCardDemo;
