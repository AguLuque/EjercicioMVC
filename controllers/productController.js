const service = require("../services/productService");

function getAll(req, res) {
  const products = service.getAll();
  res.status(200).json(products);
}

function getById(req, res) {
  try {
    const product = service.getById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
}

function create(req, res) {
  try {
    const product = service.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
}

function updateStock(req, res) {
  try {
    const product = service.updateStock(req.params.id, req.body.stock);
    res.status(200).json(product);
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
}

function buy(req, res) {
  try {
    const product = service.buy(req.params.id, req.body.quantity);
    res.status(200).json(product);
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
}

function remove(req, res) {
  try {
    service.remove(req.params.id);
    res.status(200).json({ mensaje: `Producto con ID ${req.params.id} eliminado.` });
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
}

module.exports = { getAll, getById, create, updateStock, buy, remove };