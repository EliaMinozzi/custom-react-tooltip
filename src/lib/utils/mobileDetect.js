// Detect mobile devices

const MobileDetect = require('mobile-detect');
const md = new MobileDetect(window.navigator.userAgent);
export const isAndroid = md.os() === 'AndroidOS';
export const isIOS = md.os() === 'iOS';
export const isTablet = md.tablet();
export const isMobile = md.phone();
export const isIphone = isIOS && isMobile;
export const isNativeApp = process.env.MOBILE;
export const isIE = md.match('MSIE|Trident|Edge');
export const isPoynt = isNativeApp && window.device && window.device.manufacturer === 'POYNT';
export const isPax = isNativeApp && window.device && window.device.manufacturer === 'PAX';
export const isPOSDevice = isPoynt || isPax;
export const isPoyntAndroid = isPoynt && isAndroid;