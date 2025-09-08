export function decodeUnicode(label: string): string {
  if (label.split(" ").length < 2) {
    return JSON.parse(`"${label}"`);
  } else {
    return JSON.parse(
      `"${label.split(" ")[0].charAt(0) + "." + label.split(" ")[1]}"`
    );
  }
}
