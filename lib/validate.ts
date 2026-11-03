export function validate(size: string) {
    const n = Number(size);

    return !isNaN(n) && n > 0 && n <= 100;
}