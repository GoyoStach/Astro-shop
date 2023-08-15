export const convertNumberToEur = (num: number) =>
  num.toLocaleString("fr", {
    style: "currency",
    currency: "EUR",
  });