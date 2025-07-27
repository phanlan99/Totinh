const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const title = document.getElementById("title");

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
  // Tăng gấp đôi kích thước nút "Có"
  const currentFontSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
  const currentPadding = parseFloat(window.getComputedStyle(yesBtn).paddingTop);

  yesBtn.style.fontSize = currentFontSize * 2 + "px";
  yesBtn.style.padding = currentPadding * 2 + "px " + currentPadding * 4 + "px";

  // Đổi nội dung h1 thành câu ngẫu nhiên
  const randomMsg = pleadMessages[Math.floor(Math.random() * pleadMessages.length)];
  title.textContent = randomMsg;
});

yesBtn.addEventListener("click", () => {
  title.textContent = "Biết ngay mà, I LOVE YOU ❤️";

  // Khôi phục kích thước nút "Có" giống với nút "Không"
  const noFontSize = window.getComputedStyle(noBtn).fontSize;
  const noPadding = window.getComputedStyle(noBtn).padding;

  yesBtn.style.fontSize = noFontSize;
  yesBtn.style.padding = noPadding;
});
