import { getEntireRoomList } from '@/services/modules/entire'
import { CHANGE_CURPAGE_ACTION, CHANGE_TOTAL_COUNT_ACTION, CHANGE_ROOM_LIST_ACTION, CHANGE_IS_LOADING_ACTION } from './contants'

export const changeCurPageAction = (curPage) => ({ type: CHANGE_CURPAGE_ACTION, curPage })
export const changeTotalCountAction = (totalCount) => ({ type: CHANGE_TOTAL_COUNT_ACTION, totalCount })
export const changeRoomListAction = (roomList) => ({ type: CHANGE_ROOM_LIST_ACTION, roomList })
export const changeIsLoadingAction = (isLoading) => ({ type: CHANGE_IS_LOADING_ACTION, isLoading })

export function fetchEntireDataAction(page = 0) {
    return async function(dispatch, getState) {
        dispatch(changeIsLoadingAction(true))
        /** 修改 curPage */
        dispatch(changeCurPageAction(page))
        const res = await getEntireRoomList(page * 20)
        dispatch(changeIsLoadingAction(false))
        const totalCount = res.totalCount
        const roomList = res.list

        dispatch(changeTotalCountAction(totalCount))
        dispatch(changeRoomListAction(roomList))
    }
}