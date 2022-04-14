const fallbackFix = {
  'animate-bounce': {
    'transform-origin': 'center bottom',
  },
  'animate-swing': {
    'transform-origin': 'top center',
  },
  'animate-flip': {
    'backface-visibility': 'visible',
  },
  'animate-flipInX': {
    'backface-visibility': 'visible',
  },
  'animate-flipInY': {
    'backface-visibility': 'visible',
  },
  'animate-flipOutX': {
    'backface-visibility': 'visible',
  },
  'animate-flipOutY': {
    'backface-visibility': 'visible',
  },
};

const {
  theme: { animation: defaultAnimation, keyframes: defaultKeyframes },
} = require('tailwindcss/defaultConfig');

module.exports = {
  fallbackFix,
  defaultAnimation,
};
