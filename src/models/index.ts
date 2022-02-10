import { Effect, Reducer } from 'umi';

export interface CounterModelState {
  collapsed: boolean;
  activeRoute: string;
}

export interface CounterModelType {
  namespace: string;
  state: CounterModelState;
  effects: {
    changeCollapsed?: Effect;
    changeActiveRoute?: Effect;
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
    activeRoute:localStorage.getItem('activeRoute')||'/'
  },

  effects: {
    *changeCollapsed({ payload }, { put }) {
      yield put({
        type: 'save',
        payload: {
          collapsed: payload.collapsed,
        },
      });
    },
    *changeActiveRoute({ payload }, { put }) {
      yield put({
        type: 'save',
        payload: {
          activeRoute: payload.activeRoute,
        },
      });
      localStorage.setItem('activeRoute',payload.activeRoute)
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
