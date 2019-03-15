// Task: Implement a 'Range Collection' class.
// A pair of integers define a range, for example: [1, 5). This range includes integers: 1, 2, 3, and 4.
// A range collection is an aggregate of these ranges: [1, 5), [10, 11), [100, 201)

import { Utils } from "./Utils";

/**
 * RangeCollection class
 * NOTE: Feel free to add any extra member variables/functions you like.
 */
export class RangeCollection {
    constructor() {
        this.collection = [];
    }

    /**
     * Adds a range to the collection
     * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
     */
    add(range) {
        if (!Utils.isRange(range)) {
            return;
        }

        if (range[0] === range[1]) {
            return;
        }

        const firstItem = this.collection[0];
        if (!this.collection.length || range[1] < firstItem[0]) {
            this.collection.unshift(range);
            return;
        }

        const lastItem = this.collection[this.collection.length - 1];
        if (lastItem[1] < range[0]) {
            this.collection.push(range);
            return;
        }

        let rangesToDelete = 0;
        let newRange = [range[0], range[1]];
        let insertionIndex = -1;
        for (let i = 0; i < this.collection.length; i++) {
            if (
                this.collection[i][1] < range[0] &&
                this.collection[i + 1] &&
                this.collection[i + 1][0] > range[1]
            ) {
                insertionIndex = i + 1;
            } else if (Utils.hasIntersection(this.collection[i], newRange)) {
                const minStart = Math.min(this.collection[i][0], newRange[0]);
                const maxEnd = Math.max(this.collection[i][1], newRange[1]);
                newRange = [minStart, maxEnd];
                rangesToDelete++;
                if (insertionIndex === -1) {
                    insertionIndex = i;
                }
            } else if (insertionIndex > -1) {
                break;
            }
        }

        if (insertionIndex > -1) {
            this.collection.splice(insertionIndex, rangesToDelete, newRange);
        }
    }

    /**
     * Removes a range from the collection
     * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
     */
    remove(range) {
        // TODO: implement this
    }

    /**
     * Prints out the list of ranges in the range collection
     */
    print() {
        // TODO: implement this
    }
}
