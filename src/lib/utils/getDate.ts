interface GetDateParams {
  string: string;
}

interface OrdinalSuffixParams {
  n: number;
}

function getOrdinalSuffix(n: OrdinalSuffixParams["n"]): string {
  const s: string[] = ["th", "st", "nd", "rd"];
  const v: number = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export function getDate(string: GetDateParams["string"]): string {
  const thisDate = new Date(string);
  const day = getOrdinalSuffix(thisDate.getDate());
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    thisDate
  );
  const hours = thisDate.getHours().toString().padStart(2, "0");
  const minutes = thisDate.getMinutes().toString().padStart(2, "0");
  return `${day} of ${month} ${hours}:${minutes}`;
}
