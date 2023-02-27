import Step from '../m-steps/src/m-step';

/* istanbul ignore next */
Step.install = function(Vue) {
  Vue.component(Step.name, Step);
};

export default Step;
