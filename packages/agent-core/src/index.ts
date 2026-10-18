import { BACKGROUND_CONTEXT } from "@earendil-works/chord/context";
import { AssistantEntry, createRegistry, Harness, MemoryStorage } from "@earendil-works/pi-durable";
import { authOpenAI } from "./auth/openai.js";

const context = BACKGROUND_CONTEXT;

const models = await authOpenAI();

const harness = await Harness.open(
  new MemoryStorage(),
  { models, registry: createRegistry() },
  context,
);

const root = await harness.root(context, {
  agent: { model: { provider: "openai", modelId: "gpt-6-sol" } },
});

const submission = await root.submit(
  { type: "input", content: "What is the capital of France?" },
  context,
);

const settled = await submission.wait(context);
if (settled.status === "done" && settled.type === "input") {
  const answer = await root.commit((tx) => tx.entry(AssistantEntry, settled.answer), context);
  console.log(answer?.model?.[0]);
}
await harness.close(context);
