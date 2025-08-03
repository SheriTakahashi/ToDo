const onClickAdd = () => {
  //テキストボックスの値を取得して、初期化する
  const inputText = document.getElementById("addtext").value;
  document.getElementById("addtext").value = "";
  if (inputText === "") return; // 空のToDoは追加しない

  //リストに追加
  createIncompleteTodo(inputText);
};

//渡された引数を元にTODOリストを作成する
const createIncompleteTodo = (todo) => {
  //liリスト生成
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";

  // チェックボックス生成
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  //リスト生成
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = todo;

  //削除ボタン生成
  const deletButton = document.createElement("button");
  deletButton.innerText = "削除";
  deletButton.addEventListener("click", () => {
    //押された削除ボタンのliタグをリストから削除
    const deleteTarget = deletButton.closest("li");
    document.getElementById("planlist").removeChild(deleteTarget);
  });

  //liタグの子要素に各要素を設定
  div.appendChild(checkbox);
  div.appendChild(p);
  div.appendChild(deletButton);
  li.appendChild(div);

  document.getElementById("planlist").appendChild(li);
};

document.getElementById("addbutton").addEventListener("click", onClickAdd);
