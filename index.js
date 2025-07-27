const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const title = document.getElementById("title");
const body = document.body;

let noClickCount = 0;

const pleadMessages = [
  "Năn nỉ đó",
  "Làm người yêu anh đi",
  "Làm đi mà",
  "Huhu ấn Có đi",
  "Một lần thôi mà",
  "Đừng bắt anh chờ nữa",
  "Có đi màaaa",
  "Em ơi đừng tàn nhẫn vậy",
  "Gật đầu nhẹ cái thôi 🥺",
  "Chỉ cần nói đồng ý là hạnh phúc rồi",
  "Anh chờ lâu lắm rồi",
  "Đồng ý nha nha nha",
  "Làm người yêu anh rồi, mỗi ngày được cưng luôn",
  "Làm người yêu anh không mất gì đâu"
];

noBtn.addEventListener("click", () => {
  noClickCount++;

  if (noClickCount > 1) {
    // Xóa giao diện cũ và thêm ảnh nền full
    body.innerHTML = `
    <img src="gifma.gif" alt="pleaseee" class="fullscreen-gif" />
  `;

    // Tạo phần tử audio bằng JS sau khi người dùng click
    const audio = new Audio("ma.mp3");
    audio.loop = true;
    audio.play().catch((e) => {
      console.log("Trình duyệt chặn autoplay: ", e);
    });

    // CSS để ảnh gif full màn hình
    const style = document.createElement("style");
    style.textContent = `
    .fullscreen-gif {
      position: fixed;
      top: 0; left: 0;
      width: 100vw;
      height: 100vh;
      object-fit: cover;
      z-index: 9999;
    }
    body {
      margin: 0;
      background-color: black;
    }
  `;
    document.head.appendChild(style);

    return;
  }


  // Tăng kích thước nút "Có"
  const currentFontSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
  const currentPadding = parseFloat(window.getComputedStyle(yesBtn).paddingTop);

  yesBtn.style.fontSize = currentFontSize * 1.5 + "px";
  yesBtn.style.padding = currentPadding * 1.5 + "px " + currentPadding * 2 + "px";

  // Đổi nội dung h1 thành câu ngẫu nhiên
  const randomMsg = pleadMessages[Math.floor(Math.random() * pleadMessages.length)];
  title.textContent = randomMsg;
});

yesBtn.addEventListener("click", () => {
  title.textContent = "Biết ngay mà, I LOVE YOU ❤️";

  // Khôi phục kích thước nút "Có"
  const noFontSize = window.getComputedStyle(noBtn).fontSize;
  const noPadding = window.getComputedStyle(noBtn).padding;

  yesBtn.style.fontSize = noFontSize;
  yesBtn.style.padding = noPadding;
});
