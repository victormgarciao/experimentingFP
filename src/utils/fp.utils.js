export function flowAsync(...functionsList) {
    return async function runAllFunctionsWithLastResult(args) {
        let lastResult = args;

        for (let index = 0; index < functionsList.length; index++) {
            const currentFunction = functionsList[index];
            lastResult = await Promise.resolve(currentFunction(lastResult));
        }

        return lastResult;
    };
};

