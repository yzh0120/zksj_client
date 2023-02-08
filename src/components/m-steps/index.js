import Steps from './src/m-steps';

/* istanbul ignore next */
Steps.install = function(Vue) {
  Vue.component(Steps.name, Steps);
};

export default Steps;
