import { createStore } from "redux";

const InitializeState = {
  load: false
};

const reducer = (state = InitializeState, action) => {
  switch (action.type) {
    case "change load status":
      return { ...state, load: !state.load };
    default:
      return Object.assign({}, state); // {} 에 state를 엎어서 리턴쓰
  }
};

const store = createStore(reducer);

//store가 바꼈을때 받을 핸들러를 등록
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: "change load status" });

store.dispatch({ type: "change load status" });
