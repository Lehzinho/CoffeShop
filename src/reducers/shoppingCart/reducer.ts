/* eslint-disable @typescript-eslint/no-explicit-any */
import { coffeArray } from "@/assets/arrays/coffesArray";
import { ActionTypes } from "./actions";
import { produce } from "immer";

export interface CoffeOrder {
  id: number;
  title: string;
  description: string;
  attributes: string[];
  img: string;
  price: number;
  quantidade: number;
}

export interface CartState {
  order: CoffeOrder[];
  items: number;
  total: number;
}

export const cartReducer = (state: CartState, action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_NEW_COFFE: {
      const coffeIndex = state.order.findIndex(
        (coffe) => coffe.id === action.payload.coffeId
      );

      if (coffeIndex < 0) {
        return produce(state, (draft) => {
          const coffeItem = coffeArray.find(
            (coffe) => coffe.id === action.payload.coffeId
          );
          if (!coffeItem) return state;
          draft.order.push(coffeItem);
          draft.items += 1;
          draft.total = draft.total + coffeItem.price;
        });
      }

      return produce(state, (draft) => {
        draft.order[coffeIndex].quantidade++;
        draft.items += 1;
        draft.total += draft.order[coffeIndex].price;
      });
    }
    case ActionTypes.REMOVE_COFFE: {
      const coffeIndex = state.order.findIndex(
        (coffe) => coffe.id === action.payload.coffeId
      );

      if (coffeIndex < 0) return state;

      return produce(state, (draft) => {
        draft.total -= draft.order[coffeIndex].price;
        if (draft.order[coffeIndex].quantidade > 1) {
          draft.order[coffeIndex].quantidade--;
          draft.items -= 1;
        } else {
          draft.order.splice(coffeIndex, 1);
          draft.items -= 1;
        }
      });
    }
    case ActionTypes.REMOVE_ALL_COFFES: {
      const coffeIndex = state.order.findIndex(
        (coffe) => coffe.id === action.payload.coffeId
      );

      if (coffeIndex < 0) return state;

      return produce(state, (draft) => {
        const coffeOrder = draft.order[coffeIndex];
        draft.total -= coffeOrder.price * coffeOrder.quantidade;
        draft.items -= coffeOrder.quantidade;
        draft.order.splice(coffeIndex, 1);
      });
    }
    default:
      return state;
  }
};
