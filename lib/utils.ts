export const getInitials = ( text :string ) => {
    if (text.length < 2) {
        return text.charAt(0) + '_'
    }
    let textArray = text.split(' ')
    
    if (textArray.length > 1) {
        return textArray[0].charAt(0) + textArray[1].charAt(0)
    }
    else {
        return textArray[0].charAt(0) + textArray[0].charAt(1)
    }
}


export const padNum = (num: number) => {
    return num.toString().length === 1 ? '0' + num.toString() : num.toString()
}