/**
 * Counts items in a string, an array, or an iterable in a similar way as in Python.
 *
 * @class
 */
class CollectionCounter extends Map {
    /**
     * Create a counter object that counts items of arbitrary types in a string, an array, or an iterable
     * in a manner that is similar to Python. Implementation uses the JS map data structure.
     *
     * @param iterable {string|any[]|Generator} An arbitrary iterable collection, be it an
     * array, a string or a generator. Requires the {@link Symbol.iterator} property.
     * @returns {CollectionCounter} The counter that tracks how many items are there.
     */
    constructor(iterable) {
        if (!new.target) {
            return new CollectionCounter(iterable);
        }
        super();
        for (let item of iterable) {
            super.set(item, this.get(item) + 1);
        }
    }

    /**
     * Get how many items are there in the collection.
     *
     * @param item The key to get the count of the item.
     * @returns {number} 0 if the item is not present in the original iterable value.
     */
    get(item) {
        const quantity = super.get(item);
        if (quantity === undefined) {
            return 0;
        } else {
            return quantity;
        }
    }

    set() {
        throw new Error("This counter is not supposed to be modified!");
    }
}

const stringCounter = new CollectionCounter("zebra duck elephant kitten bat");
const arrayCounter = new CollectionCounter([
    1, 4, 2, 5, 7, 4, 2, 6, 3, 1,
    5, 3, 6, 2, 7, 9, 7, 8, 6, 8,
    5, 3, 1, 6, 4, 8, 4, 4, 7, 0
]);
console.log(stringCounter);
console.log(arrayCounter);