import { useEffect, useState } from 'react';
import type { Product } from '../types/product';
import { getProducts } from '../../services/api';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch {
        setError('Não foi possível carregar os produtos.');
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return { products, loading, error };
}