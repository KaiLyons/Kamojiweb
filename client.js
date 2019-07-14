var array = [
"（*＾ワ＾*）",
"(*＾წ＾*)",
"(*꧆▽꧆*)",
"(๑꧆◡꧆๑)",
"（*＾＾*)",
"ヾ(＠^∇^＠)ノ",
"o((*^▽^*))o",
"ヾ(＠⌒ー⌒＠)ノ",
"(＝⌒▽⌒＝)",
"(≡^∇^≡)",
"o(〃＾▽＾〃)o",
"(。・ω・。)",
"ヾ(＾-＾)ノ",
"(❁´◡`❁)",
"˙˚ʚ(´◡`)ɞ˚˙"];

var str = "";

var product = str + (" "+array[Math.floor(Math.random()*array.length)]);

console.log(product);

document.getElementById("owo").innerHTML = product;
