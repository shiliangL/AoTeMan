import * as batteryIntroduceApi from './service';

export default {
  namespace: 'batteryIntroduce',
  state: {

  },

  effects: {
    * effectsDemo(_, { call, put }) {
      const { status, data } = yield call(batteryIntroduceApi.demo, {});
      if (status === 'ok') {
        yield put({ type: 'save',
          payload: {
            topData: data,
          } });
      }
    },
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },

};
