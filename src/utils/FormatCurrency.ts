export function formatCurrency(amount: number, currency: string = "PKR") {
  return new Intl.NumberFormat("PKR", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(amount);
}
