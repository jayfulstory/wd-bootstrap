// gsap.registerPlugin(ScrollTrigger);
const content = document.querySelector('.section-content');
let count = 0;
let width = content.offsetWidth;
const text =
  'KAGAMIROCK KAGAMIROCK KAGAMIROCK KAGAMIROCK KAGAMIROCK KAGAMIROCK '.split(
    ' '
  );
function initText(ele, textArr) {
  textArr.push(...textArr);
  textArr.forEach(text => {
    ele.innerText += `${text}\u00a0\u00a0\u00a0\u00a0`;
  });
}
initText(content, text);

window.addEventListener('scroll', () => (count += 15));

function textLoof(count, ele, direction) {
  if (count > ele.offsetWidth / 2) {
    count = 0;
  }
  gsap.set(ele, {
    x: count * direction,
  });

  return count;
}

function animate() {
  count++;

  count = textLoof(count, content, -1);

  requestAnimationFrame(animate);
}
animate();

// const x = -(content.offsetWidth - innerWidth);
// console.log(x);
// gsap.to(content, {
//   x,
//   scrollTrigger: {
//     trigger: 'body',
//     start: 'top top',
//     // end: 'bottom',
//     end: '+=' + x * -1,
//     invalidateOnRefresh: true,
//     scrub: true,
//     markers: true,
//   },
// });
