import type { Product, ProductResponse } from '../types/product';

const API_URL = '/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`Erro ao buscar produtos: ${response.status}`);
  }

  const data: ProductResponse = await response.json();

  return data.products;
}