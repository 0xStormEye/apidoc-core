/**
 * Python
 */
module.exports = {
    // find document blocks between """ and """
    docBlocksRegExp: /\"\"\"[\r\n]{0,2}([\s\S]+?)\n?(?:\s*)?[\r\n]{0,2}\"\"\"/g,
    // remove not needed tabs at the beginning
    inlineRegExp: /^(\t*)?/gm
};
