import type { ExtensionAPI, ExtensionContext } from "@mariozechner/pi-coding-agent";

import { SPINNER_VERBS } from "./verbs";

function setRandomVerb(ctx: ExtensionContext): void {
  const randomVerb = SPINNER_VERBS[Math.floor(Math.random() * SPINNER_VERBS.length)]!;

  ctx.ui.setWorkingMessage(`${randomVerb}...`);
}

function resetVerb(ctx: ExtensionContext): void {
  ctx.ui.setWorkingMessage();
}

export default function (pi: ExtensionAPI) {
  pi.on("agent_start", async (_event, ctx) => {
    if (!ctx.hasUI) return;

    setRandomVerb(ctx);
  });

  pi.on("agent_end", async (_event, ctx) => {
    if (!ctx.hasUI) return;

    resetVerb(ctx);
  });

  pi.on("session_shutdown", async (_event, ctx) => {
    if (!ctx.hasUI) return;

    resetVerb(ctx);
  });
}
