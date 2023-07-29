import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name: 'main',
    initialState: {
        headerConfig: {
            isFixed: false,
            alpha: false,
        }
    },
    reducers: {
        changeHeadConfigAction(state, { payload }) {
            state.headerConfig = payload
        }
    }
})

export const { changeHeadConfigAction }  = mainSlice.actions
export default mainSlice.reducer