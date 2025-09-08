import type { Choice } from "../../types/events.types";

type EventLabelFixer = {
  label: string;
  choices: Choice[];
};

export function fixEventLabel({ label, choices }: EventLabelFixer): string {
  if (label !== "") return label;

  if (choices.length <= 2) {
    return choices.map(({ actor }) => actor.label).join(" / ");
  }

  if (choices.length > 2) {
    const first = choices[0]?.actor.label ?? "";
    const third = choices[2]?.actor.label ?? "";
    return `${first} / ${third}`;
  }

  return label;
}
