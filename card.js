// 外側

function createcatCard(catName, job, personality, power, catUrl) {
  let containerDiv = document.createElement("div");
  containerDiv.classList.add(
    "bg-warning",
    "d-flex",
    "flex-column",
    "justify-content-center",
    "align-items-center"
  );

  let innerFlex = document.createElement("div");
  containerDiv.append(innerFlex);
  innerFlex.classList.add(
    "d-flex",
    "align-items-center",
    "col-md-7",
    "col-10",
    "m-3"
  );

  let cardDiv = document.createElement("div");
  innerFlex.append(cardDiv);
  cardDiv.classList.add("d-flex", "col-12", "cat-card");

  // 左半分

  let leftInfo = document.createElement("div");
  leftInfo.classList.add("col-8", "py-3");

  let nameTitle = document.createElement("h4");
  nameTitle.innerHTML = catName;

  let p1Div = document.createElement("div");
  p1Div.classList.add("py-2");

  let p2Div = p1Div.cloneNode(true);
  let p3Div = p1Div.cloneNode(true);

  let catJob = document.createElement("p");
  catJob.innerHTML = "Job:" + "<br>" + job;
  p1Div.append(catJob);

  let catPersonality = document.createElement("p");
  catPersonality.innerHTML = "Personality :" + "<br>" + personality;
  p2Div.append(catPersonality);

  let catPower = document.createElement("p");
  catPower.innerHTML = "Power :" + "<br>" + power;
  p3Div.append(catPower);

  leftInfo.append(nameTitle);
  leftInfo.append(p1Div);
  leftInfo.append(p2Div);
  leftInfo.append(p3Div);

  // *** 左半分終了 ***

  //img

  let rightInfo = document.createElement("div");
  let profileImgDiv = document.createElement("div");
  rightInfo.classList.add(
    "col-4",
    "d-flex",
    "justify-content-center",
    "align-items-center"
  );

  let profileImg = document.createElement("img");
  profileImg.classList.add("avatar");
  profileImg.src = catUrl;

  profileImgDiv.append(profileImg);
  rightInfo.append(profileImgDiv);
  // *** 右半分終了 ***

  cardDiv.append(leftInfo);
  cardDiv.append(rightInfo);

  return containerDiv;
}

//document.getElementByIdでID"profiles"を受け取り、新規に作った変数profileDivに入れる。
const profileDiv = document.getElementById("profiles");

let cat1 = createcatCard(
  "マロンさん",
  "たべる",
  "こまかいことをきにしない",
  "5500mw",
  "https://user-images.githubusercontent.com/91357435/149614989-605102aa-4ed5-4f59-93ba-de9b09bddbd3.jpg"
);

let cat2 = createcatCard(
  "モカさん",
  "かくれる",
  "おどろきやすい",
  "6000mw",
  "https://user-images.githubusercontent.com/91357435/149615024-982646e4-abf5-4786-a5c0-c6ceae07d2a9.jpg"
);

let cat3 = createcatCard(
  "モリさん",
  "へんなかお",
  "ひとのそばにいるのがすき",
  "3000mw ",
  "https://user-images.githubusercontent.com/91357435/149615028-5fef919f-51ae-44d1-b1d1-47e39d2e0e1f.jpg"
);

profileDiv.append(cat1);
profileDiv.append(cat2);
profileDiv.append(cat3);
