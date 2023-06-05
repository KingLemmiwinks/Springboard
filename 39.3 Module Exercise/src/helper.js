// choice(items): Returns a randomly selected item from an array of items
function choice(items) {
    let index = Math.floor(Math.random() * items.length);
    return items[index];
}

// remove(items, item): Removes the first matching item from items, if the item exists, and returns it. Otherwise returns undefined.
function remove(item, items) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] === item) {
            return [...items.slice(0, i), ...items.slice(i + 1)]
        }
    }
}

export {choice, remove}