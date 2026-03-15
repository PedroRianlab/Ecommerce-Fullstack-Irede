# 🛒 TypeScript POO E-commerce

Projeto desenvolvido para praticar **Programação Orientada a Objetos (POO)** utilizando **TypeScript e Node.js**, simulando a lógica de funcionamento de um sistema de **e-commerce**.

O sistema modela entidades comuns de uma loja virtual, como **produtos, categorias, usuários e carrinho de compras**, aplicando boas práticas de **organização de código, modularização e tipagem forte**.

---

# 🎓 Contexto do Projeto

Este projeto foi desenvolvido como parte da **Atividade 2 da Trilha FullStack TIC-HUB 12**, um programa de formação em tecnologia promovido pelo **Instituto Irede**.

A trilha tem como objetivo capacitar desenvolvedores nas principais tecnologias utilizadas no desenvolvimento **Full Stack**, através de desafios práticos voltados para:

- Programação Orientada a Objetos  
- Modelagem de sistemas  
- Estruturação de projetos  
- Boas práticas de desenvolvimento  

🔗 Saiba mais sobre o programa:  
https://lnk.bio/institutoirede

📷 Instagram  
@institutoirede

---

# 🚀 Tecnologias Utilizadas

- **TypeScript**
- **Node.js**
- **Programação Orientada a Objetos (POO)**
- **High Order Functions**

---

# 📂 Estrutura do Projeto

```bash
src
│
├── models
│   ├── Cart.ts
│   ├── CartItem.ts
│   ├── Category.ts
│   ├── Product.ts
│   ├── Role.ts
│   └── User.ts
│
└── index.ts
```

A estrutura do projeto foi organizada utilizando **módulos**, separando as entidades do sistema dentro da pasta `models`.

---

# 📦 Modelagem do Sistema

## Category

Representa a **categoria de um produto**.

**Atributos:**

- `id`
- `name`

---

## Product

Representa um **produto da loja**.

**Atributos:**

- `id`
- `name`
- `price`
- `category`

---

## User

Representa um **usuário do sistema**.

**Atributos:**

- `id`
- `username`
- `email`
- `role`

---

## Role

Enum responsável por definir o **tipo de usuário no sistema**.

**Valores:**

- `ADMIN`
- `CUSTOMER`

---

## Cart

Responsável pela **lógica do carrinho de compras**.

### Métodos implementados

- `addItem()`
- `getTotalItems()`
- `getFinalPrice()`

### Funcionalidades

✔ Adicionar produtos ao carrinho  
✔ Somar quantidades de produtos repetidos  
✔ Calcular total de itens no carrinho  
✔ Calcular valor final da compra  

---

# 🔥 Conceitos Aplicados

Durante o desenvolvimento foram aplicados conceitos importantes de engenharia de software:

- **Programação Orientada a Objetos**
- **Tipagem forte com TypeScript**
- Uso de **Enums**
- Uso de **Interfaces**
- **High Order Functions** (`reduce`, `some`)
- **Organização modular do código**

---

# ▶️ Como executar o projeto

### 1️⃣ Instalar dependências

```bash
npm install
```

### 2️⃣ Compilar o projeto

```bash
npx tsc
```

### 3️⃣ Executar o projeto

```bash
node dist/index.js
```

---

# 🎯 Objetivo Educacional

O objetivo deste projeto é reforçar conceitos fundamentais como:

- Modelagem de domínio
- Tipagem segura com TypeScript
- Estruturação de projetos
- Aplicação de Programação Orientada a Objetos
- Uso de Git para versionamento de código

---

# 👨‍💻 Autor

**Pedro Rian**

Estudante de Ciência da Computação  

GitHub:  
https://github.com/PedroRianlab
