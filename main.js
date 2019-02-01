init();

let n = 1;

setInterval(() => {
  onLeave(getImg(n)).one('transitionend', e => {
    onEnter($(e.currentTarget));
  });
  onShow(getImg(n+1));
  n++;
}, 3000);

function init() {
  let images = $('.images > img');
  $(images[0])
    .addClass('show')
    .siblings()
    .addClass('enter');
}

function getImg(index) {
  let length = $('.images > img').length;
  return $(`.images > img:nth-child(${getIndex(index, length)})`);
}

function getIndex(index, imgCount) {
  console.log(imgCount)
  index = index % imgCount;
  if (index === 0) {
    index = imgCount;
  }
  console.log(index);
  return index;
}

function onShow($image) {
  return $image.removeClass('enter leave').addClass('show');
}

function onEnter($image) {
  return $image.removeClass('show leave').addClass('enter');
}

function onLeave($image) {
  return $image.removeClass('enter show').addClass('leave');
}
