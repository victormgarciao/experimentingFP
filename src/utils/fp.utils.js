import { isEmpty, drop, first } from 'lodash';

export const removeFirstItemFrom = drop;
export const selectFirstItemFrom = first;


export function flowAsync(...functionsList) {
    
    return async function handleResult(...args) {
        const newFunctionsList = functionsList;
        const currentFunction = selectFirstItemFrom(newFunctionsList);

        const currentResult = await Promise.resolve(currentFunction(...args));
        

        const nextFunctionsList = removeFirstItemFrom(newFunctionsList);

        return isEmpty(nextFunctionsList)
            ? currentResult
            : flowAsync(...nextFunctionsList)(currentResult);
    };
};