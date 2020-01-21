function solution(S) {
  let pList = S.split("\n");
  let orderedList = [];
  let arr = [];
  let k = 0;
  let temp = "";
  let index = 1;
  let newNames = "";

  for (let i = 0; i < pList.length; i++) {
    arr = []; 
    let details = pList[i].split(",");
    let photoName = details[0].split(".");
    arr["name"] = photoName[0];
    arr["ext"] = photoName[1];
    arr["city"] = details[1];
    arr["date"] = details[2].trim();
    arr["order"] = k;

    orderedList.push({
      name: photoName[0].trim(),
      ext: photoName[1],
      city: details[1].trim(),
      date: details[2].trim(),
      order: k,
      newNameIndex: 0
    });
    k++;
  }

  orderedList.sort(function(a, b) {
    return ("" + a.city).localeCompare(b.city);
  });

  for (let k = 0; k < orderedList.length; k++) {
    if (temp === orderedList[k].city) {
      index++;
      orderedList[k].newNameIndex = index;
    } else {
      index = 1; 
      temp = orderedList[k].city;
      orderedList[k].newNameIndex = index;
    }
  }

  orderedList.sort(function(a, b) {
    return ("" + a.date).localeCompare(b.date);
  });

  orderedList.sort(function(a, b) {
    return a["order"] - b["order"];
  });

  for (let z = 0; z < orderedList.length; z++) {
    newNames +=
      orderedList[z].city +
      orderedList[z].newNameIndex +
      "." +
      orderedList[z].ext +
      "\n";
  }
  return newNames;
}
let S =
  "photo.jpg, Warsaw, 2013-09-05 14:08:15\njohn.png, London, 2015-06-20 15:13:22\nmy-Friends.png, Warsaw, 2013-09-05 14:07:13\nEiffel.jpg, Paris, 2015-07-23 08:03:02\npisatower.jpg, Paris, 2015-07-22 23:59:59\nBOB.ipg, London, 2015-08-05 00:02:03\nnotredame.png, Paris, 2015-09-01 12:00:00\nme.jpg, Warsaw, 2013-09-06 15:40: 22\na.png, Warsaw, 2016-02-13 13:33:50\nb.jpg, Warsaw, 2016-01-02 15:12:22\nc.jpg, Warsaw, 2016-01-02 14:34:30\nd.jpg, Warsaw, 2016-01-02 15:15:01\ne.png, Warsaw, 2016-01-02 09:49:09\nf.png, Warsaw, 2016-01-02 10:5:32\ng.jpg, Warsaw, 2016-02-29 22:13:11";

solution(S);
