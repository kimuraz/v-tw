const tw = (options) => ({
    bind(el, binding) {
        const elTag = el.tagName.toLowerCase();
        const { arg: altTag, modifiers } = binding;

        if (!options[elTag] && !options[altTag]) {
            console.warn(`No options found for ${altTag || elTag} elements`);
            return;
        }

        const configOptions = altTag ? options[altTag] : options[elTag];

        el.classList.add(...configOptions.classes.split(' '));

        if (modifiers) {
            Object.keys(modifiers).forEach((m) => {
                if (configOptions?.modifiers[m]) {
                    el.classList.add(...configOptions.modifiers[m].split(' '));
                } else {
                    console.warn(
                        `No modifier ${m} found for ${
                            altTag || elTag
                        } elements`,
                    );
                }
            });
        }
    },
});

export default tw;
