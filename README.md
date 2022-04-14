# tailwindcss animatecss plugin
This plugin helps you use [animateCss](https://animate.style/) animation in tailwind.

### Initial setup
First of all add the plugin to the "tailwind.config.js" file :
```javascript
// tailwind.config.js
module.exports = {
  content: ['...'],
  theme: {
    extend: {},
  },
  plugins: [require('animatecss-tailwind')],
};
```

#### examples :
```html
<div class="animate-animated animate-zoomInDown"></div>
```

## animation delay
animation delays are inspired by [tailwind-animation-delay](https://github.com/hamidreza4dev/tailwindcss-animation-delay-plugin)

#### examples :
```html
<div class="animate-ping animation-delay-1"></div>
<div class="animate-ping animation-delay-2"></div>
<div class="animate-ping animation-delay-3"></div>
<div class="animate-ping animation-delay-4"></div>
<div class="animate-ping animation-delay-5"></div>
<div class="animate-ping animation-delay-6"></div>
<div class="animate-ping animation-delay-7"></div>
<div class="animate-ping animation-delay-8"></div>
<div class="animate-ping animation-delay-9"></div>
<div class="animate-ping animation-delay-10"></div>
```
### customization
These are the allowed values by default :
```json
{
  1: "250",
  2: "500",
  3: "750",
  4: "1000",
  5: "1250",
  6: "1500",
  7: "1750",
  8: "2000",
  9: "2250",
  10: "2500"
}
```
But you can still use your own values by changing the "animationDelay" property :
```javascript
// tailwind.config.js
module.exports = {
  content: ['...'],
  theme: {
    extend: {},
    animationDelay: {
      1: '1000',
      2: '2000',
      3: '3000',
    },
  },
  plugins: [require('animatecss-tailwind')],
};
```
