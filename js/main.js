// 追加ボタンを押した時の処理
$("#btnAdd").click(function() {

  // 入力確認（未入力ならアラート）
  if($("#inputTask").val().trim().length == 0) {
    alert("タスクが未入力です！");
    return;
  }

  // タスクをリストに追加する
  $("#todoList").append(
    '<li><span>' + $("#inputTask").val() + '</span>'
    + '   <input type="button" class="delete" value="削除" onclick="deleteTask(this)"></input></li>'
  )
  // タスクをブランクにする
  $('#inputTask').val('');
});

function deleteTask(element) {
  $(element).closest("li").remove();
}

