const compose = (...funcs) => (comp) => {
    return funcs.reduceRight(
        ( prevRes, fn ) => fn(prevRes), comp );
};

export default compose;