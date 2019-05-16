import { createStore } from "redux";

const CHECKIN = "@action/checkin";
const CHECKOUT = "@action/checkout";

const InitializeState = {
  checkInStatus: false,
  checkOutStatus: false,
  visitorName: "",
  checkInTimestamp: 0,
  checkOutTimestamp: 0
};

const reducer = (state = InitializeState, action) => {
  switch (action.type) {
    case CHECKIN:
      return {
        ...state,
        visitorName: action.payload.visitorName,
        checkInStatus: true,
        checkInTimestamp: Date.now(),
        checkOutTimestamp: 0
      };
    case CHECKOUT:
      return {
        ...state,
        checkInStatus: true,
        checkOutStatus: true,
        checkOutTimestamp: Date.now()
      };
    default:
      return Object.assign({}, state); // {} 에 state를 엎어서 리턴쓰
  }
};

const store = createStore(reducer);

//store가 바꼈을때 받을 핸들러를 등록
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: CHECKIN, payload: { visitorName: "아르바이트" } });
store.dispatch({
  type: CHECKOUT
});
store.dispatch({
  type: CHECKIN,
  payload: {
    visitorName: "강석진"
  }
});
