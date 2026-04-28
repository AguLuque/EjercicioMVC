const model = require("../models/productModel");

function throwError(message, status) {
  const error = new Error(message);
  error.status = status;
  throw error;
}

function getAll() {
  return model.getAll();
}

function getById(id) {
  const product = model.getById(id);
  if (!product) throwError("Producto no encontrado.", 404);
  return product;
}

function create(data) {
  if (model.getByName(data.name)) {
    throwError("El producto ya existe.", 400);
  }

  if (!data.price || data.price <= 0) {
    throwError("El precio debe ser mayor a 0.", 400);
  }

  if (data.stock === undefined || data.stock < 0) {
    throwError("El stock no puede ser negativo.", 400);
  }

  return model.create(data);
}

function updateStock(id, newStock) {
  const product = getById(id);

  if (newStock < 0) {
    throwError("No se puede reducir el stock por debajo de 0.", 400);
  }

  return model.updateStock(id, newStock);
}

function buy(id, quantity) {
  const product = getById(id);

  if (quantity <= 0) {
    throwError("La cantidad debe ser mayor a 0.", 400);
  }
  if (quantity > product.stock) {
    throwError("No hay suficiente stock disponible.", 400);
  }

  return model.updateStock(id, product.stock - quantity);
}

function remove(id) {
  getById(id);
  model.remove(id);
}

module.exports = { getAll, getById, create, updateStock, buy, remove };
