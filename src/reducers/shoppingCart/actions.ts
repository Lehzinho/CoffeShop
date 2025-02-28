export enum ActionTypes {
  ADD_NEW_COFFE = "ADD_NEW_COFFE",
  REMOVE_COFFE = "REMOVE_COFFE",
}

export const addNewCoffe = (coffeId: number) => {
  return { type: ActionTypes.ADD_NEW_COFFE, payload: { coffeId } };
};

export const removeOldCoffe = (coffeId: number) => {
  return { type: ActionTypes.REMOVE_COFFE, payload: { coffeId } };
};
