import tw from './src/directives/tw';
import twc from './src/directives/twc';
import twgrid from './src/directives/twgrid';
import twflex from './src/directives/twflex';

import defaultOptions from './options';

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
