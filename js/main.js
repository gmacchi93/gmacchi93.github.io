(function() {
    // your page initialization code here
    // the DOM will be available here
    var hoy = new Date();
    var fecha_nacimiento = new Date(1993,5,4);

    var resultado = diff_years(hoy, fecha_nacimiento);

    document.getElementById("edad").innerHTML = resultado.toString();

    function diff_years(dt2, dt1)
    {

        var diff =(dt2.getTime() - dt1.getTime()) / 1000;
        diff /= (60 * 60 * 24);
        return Math.floor(diff/365.25);

    }

})();