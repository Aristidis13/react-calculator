export const pressBtn = (e) => {
    return {
        text: e.target.innerText,
        type: e.target.dataset.actionType
    }
}
