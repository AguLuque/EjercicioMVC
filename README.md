# Products API — REST MVC

API REST en Node.js + Express para gestionar productos de un ecommerce.
Organizada con el patron MVC + Services.

---

## Instalacion y ejecucion

bash
# 1. Instalar dependencias
npm install

# 2. Correr el servidor
node app.js


---

## Endpoints

| Metodo | Ruta | Descripcion |
|--------|------|-------------|
| GET | `/products` | Listar todos los productos |
| GET | `/products/:id` | Obtener producto por ID |
| POST | `/products` | Crear producto |
| PATCH | `/products/:id/stock` | Actualizar stock |
| POST | `/products/:id/buy` | Comprar producto |
| DELETE | `/products/:id` | Eliminar producto |

---

## Body para POST /products

json
{
  "name": "Teclado",
  "price": 100,
  "stock": 10
}


## Body para PATCH /products/:id/stock

json
{
  "stock": 20
}


## Body para POST /products/:id/buy

json
{
  "quantity": 3
}


---

## Reglas de negocio

- No se puede crear un producto con nombre repetido
- El precio debe ser mayor a 0
- El stock no puede ser negativo
- No se puede comprar mas cantidad de la que hay en stock
- Si el producto no existe se devuelve 404

---

## Status codes

| Codigo | Cuando se usa |
|--------|---------------|
| 200 OK | GET, PATCH, DELETE y compra exitosos |
| 201 Created | POST exitoso al crear un producto |
| 400 Bad Request | Validacion fallida o regla de negocio violada |
| 404 Not Found | El ID solicitado no existe |

---

## Estructura del proyecto


products-api/
├── controllers/
│    └── productController.js
├── services/
│    └── productService.js
├── models/
│    └── productModel.js
├── routes/
│    └── productRoutes.js
├── app.js
├── package.json
└── README.md


---

## Capas

Model — maneja el array en memoria y las operaciones CRUD simples.

Service — contiene todas las reglas de negocio. Valida y orquesta la logica antes de llamar al modelo.

Controller — recibe el request, llama al service y devuelve el response con el status code correspondiente.

Routes — conecta cada ruta HTTP con su funcion del controller.
