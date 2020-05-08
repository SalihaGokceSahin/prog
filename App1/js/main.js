window.onload = function () {
    var pos = 0;
    var posy = 150;
    var box = document.getElementById("box");
    var t = setInterval(move, 10);
    function move() {
        if (pos >= 150) {
            posy -= 1;
            box.style.bottom = posy + "px";
            if (posy <= 0) {
                clearInterval(t);
            }

        }
        else {
            pos += 1;
            box.style.left = pos + "px";
        }
        //function move2() {
        //    if (pos >= 150) {
        //        pos2=
        //    }
        //}
    }
    //var pos2 = 0;
    //var z = setInterval(movee, 10);
    //    function movee() {
    //        if (pos >= 100) {
    //            clearInterval(z);
    //        }
    //        else {
    //            pos2 += 1;
    //            box.style.bottom= pos2 + "px";
    //        }
    //    }
}