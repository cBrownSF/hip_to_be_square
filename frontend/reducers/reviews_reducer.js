import { RECEIVE_REVIEW,RECEIVE_LISTING } from "../actions/listings_actions";


const reviewsReducer = (oldState={},action) => {
  Object.freeze(oldState)
  debugger;
    switch (action.type) {
    
      case RECEIVE_REVIEW:
        debugger;
        console.log('hit recieve review')
        return  Object.assign({}, oldState, { [action.review.id]: action.review })
      case RECEIVE_LISTING:
        debugger;
        return   Object.assign({}, oldState, action.reviews)
      default:
        'hit default'
        return oldState;
    }
}


export default reviewsReducer;
