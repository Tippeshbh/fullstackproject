let items = []; // temporary storage

// CREATE
exports.createItem = (req, res) => {
  const { title, description, status } = req.body;

  const newItem = {
    id: items.length + 1,
    title,
    description,
    status
  };

  items.push(newItem);

  res.json({ message: 'Item created', data: newItem });
};

// GET
exports.getItems = (req, res) => {
  res.json(items);
};

// UPDATE
exports.updateItem = (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;

  const item = items.find(i => i.id == id);

  if (!item) {
    return res.status(404).json({ message: 'Item not found' });
  }

  item.title = title;
  item.description = description;
  item.status = status;

  res.json({ message: 'Item updated', data: item });
};

// DELETE
exports.deleteItem = (req, res) => {
  const { id } = req.params;

  items = items.filter(i => i.id != id);

  res.json({ message: 'Item deleted' });
};