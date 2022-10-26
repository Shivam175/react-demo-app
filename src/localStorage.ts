import { BookInterface } from "./@types/book";

type stateArg = {
    books: BookInterface[];
}

export const loadState: () => BookInterface[] = () => {
    try {
      const serializedState = localStorage.getItem('state');
      if (serializedState === null) {
        return [];
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  };
  
  export const saveState = (state: BookInterface[]) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
    } catch (err) {
      // Ignore write errors.
    }
  };