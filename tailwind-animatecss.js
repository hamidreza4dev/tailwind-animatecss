const plugin = require('tailwindcss/plugin');
const animationsConfig = require('./config');

const { fallbackFix, defaultAnimation } = require('./fallback');

const tailwindAnimateCss = plugin.withOptions(
  function (options) {
    return function ({ addUtilities, theme, e }) {
      const values = theme('animations');
      var utilities = Object.entries(values).map(([key, value]) => {
        return {
          [`.${e(`${key}`)}`]: {
            ...value,
          },
        };
      });
      addUtilities(fallbackFix);
      addUtilities(utilities);
    };
  },
  // prettier-ignore
  function (options) {
    const animatedSpeed = options?.animatedSpeed ? options?.animatedSpeed : 1000;
    const heartBeatSpeed = options?.heartBeatSpeed ? options?.heartBeatSpeed : 1000;
    const hingeSpeed = options?.hingeSpeed ? options?.hingeSpeed : 2000;
    const bounceInSpeed = options?.bounceInSpeed ? options?.bounceInSpeed : 750;
    const bounceOutSpeed = options?.bounceOutSpeed ? options?.bounceOutSpeed : 750;
    const animationDelaySpeed = options?.animationDelaySpeed ? options?.animationDelaySpeed : 500;
    const opacity = options?.opacity ? options?.opacity : 1;

    return {
      theme: {
        extend: {
          ...animationsConfig({
            animatedSpeed,
            heartBeatSpeed,
            hingeSpeed,
            bounceInSpeed,
            bounceOutSpeed,
            animationDelaySpeed,
            opacity,
          }),
        },
      },
    };
  }
);

module.exports = tailwindAnimateCss;
