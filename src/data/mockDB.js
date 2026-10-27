let productos = [
    {
        id: 1,
        nombre: "Chaqueta Canvas Heavy-Duty",
        descripcion: "Lona de algodón 12oz forrada, resistente al viento y la fricción.",
        precio: 49990,
        categoria: "Chaquetas",
        imagen: "chaqueta.jpg"
    },
    {
        id: 2,
        nombre: "Pantalón Cargo Doble Rodilla",
        descripcion: "Costuras triples y bolsillos utilitarios reforzados.",
        precio: 34990,
        categoria: "Pantalones",
        imagen: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        nombre: "Overshirt de Franela Gruesa",
        descripcion: "Tejido térmico resistente al desgaste diario y bajas temperaturas.",
        precio: 29990,
        categoria: "Camisas",
        imagen: "camisa.jpg"
    },
    {
        id: 4,
        nombre: "Polera Heavyweight 240g",
        descripcion: "Algodón peinado denso con cuello reforzado anti-deformación.",
        precio: 16990,
        categoria: "Poleras",
        imagen: "polera1.webp"
    }
];

export const obtenerProductos = () => productos;
export const obtenerProductoPorId = (id) => productos.find(p => p.id === id);
export const crearProducto = (nuevoProducto) => { productos.push(nuevoProducto); };
export const eliminarProducto = (id) => { productos = productos.filter(p => p.id !== id); };