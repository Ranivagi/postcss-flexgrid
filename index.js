module.exports = (opts = {}) => {
    return {
        postcssPlugin: "postcss-flexgrid",
        Once(root) { root.walkDecls((decl) => {
            const { prop, value } = decl;

            if (/^(align|justify|place)-(items|content|self)$/.test(prop)) {
                decl.value = value?.split(/\s+/)
                    .map((value1) => (["start", "end"].includes(value1) ? `flex-${value1}` : value1))
                    .join(" ");
            }
            if (/^(|row-|column-)gap$/.test(prop)) {
                decl.cloneBefore({ prop: `grid-${prop}`, value });
            }
        })}
    };
};
module.exports.postcss = true;
