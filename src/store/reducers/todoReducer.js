const intialState = {
  todos: [
    {
      id: 1,
      title: "Menyapu",
      complated: false,
    },
    {
      id: 2,
      title: "Mengoding",
      complated: false,
    },
  ],
};

const todoReducer = (state = intialState, action) => {
  const { type, payload } = action;
  switch (type) {
    default: {
      return {
        ...state,
      };
    }
  }
};

export default todoReducer;
