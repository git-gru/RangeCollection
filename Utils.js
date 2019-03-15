export class Utils {
    /**
     * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
     * @return {boolean}
     */
    static isRange(range) {
        if (typeof range[0] !== "number") {
            console.log("Start range value is required and must be a number");
            return false;
        }
        if (typeof range[1] !== "number") {
            console.log("End range value is required and must be a number");
            return false;
        }
        if (range[0] > range[1]) {
            console.log("Start range value cannot be bigger than end value");
            return false;
        }
        return true;
    }

    /**
     * Checks if range1 has intersection with range2.
     * Comparison is not strict for borders.
     * E.g. [1,2] includes 1,2
     * @param {Array<number>} range1
     * @param {Array<number>} range2
     * @return {boolean}
     * @example
     *   hasIntersection([0, 1], [0, 2]) - true by "0" and "1"
     *   hasIntersection([0, 1], [1, 2]) - true by "1"
     */
    static hasIntersection(range1, range2) {
        const start = 0;
        const end = 1;
        if (range2[start] > range1[end] || range1[start] > range2[end]) {
            return false;
        }
        return true;
    }

    /**
     * @param {Array<number>} range
     * @return {number}
     */
    static getRangeLength(range) {
        return range[1] - range[0];
    }
}