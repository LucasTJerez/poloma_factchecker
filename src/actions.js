
function simpleAction(type) {
    return {
        type: type
    }
};

export const LOAD_SENTENCES = 'LOAD_SENTENCES';
export const loadSentences = (sentences) => {
    return {
        type: LOAD_SENTENCES,
        sentences: sentences
    }
}


export const START = 'START';
export const startUp = (start) => {
    return {
        type: START,
        start: start,
    }
}
