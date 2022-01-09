export const pressBtn = (event) => {
    return {
        text: event.target.innerText,
        type: event.target.dataset.buttonType
    }
}
