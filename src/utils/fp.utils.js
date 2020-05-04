import { isEmpty } from 'lodash';


export function flowAsync(...functionsList) {
    
    return async function handleResult(...args) {
        const [ currentFunction, ...nextFunctionsList] = functionsList;

        const currentResult = await Promise.resolve(currentFunction(...args));

        return isEmpty(nextFunctionsList)
            ? currentResult
            : flowAsync(...nextFunctionsList)(currentResult);
    };
};