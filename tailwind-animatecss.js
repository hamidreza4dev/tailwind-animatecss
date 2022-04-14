const plugin = require('tailwindcss/plugin');
const { animationsConfig } = require('./config');

const { fallbackFix } = require('./fallback');

const tailwindAnimateCss = plugin.withOptions(
  function (options) {
    return function ({ addUtilities, theme, e }) {
      const animationDelayValues = theme('animationDelay');
      var animationDelayUtilities = Object.entries(animationDelayValues).map(
        ([key, value]) => {
          return {
            [`.${e(`animation-delay-${key}`)}`]: {
              'animation-delay': `${value}ms`,
            },
          };
        }
      );
      addUtilities(animationDelayUtilities);

      const animationsValues = theme('animations');
      var animationsUtilities = Object.entries(animationsValues).map(
        ([key, value]) => {
          return {
            [`.${e(`${key}`)}`]: {
              ...value,
            },
          };
        }
      );

      // prettier-ignore
      (function () {
        const animatedSpeed = options?.animatedSpeed ? options?.animatedSpeed : 1000;
        const heartBeatSpeed = options?.heartBeatSpeed ? options?.heartBeatSpeed : 1000;
        const hingeSpeed = options?.hingeSpeed ? options?.hingeSpeed : 2000;
        const bounceInSpeed = options?.bounceInSpeed ? options?.bounceInSpeed : 750;
        const bounceOutSpeed = options?.bounceOutSpeed ? options?.bounceOutSpeed : 750;
        const animationDelaySpeed = options?.animationDelaySpeed ? options?.animationDelaySpeed : 500;
        const opacity = options?.opacity ? options?.opacity : 1;
        const animationsLength = animationsConfig({
          animatedSpeed,
          heartBeatSpeed,
          hingeSpeed,
          bounceInSpeed,
          bounceOutSpeed,
          animationDelaySpeed,
          opacity,
        });

        if (Object.entries(animationsLength.animation).length === Object.entries(theme('animation')).length) {
          addUtilities(fallbackFix);
          addUtilities(animationsUtilities);
        }
      })();
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

        animationDelay: {
          1: '250',
          2: '500',
          3: '750',
          4: '1000',
          5: '1250',
          6: '1500',
          7: '1750',
          8: '2000',
          9: '2250',
          10: '2500',
        },
      },
    };
  }
);

module.exports = tailwindAnimateCss;
