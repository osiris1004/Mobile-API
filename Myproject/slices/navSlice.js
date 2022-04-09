import { createSlice } from "@reduxjs/toolkit"

// initial values
const initialState ={
    origin: null,
    destination: null,
    travelTimeInformation: null
}

export const navSlice = createSlice({
    // give the slice a name
    name: 'nav',
    initialState,

    /*
    when we push information in to that data layer, we need  dispatching an action in the data layer
     */

    reducers :{
        //creat those action
        // state is the current state 
        /* action is basically when i make that dispatch, from the component to the data layer. or we can say
        change this piece of information in the data layer, that's called an action
        */
        setOrigin : (state, action) =>{
            // when i get an action come through, iwant to change the state of the origin
            //payload is information inside an action
            state.origin = action.payload
        },
        setDestination : (state, action) =>{
            // when i get an action come through, iwant to change the state of the origin
            //payload is information inside an action
            state.destination = action.payload
        },
        setTravelTimeInformation : (state, action) =>{
            // when i get an action come through, iwant to change the state of the origin
            //payload is information inside an action
            state.travelTimeInformation = action.payload
        }
    }
})


/*
we have created this beautifully data layer, we need to expose the rest of my application to those action so that 
we acn use the action 
*/

export const {setOrigin, setDestination, setTravelTimeInformation} = navSlice.actions


// selectors are use to fetch information from the data layer
// nave is the name of the slide created 
export const selectOrigin = (state) => state.nav.origin
export const selectDestination = (state) => state.nav.destination
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation

export default navSlice.reducer;
