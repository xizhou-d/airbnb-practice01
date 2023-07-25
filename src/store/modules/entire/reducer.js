import { CHANGE_CURPAGE_ACTION, CHANGE_TOTAL_COUNT_ACTION, CHANGE_ROOM_LIST_ACTION, CHANGE_IS_LOADING_ACTION } from './contants'

const initialState = {
    curPage: 0,
    roomList: [],
    totalCount: 0,
    isLoading: false
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_CURPAGE_ACTION:
            return { ...state, curPage: action.curPage}
        case CHANGE_ROOM_LIST_ACTION:
            return { ...state, roomList: action.roomList}
        case CHANGE_TOTAL_COUNT_ACTION:
            return { ...state, totalCount: action.totalCount}
        case CHANGE_IS_LOADING_ACTION:
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

export default reducer