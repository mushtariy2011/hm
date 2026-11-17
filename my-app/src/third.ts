function shout(text: unknown): string {
    if (typeof text === "string") {
        return text.toUpperCase();
    }
    return String(text);
}

function shoutSafe(text: unknown): string {
    if (typeof text === "string") return text.toUpperCase();
    return String(text);
}

console.log(shoutSafe(42));
console.log(shout("hello"));