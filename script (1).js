const data = [
  {name:"كيرلس", role:"نور", costume:"أبيض", script:"أنا نور"},
  {name:"ماريا", role:"سواء", costume:"أسود", script:"أنا سوداء"},
  {name:"جون", role:"رجل1", costume:"رمادي", script:"أنا رجل 1"},
  {name:"مينا", role:"رجل2", costume:"أخضر", script:"أنا راجل 2"},
  {name:"فادي", role:"رجل3", costume:"أزرق", script:"أنا راجل 3"}
];

function login(){
  const n = document.getElementById("name").value.trim();
  const p = document.getElementById("pass").value;
  const res = data.find(u => u.name === n); // بردو عندنا باراميتر الاسم
  const div = document.getElementById("result");
  div.innerHTML = "";
  if(!res){
    div.innerHTML = "لاسف ملكش نصيب معانا في العرض";
  } else {
    // لفكرة بسيطه: كلمة السر لازم تكون "1234" أو الاسم بالعربي
    if(p !== "1234"){
      div.innerHTML = "كلمة المرور مش صح";
    } else {
      div.innerHTML = `
        <h2>أهلاً يا ${res.name}</h2>
        <p>🎭 دورك: <b>${res.role}</b></p>
        <p>👕 اللبس المطلوب: <b>${res.costume}</b></p>
        <p>📜 سكريبتك: <i>${res.script}</i></p>
      `;
    }
  }
}
