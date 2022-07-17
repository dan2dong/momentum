const images = ['0.jpg', '1.jpg', '2.jpg']

//배경화면을 무작위로 가져오기
const chosenImage = images[Math.floor(Math.random() * images.length)]
//img태그와 속성을 지정해준다.
const bgImage = document.createElement('img')

bgImage.src = `img/${chosenImage}`
//body에 img태그 삽입
document.body.appendChild(bgImage)

// const h2 = document.querySelector('#clock')
// document.body.insertBefore(bgImage, h2)
