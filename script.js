// Typing Effect
const letterText = `To the love of my life,


Happy 5th Anniversary!  Bebe! 💖

Can you believe it? 1,826 days na tayong magkasama—five amazing years filled with love, lambing, kulitan, at siyempre… mga araw-araw na rides natin na kahit paulit-ulit, hindi ako nagsasawa.

Bawat ikot natin sa kalsada, bawat kwentuhan habang nasa biyahe, bawat simpleng hawak ng kamay—lahat 'yon, treasure ko. Kahit araw-araw tayong magkasama, you still make my heart feel like it's the first time I fell for you.

Thank you for being my constant. Sa hirap at ginhawa, sa tahimik at maingay na araw, andiyan ka. Hindi madali ang lahat ng pinagdaanan natin, pero pinipili pa rin natin ang isa’t isa, araw-araw, sa loob ng 1,826 days.

Thank you rin sa walang sawang pag-aantay sakin kapag nagg-gym ako o naglalaro ng basketball. I know minsan nakakainip, pero andiyan ka pa rin—suportado mo ako kahit sa mga simpleng bagay. Sobrang na-aappreciate ko 'yon, sobra sobra.

At siyempre, more food trips to come satin! Hahahaha. Kahit simpleng kainan lang, basta kasama kita, laging special. Looking forward pa ako sa lahat ng kain, kwento, at tawa natin—hanggang tumaba tayong dalawa!

Here’s to more years, more rides, more adventures, more food, and more love with you. Wala na akong ibang mahihiling pa kundi ikaw lang, araw-araw.

I love you so much. Always and forever.

Yours forever Bebe,
Neil Charlie Rebenque. 💌`;

const letterElement = document.getElementById("letterText");
let index = 0;

function typeLetter() {
  if (index < letterText.length) {
    letterElement.innerText += letterText.charAt(index);
    index++;
    setTimeout(typeLetter, 50);
  }
}
typeLetter();

// Slideshow
const images = [
  "images/photo1.jpeg", "images/photo2.jpeg", "images/photo3.jpeg",
  "images/photo4.jpeg", "images/photo5.jpeg", "images/photo6.jpeg",
  "images/photo7.jpeg", "images/photo8.jpeg", "images/photo9.jpeg",
  "images/photo10.jpeg"
];

let imageIndex = 0;
const slideshow = document.getElementById("slideshow");

images.forEach(src => {
  const img = new Image();
  img.src = src;
});

setInterval(() => {
  imageIndex = (imageIndex + 1) % images.length;
  slideshow.src = images[imageIndex];
}, 3000);

// Accordion Logic
const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const open = document.querySelector('.accordion-header.active');
    if (open && open !== header) {
      open.classList.remove('active');
      open.nextElementSibling.style.maxHeight = null;
    }

    header.classList.toggle('active');
    const content = header.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
