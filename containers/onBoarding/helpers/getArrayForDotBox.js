const getArrayForDotBox = (length) => {
    let dotBoxArray = [];
    for (let index = 1; index < length; index++) {
        dotBoxArray.push(index);
    }
    return dotBoxArray;
};
export default getArrayForDotBox;
