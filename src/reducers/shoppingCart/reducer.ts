export interface CoffeOrder {
  nome: string;
  descricao: string;
  tipo: string[];
  img: string;
  preco: number;
  quantidade: number;
}

export interface CartState {
  order: CoffeOrder[];
  total: number;
}

export const cartReducer = (state: CartState, action: any) => {
  return state;
};
