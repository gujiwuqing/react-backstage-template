import { Effect, Reducer } from 'umi';

export interface CounterModelState {
  collapsed: boolean;
}

export interface CounterModelType {
  namespace: string;
  state: CounterModelState;
  effects: {
    changeCollapsed?: Effect;
  };
  reducers: {
    save: Reducer<CounterModelState>;
    // 启用 immer 之后
    // save: ImmerReducer<CounterModelState>;
  };
}

const CounterModel: CounterModelType = {
  namespace: 'global',
  state: {
    collapsed: false,
  },

  effects: {
    *changeCollapsed({ payload }, { put }) {
      console.log(payload);
      yield put({
        type: 'save',
        payload: {
          collapsed: payload.collapsed,
        },
      });
    },

  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};

export default CounterModel;
