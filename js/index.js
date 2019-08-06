var tab = 0;
var br = document.createElement("br")
var p = document.createElement("p")

document.body.append("====TABUADA====")
document.write("<br>");

for (var i = 0; i < 11; i++) {
	document.write("<br>");
	for (var n = 1; n < 11; n++) {
		tab = n * i
		document.write(i + "x" + n + "=" + tab + "\n");
		document.write("<br>");
	}
}
