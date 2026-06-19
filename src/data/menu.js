export const menuData = {
  entradas: [
    { name: 'Bolo do Caco com Paté de Azeitona', price: 4.80 },
    { name: 'Bolo do Caco com Manteiga de Alho', price: 3.80 },
    { name: 'Espetada de Camarão', price: 19.50 },
    { name: 'Lapas Grelhadas', price: 22.50 },
    { name: 'Mexilhões', price: 17.50 },
    { name: 'Salada de Atum', price: 13.00 },
  ],
  sopas: [
    { name: 'Sopa de Legumes', price: 4.80 },
    { name: 'Sopa de Peixe', price: 7.50 },
    { name: 'Sopa de Tomate', price: 5.50 },
  ],
  peixe: [
    { name: 'Bacalhau à Lagareiro', price: 27.50 },
    { name: 'Polvo à Lagareiro', price: 27.50 },
    { name: 'Bife de Atum', price: 21.50 },
    { name: 'Posta Espada Grelhada', price: 19.50 },
    { name: 'Filete Espada Grelhado', price: 22.50 },
    { name: 'Filete Espada c/Banana', price: 22.50 },
    { name: 'Sardinha Grelhada', price: 17.50 },
    { name: 'Espetada Peixe e Gambas', price: 27.50 },
    { name: 'Salmão Grelhado', price: 22.50 },
  ],
  carne: [
    { name: 'Bife do Lombo com Pimenta', price: 22.50 },
    { name: 'Bife do Lombo com Cogumelos', price: 22.50 },
    { name: 'Espetada Regional', price: 22.50 },
    { name: 'Espetada Peito de Frango', price: 18.50 },
    { name: 'Costeletas de Borrego', price: 21.50 },
    { name: 'Picado Vaca ou Frango 250g', price: 15.00 },
    { name: 'Picado Vaca ou Frango 500g', price: 27.50 },
  ],
  massa: [
    { name: 'Esparguete Bolonhesa', price: 14.50 },
    { name: 'Tagliatelle de Mexilhão', price: 17.50 },
  ],
  paraDuasPessoas: [
    { name: 'Arroz de Marisco', price: 34.00 },
    { name: 'Misto de Peixe', price: 57.50 },
  ],
  vegetarianos: [
    { name: 'Tagliatelle com Cogumelos', price: 17.00 },
  ],
  sandes: [
    { name: 'Sandes de Queijo ou Fiambre no Bolo do Caco', price: 3.80 },
    { name: 'Sandes Mista no Bolo do Caco', price: 3.90 },
    { name: 'Sandes de Peixe Espada no Bolo do Caco', price: 7.90 },
    { name: 'Sandes de Atum no Bolo do Caco', price: 5.90 },
    { name: 'Prego Simples no Bolo do Caco', price: 6.90 },
    { name: 'Prego Especial no Bolo do Caco', price: 7.90 },
    { name: 'Prego Especial no Bolo do Caco com Batata Frita', price: 9.80 },
    { name: 'Prego Vegan', price: 8.80 },
    { name: 'Dose Batata Frita', price: 4.60 },
  ],
}

export const menuCategories = [
  { key: 'entradas', label: 'Entradas' },
  { key: 'sopas', label: 'Sopas' },
  { key: 'peixe', label: 'Peixe' },
  { key: 'carne', label: 'Carne' },
  { key: 'massa', label: 'Massa' },
  { key: 'sandes', label: 'Sandes' },
  { key: 'vegetarianos', label: 'Vegetarianos' },
  { key: 'paraDuasPessoas', label: 'Para Duas Pessoas' },
]

export const featuredDishes = [
  {
    tag: 'PEIXE',
    name: 'Filete Espada c/Banana',
    description: 'O prato mais icónico da ilha. Peixe-espada grelhado com banana da Madeira.',
    price: 22.50,
    image: 'filete-banana.jpg',
  },
  {
    tag: 'ENTRADAS',
    name: 'Lapas Grelhadas',
    description: 'Lapas frescas grelhadas com manteiga de alho e limão. Entrada obrigatória em Madeira.',
    price: 22.50,
    image: 'lapas.jpg',
  },
  {
    tag: 'CARNE',
    name: 'Espetada Regional',
    description: 'Carne tenra em espeto de loureiro, servida com os acompanhamentos tradicionais.',
    price: 22.50,
    image: 'espetada.jpg',
  },
]
