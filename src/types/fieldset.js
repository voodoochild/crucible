"use strict";

var m      = require("mithril"),
    assign = require("lodash.assign"),

    children = require("./children");

module.exports = {
    // Ignore this component in the data hierarchy
    decorative : true,

    view : function(ctrl, options) {
        return m("fieldset", { class : options.class },
            options.details.name ? m("legend", options.details.name) : null,
            m.component(children, assign({}, options, {
                details : options.details.children
            }))
        );
    }
};
