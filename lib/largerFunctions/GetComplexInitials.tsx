import { getInitials } from "../utils"

const getLongInitials = (textArray :string[]) => {
    if (textArray.length > 2) {
            return textArray[0].charAt(0) + textArray[2].charAt(0)
    } else {
        return getInitials(textArray.join(' '))
    }
}

export const getComplexInitials = (text: string) => {
    let textArray = text.split(' ')
    let newTextArray = []

    if (textArray.length <= 2) {
        return getInitials (text)
    } else {
        textArray[0].includes('.') ? newTextArray = textArray.splice(1) :newTextArray = textArray
    }

    return getLongInitials(newTextArray)
}

