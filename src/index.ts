/**
 * Limits value to range from min to max
 */
export function cap(value: number, min: number, max?: number): number {
	if (max === undefined) return Math.min(value, min);
	if (max < min) [min, max] = [max, min];
	return Math.min(Math.max(value, min), max);
}
