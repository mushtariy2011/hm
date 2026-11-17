function total(price: number, quantity: number): number {
  return price * quantity;
}

const greet = (name: string): string => `Salom, ${name}`;

function log(message: string): void {
  console.log(message);
}

log(greet("Aziz"));
console.log(total(10, 3));