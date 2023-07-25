import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getHomeGoodPriceData, getHomeHighScoreData, getHomeDiscountData, getHomeRecommendData, getHomeLongForData } from '@/services'

// 第一个参数为名称，方便在调试工具中调试
export const fetchHomeDataAction = createAsyncThunk('fetch/homemutidata', (payload, { dispatch }) => {
        getHomeGoodPriceData().then(res => { 
            dispatch(changeGoodPriceInfoAction(res))
        })
        getHomeHighScoreData().then(res => {
            dispatch(changeHighScoreInfoAction(res))
        })
        getHomeDiscountData().then(res => {
            dispatch(changeDiscountInfoAction(res))
        })
        getHomeRecommendData().then(res => {
            dispatch(changeRecommendInfoAction(res))
        })
        getHomeLongForData().then(res => {
            dispatch(changeLongForInfoAction(res))
        })
    }
) 

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        goodPriceInfo: {},
        highScoreInfo: {},
        discountInfo: {},
        recommendInfo: {},
        loangForInfo: {},
    },
    reducers: {
        changeGoodPriceInfoAction(state, { payload }) {
            state.goodPriceInfo = payload
        },
        changeHighScoreInfoAction(state, { payload }) {
            state.highScoreInfo = payload
        },
        changeDiscountInfoAction(state, { payload }) {
            state.discountInfo = payload
        },
        changeRecommendInfoAction(state, { payload }) {
            state.recommendInfo = payload
        },
        changeLongForInfoAction(state, { payload }) {
            state.loangForInfo = payload
        }
    },
    // extraReducers: {
        // [fetchHomeDataAction.fulfilled](state, { payload }) {
        //     state.goodPriceInfo = payload
        // }
    // }
})

export const {
    changeGoodPriceInfoAction,
    changeHighScoreInfoAction,
    changeDiscountInfoAction,
    changeRecommendInfoAction,
    changeLongForInfoAction
} = homeSlice.actions

export default homeSlice.reducer