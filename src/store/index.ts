import { createStore } from 'vuex'
import {
  columnList, ColumnProps,
  postList, PostProps,
} from '@/mocks/testData'

export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}

export interface GlobalStoreProps {
  columns: ColumnProps[];
  posts: PostProps[];
  user: UserProps;
}

export default createStore<GlobalStoreProps>({
  state: {
    columns: columnList,
    posts: postList,
    user: {
      isLogin: false
    }
  },
  getters: {

  },
  mutations: {
    login(state) {
      state.user = {
        ...state.user,
        isLogin: true,
        name: 'fridolph'
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
