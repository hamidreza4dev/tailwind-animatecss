const keyframes = require('./keyframes/keyframes');
const keyframesLightSpeed = require('./keyframes/lightspeed');
const keyframesFlip = require('./keyframes/flip');
const keyframesRotateIn = require('./keyframes/rotateIn');
const keyframesRotateOut = require('./keyframes/rotateOut');
const keyframesRoll = require('./keyframes/roll');
const keyframesZoomIn = require('./keyframes/zoomIn');
const keyframesZoomOut = require('./keyframes/zoomOut');
const keyframesBounceIn = require('./keyframes/bounceIn');
const keyframesBounceOut = require('./keyframes/bounceOut');
const keyframesSlideIn = require('./keyframes/slideIn');
const keyframesSlideOut = require('./keyframes/slideOut');
const keyframesFadeIn = require('./keyframes/fadeIn');
const keyframesFadeOut = require('./keyframes/fadeOut');
const keyframesBackIn = require('./keyframes/backIn');
const keyframesBackOut = require('./keyframes/backOut');

const { defaultAnimation, defaultKeyframes } = require('./fallback');

const animationsConfig = function ({
  animatedSpeed,
  heartBeatSpeed,
  hingeSpeed,
  bounceInSpeed,
  bounceOutSpeed,
  animationDelaySpeed,
  opacity,
}) {
  return {
    keyframes: {
      ...defaultKeyframes,
      bounce: keyframes.keyframeBounce,
      flash: keyframes.keyframeFlash,
      pulse: keyframes.keyframePulse,
      rubberBand: keyframes.keyframeRubberBand,
      shakeX: keyframes.keyframeShakeX,
      shakeY: keyframes.keyframeShakeY,
      headShake: keyframes.keyframeHeadShake,
      swing: keyframes.keyframeSwing,
      tada: keyframes.keyframeTada,
      wobble: keyframes.keyframeWobble,
      jello: keyframes.keyframeJello,
      heartBeat: keyframes.keyframeHeartBeat,
      hinge: keyframes.keyframeHinge,
      jackInTheBox: keyframes.keyframeJackInTheBox,
      lightSpeedInLeft: keyframesLightSpeed.keyframeLightSpeedInLeft,
      lightSpeedInRight: keyframesLightSpeed.keyframeLightSpeedInRight,
      lightSpeedOutLeft: keyframesLightSpeed.keyframeLightSpeedOutLeft,
      lightSpeedOutRight: keyframesLightSpeed.keyframeLightSpeedOutRight,
      flip: keyframesFlip.keyframeFlip,
      flipInX: keyframesFlip.keyframeFlipInX,
      flipInY: keyframesFlip.keyframeFlipInY,
      flipOutX: keyframesFlip.keyframeFlipOutX,
      flipOutY: keyframesFlip.keyframeFlipOutY,
      rotateIn: keyframesRotateIn.keyframeRotateIn,
      rotateInDownLeft: keyframesRotateIn.keyframeRotateInDownLeft,
      rotateInDownRight: keyframesRotateIn.keyframeRotateInDownRight,
      rotateInUpLeft: keyframesRotateIn.keyframeRotateInUpLeft,
      rotateInUpRight: keyframesRotateIn.keyframeRotateInUpRight,
      rotateOut: keyframesRotateOut.keyframeRotateOut,
      rotateOutDownLeft: keyframesRotateOut.keyframeRotateOutDownLeft,
      rotateOutDownRight: keyframesRotateOut.keyframeRotateOutDownRight,
      rotateOutUpLeft: keyframesRotateOut.keyframeRotateOutUpLeft,
      rotateOutUpRight: keyframesRotateOut.keyframeRotateOutUpRight,
      rollIn: keyframesRoll.keyframeRollIn,
      rollOut: keyframesRoll.keyframeRollOut,
      zoomIn: keyframesZoomIn.keyframeZoomIn,
      zoomInDown: keyframesZoomIn.keyframeZoomInDown,
      zoomInLeft: keyframesZoomIn.keyframeZoomInLeft,
      zoomInRight: keyframesZoomIn.keyframeZoomInRight,
      zoomInUp: keyframesZoomIn.keyframeZoomInUp,
      bounceIn: keyframesBounceIn.keyframeBounceIn,
      bounceInDown: keyframesBounceIn.keyframeBounceInDown,
      bounceInLeft: keyframesBounceIn.keyframeBounceInLeft,
      bounceInRight: keyframesBounceIn.keyframeBounceInRight,
      bounceInUp: keyframesBounceIn.keyframeBounceInUp,
      bounceOut: keyframesBounceOut.keyframeBounceOut,
      bounceOutDown: keyframesBounceOut.keyframeBounceOutDown,
      bounceOutLeft: keyframesBounceOut.keyframeBounceOutLeft,
      bounceOutRight: keyframesBounceOut.keyframeBounceOutRight,
      bounceOutUp: keyframesBounceOut.keyframeBounceOutUp,
      zoomOut: keyframesZoomOut.keyframeZoomOut,
      zoomOutDown: keyframesZoomOut.keyframeZoomOutDown,
      zoomOutLeft: keyframesZoomOut.keyframeZoomOutLeft,
      zoomOutRight: keyframesZoomOut.keyframeZoomOutRight,
      zoomOutUp: keyframesZoomOut.keyframeZoomOutUp,
      slideInDown: keyframesSlideIn.keyframeSlideInDown,
      slideInLeft: keyframesSlideIn.keyframeSlideInLeft,
      slideInRight: keyframesSlideIn.keyframeSlideInRight,
      slideInUp: keyframesSlideIn.keyframeSlideInUp,
      slideOutDown: keyframesSlideOut.keyframeSlideOutDown,
      slideOutLeft: keyframesSlideOut.keyframeSlideOutLeft,
      slideOutRight: keyframesSlideOut.keyframeSlideOutRight,
      slideOutUp: keyframesSlideOut.keyframeSlideOutUp,
      fadeIn: keyframesFadeIn.keyframeFadeIn,
      fadeInDown: keyframesFadeIn.keyframeFadeInDown,
      fadeInDownBig: keyframesFadeIn.keyframeFadeInDownBig,
      fadeInLeft: keyframesFadeIn.keyframeFadeInLeft,
      fadeInLeftBig: keyframesFadeIn.keyframeFadeInLeftBig,
      fadeInRight: keyframesFadeIn.keyframeFadeInRight,
      fadeInRightBig: keyframesFadeIn.keyframeFadeInRightBig,
      fadeInTopLeft: keyframesFadeIn.keyframeFadeInTopLeft,
      fadeInTopRight: keyframesFadeIn.keyframeFadeInTopRight,
      fadeInBottomLeft: keyframesFadeIn.keyframeFadeInBottomLeft,
      fadeInBottomRight: keyframesFadeIn.keyframeFadeInBottomRight,
      fadeInUp: keyframesFadeIn.keyframeFadeInUp,
      fadeInUpBig: keyframesFadeIn.keyframeFadeInUpBig,
      fadeOut: keyframesFadeOut.keyframeFadeOut,
      fadeOutDown: keyframesFadeOut.keyframeFadeOutDown,
      fadeOutDownBig: keyframesFadeOut.keyframeFadeOutDownBig,
      fadeOutLeft: keyframesFadeOut.keyframeFadeOutLeft,
      fadeOutLeftBig: keyframesFadeOut.keyframeFadeOutLeftBig,
      fadeOutRight: keyframesFadeOut.keyframeFadeOutRight,
      fadeOutRightBig: keyframesFadeOut.keyframeFadeOutRightBig,
      fadeOutUp: keyframesFadeOut.keyframeFadeOutUp,
      fadeOutUpBig: keyframesFadeOut.keyframeFadeOutUpBig,
      fadeOutTopLeft: keyframesFadeOut.keyframeFadeOutTopLeft,
      fadeOutTopRight: keyframesFadeOut.keyframeFadeOutTopRight,
      fadeOutBottomLeft: keyframesFadeOut.keyframeFadeOutBottomLeft,
      fadeOutBottomRight: keyframesFadeOut.keyframeFadeOutBottomRight,
      backInDown: keyframesBackIn.keyframeBackInDown,
      backInUp: keyframesBackIn.keyframeBackInUp,
      backInLeft: keyframesBackIn.keyframeBackInLeft,
      backInRight: keyframesBackIn.keyframeBackInRight,
      backOutDown: keyframesBackOut.keyframeBackOutDown,
      backOutUp: keyframesBackOut.keyframeBackOutUp,
      backOutLeft: keyframesBackOut.keyframeBackOutLeft,
      backOutRight: keyframesBackOut.keyframeBackOutRight,
    },
    animations: {
      'animate-animated': {
        'animation-duration': `${animatedSpeed}ms`,
        'animation-fill-mode': 'both',
      },
      'animate-infinite': {
        'animation-iteration-count': 'infinite',
      },
      'animate-repeat-1': {
        'animation-repeat': 1,
      },
      'animate-repeat-2': {
        'animation-repeat': 2,
      },
      'animate-repeat-3': {
        'animation-repeat': 3,
      },
      'animate-delay': {
        'animation-delay': `${animationDelaySpeed}ms`,
      },
      'animate-delay-1s': {
        'animation-delay': `1000ms`,
      },
      'animate-delay-2s': {
        'animation-delay': `2000ms`,
      },
      'animate-delay-3s': {
        'animation-delay': `3000ms`,
      },
      'animate-delay-4s': {
        'animation-delay': `4000ms`,
      },
      'animate-delay-5s': {
        'animation-delay': `5000ms`,
      },
      'animate-fast': {
        'animation-duration': `800ms`,
      },
      'animate-faster': {
        'animation-duration': `500ms`,
      },
      'animate-slow': {
        'animation-duration': `2000ms`,
      },
      'animate-slower': {
        'animation-duration': `3000ms`,
      },
    },
    animation: {
      ...defaultAnimation,
      bounce: 'bounce',
      flash: 'flash',
      pulse: 'pulse',
      rubberBand: 'rubberBand',
      shakeX: 'shakeX',
      shakeY: 'shakeY',
      headShake: 'headShake ease-in-out',
      swing: 'swing',
      tada: 'tada',
      wobble: 'wobble',
      jello: 'jello',
      heartBeat: `heartBeat ${heartBeatSpeed}ms ease-in-out`,
      hinge: `hinge ${hingeSpeed}ms`,
      jackInTheBox: 'jackInTheBox',
      lightSpeedInLeft: 'lightSpeedInLeft',
      lightSpeedInRight: 'lightSpeedInRight',
      lightSpeedOutLeft: 'lightSpeedOutLeft',
      lightSpeedOutRight: 'lightSpeedOutRight',
      flip: 'flip',
      flipInX: 'flipInX',
      flipInY: 'flipInY',
      flipOutX: 'flipOutX',
      flipOutY: 'flipOutY',
      rotateIn: 'rotateIn',
      rotateInDownLeft: 'rotateInDownLeft',
      rotateInDownRight: 'rotateInDownRight',
      rotateInUpLeft: 'rotateInUpLeft',
      rotateInUpRight: 'rotateInUpRight',
      rotateOut: 'rotateOut',
      rotateOutDownLeft: 'rotateOutDownLeft',
      rotateOutDownRight: 'rotateOutDownRight',
      rotateOutUpLeft: 'rotateOutUpLeft',
      rotateOutUpRight: 'rotateOutUpRight',
      rollIn: 'rollIn',
      rollOut: 'rollOut',
      zoomIn: 'zoomIn',
      zoomInDown: 'zoomInDown',
      zoomInLeft: 'zoomInLeft',
      zoomInRight: 'zoomInRight',
      zoomInUp: 'zoomInUp',
      bounceIn: `bounceIn ${bounceInSpeed}ms`,
      bounceInDown: 'bounceInDown',
      bounceInLeft: 'bounceInLeft',
      bounceInRight: 'bounceInRight',
      bounceInUp: 'bounceInUp',
      bounceOut: `bounceOut ${bounceOutSpeed}ms`,
      bounceOutDown: 'bounceOutDown',
      bounceOutLeft: 'bounceOutLeft',
      bounceOutRight: 'bounceOutRight',
      bounceOutUp: 'bounceOutUp',
      zoomOut: 'zoomOut',
      zoomOutDown: 'zoomOutDown',
      zoomOutLeft: 'zoomOutLeft',
      zoomOutRight: 'zoomOutRight',
      zoomOutUp: 'zoomOutUp',
      slideInDown: 'slideInDown',
      slideInLeft: 'slideInLeft',
      slideInRight: 'slideInRight',
      slideInUp: 'slideInUp',
      slideOutDown: 'slideOutDown',
      slideOutLeft: 'slideOutLeft',
      slideOutRight: 'slideOutRight',
      slideOutUp: 'slideOutUp',
      fadeIn: 'fadeIn',
      fadeInDown: 'fadeInDown',
      fadeInDownBig: 'fadeInDownBig',
      fadeInLeft: 'fadeInLeft',
      fadeInLeftBig: 'fadeInLeftBig',
      fadeInRight: 'fadeInRight',
      fadeInRightBig: 'fadeInRightBig',
      fadeInUp: 'fadeInUp',
      fadeInUpBig: 'fadeInUpBig',
      fadeInTopLeft: 'fadeInTopLeft',
      fadeInTopRight: 'fadeInTopRight',
      fadeInBottomLeft: 'fadeInBottomLeft',
      fadeInBottomRight: 'fadeInBottomRight',
      fadeOut: 'fadeOut',
      fadeOutDown: 'fadeOutDown',
      fadeOutDownBig: 'fadeOutDownBig',
      fadeOutLeft: 'fadeOutLeft',
      fadeOutLeftBig: 'fadeOutLeftBig',
      fadeOutRight: 'fadeOutRight',
      fadeOutRightBig: 'fadeOutRightBig',
      fadeOutUp: 'fadeOutUp',
      fadeOutUpBig: 'fadeOutUpBig',
      backInUp: 'backInUp',
      backInDown: 'backInDown',
      backInLeft: 'backInLeft',
      backInRight: 'backInRight',
      backOutUp: 'backOutUp',
      backOutDown: 'backOutDown',
      backOutLeft: 'backOutLeft',
      backOutRight: 'backOutRight',
    },
  };
};

module.exports = animationsConfig;
