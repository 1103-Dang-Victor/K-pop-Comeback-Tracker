
export const parseCommas = (input: string):string => {
    if (input.includes(",")) {
        let commaLocation = input.indexOf(",");
        let spaceLocation = input[input.length-1];
        let newString;

        if ((commaLocation === 0) || (spaceLocation === " ")) {
            newString = input.split(",").join("");
            return newString;
        } else {
            return input;
        }   
    }

    return "error";
}