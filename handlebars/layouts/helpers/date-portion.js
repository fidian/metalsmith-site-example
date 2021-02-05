module.exports = function(options) {
    // An example to show how a helper can work. This could be set into the
    // default metadata much more easily.
    var content = options.fn(this);
    return content.split('T')[0];
};
