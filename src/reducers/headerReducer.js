const initialState = {
    openMenu: false
}
const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "open":
            state.openMenu = true
            break;
        case "close":
            state.openMenu = false
            break;
        default:
            break;
    }
    return { ...state }
}
export default headerReducer