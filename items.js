const posts = [];

const images = [
  "https://dr.savee-cdn.com/things/thumbnails/6/4/27285aef9cb587e0d79342.webp",
  "https://dr.savee-cdn.com/things/thumbnails/6/4/272722fa4eb2901badb45b.webp",
  "https://dr.savee-cdn.com/things/5/e/68f35e1404e45961765299.gif",
  "https://dr.savee-cdn.com/things/thumbnails/6/3/8ebf22fb242b1c4bd727c5.webp",
  "https://dr.savee-cdn.com/things/thumbnails/6/4/20a7adaa037c2100748e36.webp",
  "https://dr.savee-cdn.com/things/thumbnails/6/4/2356a8a7dfcdbc0fdeed6c.webp",
  "https://dr.savee-cdn.com/things/thumbnails/6/4/239116a157f554e26bcad1.webp",
  "https://dr.savee-cdn.com/things/thumbnails/6/4/221f53b29e5621f94263f8.webp",
  "https://dr.savee-cdn.com/things/thumbnails/6/4/1e510b1f9938fe08548287.webp",
];

let imageIndex = 0;

for (let i = 1; i <= 80; i++) {
  let item = {
    id: i,
    title: `Post ${i}`,
    date: `${i < 10 ? 0 : ""}${i}/10/2021 `,
    image: images[imageIndex],
  };
  posts.push(item);
  imageIndex++;
  if (imageIndex > images.length - 1) imageIndex = 0;
}

// console.log(posts);
