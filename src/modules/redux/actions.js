export const pressBtn = (event) => {
    return {
        value: event.target.innerText,
        type: event.target.dataset.buttonType
    }
}