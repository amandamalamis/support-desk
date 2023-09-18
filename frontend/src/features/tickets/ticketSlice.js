import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import ticketService from './ticketService'

const initialState = {
    tickets: [],
    ticket: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const ticketSlice = createSlice({
    name: 'ticket',
    initialState,
    reducers: {
        //function to reset to the initial state, set above
        reset: (state) => initialState
    },
    extraReducers: (builder) => {

    }
})

export const { reset } = ticketSlice.actions
export default ticketSlice.reducer