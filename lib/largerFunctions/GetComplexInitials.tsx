import { getInitials } from "../utils"

const getLongInitials = (textArray :string[]) => {
    if (textArray.length > 2) {
            return textArray[0].charAt(0) + textArray[2].charAt(0)
    } else {
        return getInitials(textArray.join(' '))
    }
}

export const getComplexInitials = (text: string) => {
    const textArray = text.split(' ')
    let newTextArray = []

    if (textArray.length <= 2) {
        return getInitials (text)
    } else {
        newTextArray = textArray[0].includes('.') ? textArray.slice(1) : textArray
    }

    return getLongInitials(newTextArray)
}
