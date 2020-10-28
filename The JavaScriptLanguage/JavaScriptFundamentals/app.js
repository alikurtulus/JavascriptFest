let firstName
let lastName
let nickName = "SuperCoder"
alert( firstName ?? lastName ?? nickName ?? "Anonymous")

let fN = null
let lN = null
let nN = "SuperCoder"
alert( fN || lN || nN || "Anonymous")

let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0