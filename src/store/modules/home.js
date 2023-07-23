import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getHomeGoodPriceData } from '@/services'

// 第一个参数为名称，方便在调试工具中调试
export const fetchHomeDataAction = createAsyncThunk('fetch/homemutidata', async () => {
        const res = await getHomeGoodPriceData()
        return res
    }
) 

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        goodPriceInfo: {}
    },
    reducers: {
        changeGoodPriceInfoAction(state, { payload }) {
            state.goodPriceInfo = payload
        }
    },
    extraReducers: {
        [fetchHomeDataAction.fulfilled](state, { payload }) {
            console.log('payload', payload)
            state.goodPriceInfo = payload
        }
    }
})

export const {changeGoodPriceInfoAction} = homeSlice.actions

export default homeSlice.reducer