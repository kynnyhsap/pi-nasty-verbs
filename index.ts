import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";
import { NASTY_VERBS } from "./nasty-verbs";

export default function (pi: ExtensionAPI) {
  pi.on("agent_start", async (_event, ctx) => {
    if (!ctx.hasUI) return;

    const randomVerb = NASTY_VERBS[Math.floor(Math.random() * NASTY_VERBS.length)]!;

    ctx.ui.setWorkingMessage(`${randomVerb}...`);
  });

  pi.on("agent_end", async (_event, ctx) => {
    if (!ctx.hasUI) return;

    ctx.ui.setWorkingMessage();
  });

  pi.on("session_shutdown", async (_event, ctx) => {
    if (!ctx.hasUI) return;

    ctx.ui.setWorkingMessage();
  });
}
