import { combineReducers } from 'redux'
import * as Actions from './actions'
import { DummySentences } from './dummy/DummySentences'

function sentencesReducer(state = { sentences: DummySentences(), start: false }, action) {
    switch (action.type) {
        case Actions.LOAD_SENTENCES:
            return { ...state, sentences: action.sentences }
        case Actions.START:
            return { ...state, start: action.start }
        default:
            return (
                state
            )
    }
}

const combinedReducers = combineReducers({
    sent: sentencesReducer,

});

export default combinedReducers