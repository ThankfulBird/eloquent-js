console.log(null || 'user');
console.log('Agnes' || 'user');
const APPLE_ID = 0x23; // might be null, undefined, '', false, 0 or NaN 
console.log(APPLE_ID || 0x11);
// && operator is the reverse one if first is false it returns first
console.log(true || APPLE_ID) // Short circuit for || APPLE_ID will never be evaluated.
console.log(false && APPLE_ID) // Short circuit for &&