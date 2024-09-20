export function todoReducer(state, action) {
  switch (action.type) {
    case "changeStatus":
      return state.map((el) => {
        if (el.id === action.payload) {
          return { ...el, status: !el.status };
        } else {
          return el;
        }
      });
    case "delete":
      return state.filter((el) => el.id !== action.payload);
    case "addTask":
      if (!action.payload.trim()) {
        return state;
      }
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload,
          status: false,
        },
      ];
    default:
      return state;
  }
}
