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
    + '   <input type="button" id="delete" value="削除"></input></li>'
  )
  // id をclassにした方がいいかもかもかも
  // タスクをブランクにする
  $('#inputTask').val(''); 
});

// 削除ボタンを押した時の処理
$('.delete').on("click", function() {
  $(this).closest("li").remove();
});

//ドキュメント全体にイベント　パフォーマンス的に
//ドキュメント全体をいじるのはあまりしないほうがいい


