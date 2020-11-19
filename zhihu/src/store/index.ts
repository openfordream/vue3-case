import { createStore } from 'vuex'

interface State {
  userName: string
}

export default createStore({
  	state:{
  	userName:'王大合'
  	}
});