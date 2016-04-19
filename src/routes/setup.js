import m from "mithril";
import keys from "lodash.mapkeys";

import prefix from "../lib/prefix";

export default function() {
    m.route(document.body, prefix("/setup"), keys({
        "/setup" : require("../pages/setup")
    }, function(value, key) {
        return prefix(key);
    }));
}
