const getModifiersFromObject = (options, obj) => {
    const classes = [];
    Object.keys(obj).forEach((key) => {
        const configOptions = options[key];

        classes.push(...configOptions.classes.split(' '));

        if (!configOptions.modifiers) {
            console.warn(`There are no modifiers for ${key} custom elements`);
            return;
        }

        obj[key].forEach((m) => {
            if (!configOptions.modifiers[m]) {
                console.warn(
                    `No modifier ${m} found for ${key} custom elements`,
                );
                return;
            }
            classes.push(...configOptions.modifiers[m].split(' '));
        });
    });

    return classes;
};

const twc = (options) => ({
    bind: (el, binding) => {
        const elTag = el.tagName.toLowerCase();
        const { value } = binding;

        if (typeof value === 'string') {
            el.classList.add(...options[value].classes.split(' '));
        } else if (Array.isArray(value)) {
            value.forEach((item) => {
                try {
                    if (typeof item === 'string') {
                        el.classList.add(...options[item].classes.split(' '));
                    } else if (typeof item === 'object') {
                        el.classList.add(
                            ...getModifiersFromObject(options, item),
                        );
                    }
                } catch (err) {
                    console.error(err);
                }
            });
        } else if (typeof value === 'object') {
            el.classList.add(...getModifiersFromObject(options, value));
        } else {
            console.warn('Invalid value for v-twc');
            return;
        }
    },
});

export default twc;
