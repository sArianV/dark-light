export default (state, action) => {
    switch (action.type) {
        case "GET_ALL_GIVEAWAYS":
            return {
                ...state,
                giveaways: action.payload
            }
        default:
            return state;
    }
}