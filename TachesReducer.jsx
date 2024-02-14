export const initialState = {
  taches: [],
  tachesDone: [],
};

export function tachesReducer(state, action) {
  switch (action.type) {
    case 'add_tache':
      return {
        ...state,
        taches: [...state.taches, {id: Date.now(), content: action.payload}],
      };
    case 'delete_tache':
      return {
        ...state,
        taches: state.taches.filter(tache => tache.id !== action.payload),
      };
    case 'done_tache':
      return {
        ...state,
        tachesDone: [
          ...state.tachesDone,
          {id: this.id, content: action.payload}, //je voulais tenter de passer la tache cliquer comme objet pour qu'il puisse l'ajouter a mon tableau taches done
        ],
      };

    default:
      throw new Error();
  }
}
