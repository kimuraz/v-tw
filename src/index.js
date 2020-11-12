import tw from './directives/tw';
import twc from './directives/twc';
import twgrid from './directives/twgrid';
import twflex from './directives/twflex';

import defaultOptions from './options/defaultOptions';

const VTW = {
    install: (Vue, options) => {
        if (Vue.VTWInstalled) {
            return;
        }

        Vue.VTWInstalled = true;

        Vue.directive('tw', tw(options.tw || defaultOptions.tw));
        Vue.directive('twc', twc(options.containers || defaultOptions.containers));
        Vue.directve('twgrid', twgrid);
        Vue.directve('twflex', twflex);
    },
};

export default VTW;
