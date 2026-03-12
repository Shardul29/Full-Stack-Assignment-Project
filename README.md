# Microservices Assignment

This project demonstrates a **Microservice-based architecture using NestJS** with a **dynamic frontend built using Next.js and TypeScript**.

The application consists of:

- Product Microservice
- Order Microservice
- Dynamic Signup Form (Next.js)

---

# Architecture

Client (Next.js)
      |
      v
Order Service (NestJS)
      |
      v
Product Service (NestJS)

Order Service communicates with Product Service using REST APIs.

---

# Backend Services

## Product Service

Port: **3001**

Features:

- Create Product
- Get All Products
- Get Product by ID
- Update Product
- Delete Product

Swagger UI:

http://localhost:3001/api

---

## Order Service

Port: **3002**

Features:

- Create Order
- Get Orders
- Get Orders with Product Details

Order Service fetches product details from Product Service to calculate total order price.

Swagger UI:

http://localhost:3002/api

---

# Frontend Application

Port: **3000**

Built with:

- Next.js
- TypeScript
- React Hook Form
- Material UI

Features:

- Dynamic form rendering from JSON configuration
- Supports TEXT, LIST, RADIO fields
- Validation using React Hook Form
- LocalStorage persistence
- Responsive UI

---

# Running the Project

## 1. Start Product Service

cd backend/product-service

npm install

npm run start:dev


## 2. Start Order Service

cd backend/order-service

npm install

npm run start:dev


## 3. Start Frontend

cd frontend

npm install

npm run dev


---

# Testing APIs

Create Product:

POST http://localhost:3001/products

Example Body:

{
"name":"Laptop",
"description":"Gaming Laptop",
"price":1200,
"stock":10
}


Create Order:

POST http://localhost:3002/orders

Example Body:

{
"productId":"PRODUCT_ID",
"quantity":2
}


Get Orders with Product Details:

GET http://localhost:3002/orders/with-products

---

# Dynamic Form Configuration

The frontend form fields are dynamically generated from JSON configuration.

Example field definition:

{
"name": "Full Name",
"fieldType": "TEXT",
"required": true
}

Changing the field type in JSON automatically updates the rendered UI.

---

# Technologies Used

Backend:
- NestJS
- TypeScript
- Axios
- Swagger

Frontend:
- Next.js
- React Hook Form
- Material UI

---

# Author

Shardul Upadhyay
