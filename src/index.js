import "./styles.css";

/**
 * 追加ボタンを押したときに関数を実行する部分
 */

//これで動作をしたときに反応しているかを確認する
// const onClickalert = () => {
//   alert();
// };

const onClickAdd = () => {
  //テキストボックスの値を取得し初期化する
  const inputText = document.getElementById("add-text").value; //値の取得
  document.getElementById("add-text").value = ""; //入力値の削除

  // divタブ生成
  const div = document.createElement("div"); //divの生成
  div.className = "list-row"; //classの追加

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText; //テキストの設定

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了"; //テキストの設定
  completeButton.addEventListener("click", () => {
    //　押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);
    //const deleteTarget = completeButton.parentNode;
    //document.getElementById("incomplete-list").removeChild(deleteTarget);//要素の削除

    //　完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;
    // div以下を初期化
    addTarget.textContent = null;
    //　liタグ生成
    const li = document.createElement("li");
    li.innerText = text;
    // Buttonタブ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //　押された削除ボタンの親タグ(div)を未完了リストから削除
      //deleteFromIncompleteList(completeButton.parentNode);
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget); //要素の削除

      //　未完了リストに追加する要素
      const addTarget = backButton.parentNode;
      // TODO内容テキストを取得
      const text = addTarget.firstElementChild.innerText;
      // div以下を初期化
      addTarget.textContent = null;
      //　liタグ生成
      const li = document.createElement("li");
      li.innerText = text;
      // Buttonタブ生成
      const completeButton = document.createElement("button");
      completeButton.innerText = "完了";
      // Buttonタブ生成
      const deleteButton = document.createElement("button");
      deleteButton.innerText = "削除";

      // divタグの子要素に各要素を設定
      addTarget.appendChild(li); //内部要素の設定,入れ子
      addTarget.appendChild(completeButton); // 下に追加されていく
      addTarget.appendChild(deleteButton); // 下に追加されていく
      //console.log(addTarget);

      // 完了のリストに追加
      document.getElementById("incomplete-list").appendChild(addTarget);
    });

    // divタグの子要素に各要素を設定
    addTarget.appendChild(li); //内部要素の設定,入れ子
    addTarget.appendChild(backButton); // 下に追加されていく
    //console.log(addTarget);

    // 完了のリストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button（削除）タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除"; //テキストの設定
  deleteButton.addEventListener("click", () => {
    //　押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
    //関数化
    // const deleteTarget = deleteButton.parentNode;
    // document.getElementById("incomplete-list").removeChild(deleteTarget);//要素の削除

    //console.log(deleteTarget);
    //alert("削除");
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li); //内部要素の設定,入れ子
  div.appendChild(completeButton); // 下に追加されていく
  div.appendChild(deleteButton);
  console.log(div);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target); //要素の削除
};

//　未完了リストに追加する関数
const createIncompleteList = (text) => {};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
