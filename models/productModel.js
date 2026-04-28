const { randomUUID } = require("crypto");

let products = [];

function generateId() {
  if (products.length === 0) return 1;
  return Math.max(...products.map((p) => p.id)) + 1;
}

function getAll() {
  return products;
}

function getById(id) {
  return products.find((p) => p.id === parseInt(id)) || null;
}

function getByName(name) {
  return products.find(
    (p) => p.name.toLowerCase() === name.toLowerCase()
  ) || null;
}

function create(data) {
  const product = {
    id: generateId(),
    name: data.name,
    price: data.price,
    stock: data.stock,
  };
  products.push(product);
  return product;
}

function updateStock(id, stock) {
  const idx = products.findIndex((p) => p.id === parseInt(id));
  if (idx === -1) return null;
  products[idx].stock = stock;
  return products[idx];
}

function remove(id) {
  const idx = products.findIndex((p) => p.id === parseInt(id));
  if (idx === -1) return false;
  products.splice(idx, 1);
  return true;
}

module.exports = { getAll, getById, getByName, create, updateStock, remove };