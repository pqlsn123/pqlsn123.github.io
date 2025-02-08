// 当按钮被点击时，随机改变自我介绍文字的颜色
document.getElementById("changeColorBtn").addEventListener("click", function() {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  document.querySelector(".introduction").style.color = randomColor;
});
