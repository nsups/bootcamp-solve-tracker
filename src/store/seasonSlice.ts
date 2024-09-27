import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import ParticipantTa from "../types/Participant";
import { getTabularData } from "../utils/tabularData";
import { ParticipantTabularData } from "../types/Participant";
import { currentSeason } from "../data";
interface SeasonState {
    seasonId: string;
    participants: ParticipantTabularData[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
};

const initialState: SeasonState = {
    seasonId: currentSeason,
    participants: [], 
    status: "idle"
}


export const changeSeason = createAsyncThunk<ParticipantTabularData[], { seasonId: string }, { rejectValue: string} >(
    "season/changeSeason",
    async({ seasonId }, { rejectWithValue }) =>{
        try {
            return await getTabularData(seasonId) as ParticipantTabularData[];
        } catch (error) {
            return rejectWithValue("Something went wrong");
        }
    }
);

const seasonSlice = createSlice({
    name: "season",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(changeSeason.pending, (state) => {
            state.status = "loading";
        })
        .addCase(changeSeason.fulfilled, (state, action) => {
            state.seasonId = action.meta.arg.seasonId;
            state.participants = action.payload;
            state.status = "succeeded";
        })
        .addCase(changeSeason.rejected, (state) => {
            state.participants = [];
            state.status = "failed";
        })
    }
});

const seasonReducer = seasonSlice.reducer;
export default seasonReducer;