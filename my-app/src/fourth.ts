function findFilm(titles: string[], q: string): string | null {
    const found = titles.find((t) => t.includes(q));
    return found ?? null;
}

const result = findFilm(["Arrival", "Coco"], "Ar");

if (result !== null) {
    console.log(result.toUpperCase());
} else {
    console.log("Film not found");
}