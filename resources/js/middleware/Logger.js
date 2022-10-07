export const myLogger = (store) => (next) => (action) => {
    console.log("Adding log message");
    next(action);
}
