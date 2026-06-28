function pickById(items, id) {
    return items.find((item) => item.id === Number(id)) || null;
}

module.exports = pickById;