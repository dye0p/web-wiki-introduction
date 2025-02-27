console.log(
  "%c" +
    " __      __  ______   __  __   ______     " +
    "\n" +
    "/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    " +
    "\n" +
    "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
    "\n" +
    " \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    " +
    "\n" +
    "  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ " +
    "\n" +
    "   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ " +
    "\n" +
    "    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
  "color: #d81b60; font-size: 16px; font-weight: bold;"
);

function inputComment() {
  alert("댓글이 등록되었습니다");

  var commentInput = document.getElementById("commentInput");
  var commentText = commentInput.value.trim();
  var commentDiv = document.createElement("li");

    commentDiv.innerHTML = `
    <div class="comment-item">
      <div class="comment-author">
        <img src="./images/comment-author-icon.png" alt="사용자 프로필 이미지" />
        <span>방문자</span>
      </div>
      <div class="comment-content">
        <p>${commentText}</p>
      </div>
    </div>
    `;

    var commentList = document.querySelector(".comment-list");
    commentList.appendChild(commentDiv); 

    commentInput.value = "";

}

console.log("알맞은 스크립트를 작성하세요");
