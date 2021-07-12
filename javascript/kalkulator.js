function oblicz(){
    let wartosc1 = 0;
    let wartosc3 = 0;
    let wartosc4 = 0;
    let wartosc5 = 0;
    let finalna_wartosc = 0;
    let metry_kwadratowe = 0;
    let metry_biezace_szyby = 0;
    let metry_biezace_wyciecia = 0;

        if(document.getElementById("opt1").checked == true){
            let bok1 = parseFloat(document.getElementById("kalk_bok1").value)
            let bok2 = parseFloat(document.getElementById("kalk_bok2").value)
            let bok3 = parseFloat(document.getElementById("kalk_bok3").value)
            let bok4 = parseFloat(document.getElementById("kalk_bok4").value)
            metry_kwadratowe = (bok1 * bok2)/10000
            metry_kwadratowe = Math.round(metry_kwadratowe*100)/100

            metry_biezace_szyby = (bok1+bok2+bok1+bok2)/100
            metry_biezace_szyby = Math.ceil(metry_biezace_szyby*10)/10

            document.getElementById("metry_kwadratowe").innerHTML=`Metry kwadratowe: ${metry_kwadratowe} m²`
            document.getElementById("metry_biezace_szyby").innerHTML=`Metry bieżące Szyby: ${metry_biezace_szyby} m`
            document.getElementById("metry_biezace_wyciecia").innerHTML=`Metry bieżące Wyciecia: 0 m`

        } else if(document.getElementById("opt2").checked == true){
            let bok1 = parseFloat(document.getElementById("kalk_bok1").value)
            let bok2 = parseFloat(document.getElementById("kalk_bok2").value)
            let bok3 = parseFloat(document.getElementById("kalk_bok3").value)
            let bok4 = parseFloat(document.getElementById("kalk_bok4").value)
            let bok5 = parseFloat(document.getElementById("kalk_bok5").value)
            let bok6 = parseFloat(document.getElementById("kalk_bok6").value)
            let bok7 = parseFloat(document.getElementById("kalk_bok7").value)
            let bok8 = parseFloat(document.getElementById("kalk_bok8").value)
            metry_kwadratowe = ((bok1 * bok8) + (bok3 * bok8))/10000
            metry_kwadratowe = Math.round(metry_kwadratowe*100)/100

            metry_biezace_szyby = (bok1+bok2+bok3+bok4+bok5+bok6+bok7+bok8)/100
            metry_biezace_szyby = Math.ceil(metry_biezace_szyby*10)/10

            metry_biezace_wyciecia = (bok2+bok3+bok5+bok6)/100
            metry_biezace_wyciecia = Math.round(metry_biezace_wyciecia*100)/100

            document.getElementById("metry_kwadratowe").innerHTML=`Metry kwadratowe: ${metry_kwadratowe} m²`
            document.getElementById("metry_biezace_szyby").innerHTML=`Metry bieżące Szyby: ${metry_biezace_szyby} m`
            document.getElementById("metry_biezace_wyciecia").innerHTML=`Metry bieżące Wyciecia: ${metry_biezace_wyciecia} m`
        } else if(document.getElementById("opt3").checked == true){
            let bok1 = parseFloat(document.getElementById("kalk_bok1").value)
            let bok2 = parseFloat(document.getElementById("kalk_bok2").value)
            let bok3 = parseFloat(document.getElementById("kalk_bok3").value)
            let bok4 = parseFloat(document.getElementById("kalk_bok4").value)
            let bok5 = parseFloat(document.getElementById("kalk_bok5").value)
            let bok6 = parseFloat(document.getElementById("kalk_bok6").value)
            metry_kwadratowe = (bok1*bok6)/10000
            metry_kwadratowe = Math.round(metry_kwadratowe*100)/100

            metry_biezace_szyby = (bok1+bok2+bok3+bok4+bok5+bok6)/100
            metry_biezace_szyby = Math.ceil(metry_biezace_szyby*10)/10

            metry_biezace_wyciecia = (bok3+bok4)/100
            metry_biezace_wyciecia = Math.round(metry_biezace_wyciecia*100)/100

            document.getElementById("metry_kwadratowe").innerHTML=`Metry kwadratowe: ${metry_kwadratowe} m²`
            document.getElementById("metry_biezace_szyby").innerHTML=`Metry bieżące Szyby: ${metry_biezace_szyby} m`
            document.getElementById("metry_biezace_wyciecia").innerHTML=`Metry bieżące Wyciecia: ${metry_biezace_wyciecia} m`
        } else if(document.getElementById("opt4").checked == true){
            let bok1 = parseFloat(document.getElementById("kalk_bok1").value)
            let bok2 = parseFloat(document.getElementById("kalk_bok2").value)
            let bok3 = parseFloat(document.getElementById("kalk_bok3").value)
            let bok4 = parseFloat(document.getElementById("kalk_bok4").value)
            let bok5 = parseFloat(document.getElementById("kalk_bok5").value)
            let bok6 = parseFloat(document.getElementById("kalk_bok6").value)

            metry_kwadratowe = (bok5 * bok6)/10000
            metry_kwadratowe = Math.round(metry_kwadratowe*100)/100

            metry_biezace_szyby = (bok1+bok2+bok3+bok4+bok5+bok6)/100
            metry_biezace_szyby = Math.ceil(metry_biezace_szyby*10)/10

            metry_biezace_wyciecia = (bok2+bok3)/100
            metry_biezace_wyciecia = Math.round(metry_biezace_wyciecia*100)/100
            
            document.getElementById("metry_kwadratowe").innerHTML=`Metry kwadratowe: ${metry_kwadratowe} m²`
            document.getElementById("metry_biezace_szyby").innerHTML=`Metry bieżące Szyby: ${metry_biezace_szyby} m`
            document.getElementById("metry_biezace_wyciecia").innerHTML=`Metry bieżące Wyciecia: ${metry_biezace_wyciecia} m`
        }
        if(document.getElementById('rodzaj_grafika').value == "1"){
            if(document.getElementById('rodzaj_szkla').value == "1") {
                if (document.getElementById('rodzaj_hart').value == "1") {
                    wartosc1=metry_kwadratowe*240
                } else if (document.getElementById('rodzaj_hart').value == "2") {
                    wartosc1=metry_kwadratowe*210
                }
            } else if (document.getElementById('rodzaj_szkla').value == "2"){
                if (document.getElementById('rodzaj_hart').value == "1") {
                    wartosc1=metry_kwadratowe*290
                } else if (document.getElementById('rodzaj_hart').value == "2") {
                    wartosc1=metry_kwadratowe*240
                }
            }
        } else if(document.getElementById('rodzaj_grafika').value == "2"){
            wartosc1 = metry_kwadratowe*190
        } else if(document.getElementById('rodzaj_grafika').value == "3"){
            if(document.getElementById('rodzaj_szkla').value == "1"){
                if (document.getElementById('rodzaj_hart').value == "1"){
                    wartosc1=metry_kwadratowe*290
                } else if (document.getElementById('rodzaj_hart').value == "2"){
                    wartosc1=metry_kwadratowe*240
                }
            } else if (document.getElementById('rodzaj_szkla').value == "2"){
                if (document.getElementById('rodzaj_hart').value == "1"){
                    wartosc1=metry_kwadratowe*340
                } else if (document.getElementById('rodzaj_hart').value == "2"){
                    wartosc1=metry_kwadratowe*290
                }
            }
        }
        // wartosc1   - To jest wartosc za SZYBE (GRAFIKA CZY NIE) (OPTI CZY FLOAT) (HART CZY BEZ)
        wartosc3 = metry_biezace_wyciecia*70 //za wyciecie
        wartosc4 = metry_biezace_szyby*4 //za szlif
        wartosc5 = document.getElementById('liczba_gniazdek').value*25//za gniazdka
        finalna_wartosc = wartosc1 + wartosc3 + wartosc4 + wartosc5
        document.getElementById("koszt").innerHTML=`Koszt: ${finalna_wartosc} zł`
    }

    $(document).ready(function(){
        $("#tekst_bok3").hide();
        $("#kalk_bok3").hide();
        $("#tekst_bok4").hide();
        $("#kalk_bok4").hide();
        $("#tekst_bok5").hide();
        $("#kalk_bok5").hide();
        $("#tekst_bok6").hide();
        $("#kalk_bok6").hide();
        $("#tekst_bok7").hide();
        $("#kalk_bok7").hide();
        $("#tekst_bok8").hide();
        $("#kalk_bok8").hide();

        $("#bok3").hide()
        $("#bok4").hide()
        $("#bok5").hide()
        $("#bok6").hide()
        $("#bok7").hide()
        $("#bok8").hide()
    })

function drukuj(){
    if(document.getElementById("opt1").checked == true){
        alert ("1 klik")
    } else {
        alert ("2 klik")
    }
}

function pokaz_zdjecie(){
    if(document.getElementById("opt1").checked == true){
        document.getElementById("zdjecie_srodek").setAttribute("src", "image/ksztalt1.png");
        $("#tekst_bok3").hide();
        $("#kalk_bok3").hide();
        $("#tekst_bok4").hide();
        $("#kalk_bok4").hide();
        $("#tekst_bok5").hide();
        $("#kalk_bok5").hide();
        $("#tekst_bok6").hide();
        $("#kalk_bok6").hide();
        $("#tekst_bok7").hide();
        $("#kalk_bok7").hide();
        $("#tekst_bok8").hide();
        $("#kalk_bok8").hide();
        $("#bok3").hide()
        $("#bok4").hide()
        $("#bok5").hide()
        $("#bok6").hide()
        $("#bok7").hide()
        $("#bok8").hide()

    } else if(document.getElementById("opt2").checked == true){
        document.getElementById("zdjecie_srodek").setAttribute("src", "image/ksztalt2.png");
        $("#tekst_bok3").show();
        $("#kalk_bok3").show();
        $("#tekst_bok4").show();
        $("#kalk_bok4").show();
        $("#tekst_bok5").show();
        $("#kalk_bok5").show();
        $("#tekst_bok6").show();
        $("#kalk_bok6").show();
        $("#tekst_bok7").show();
        $("#kalk_bok7").show();
        $("#tekst_bok8").show();
        $("#kalk_bok8").show();
        $("#bok3").show()
        $("#bok4").show()
        $("#bok5").show()
        $("#bok6").show()
        $("#bok7").show()
        $("#bok8").show()

    } else if(document.getElementById("opt3").checked == true){
        document.getElementById("zdjecie_srodek").setAttribute("src", "image/ksztalt3.png");
        $("#tekst_bok3").show();
        $("#kalk_bok3").show();
        $("#tekst_bok4").show();
        $("#kalk_bok4").show();
        $("#tekst_bok5").show();
        $("#kalk_bok5").show();
        $("#tekst_bok6").show();
        $("#kalk_bok6").show();
        $("#tekst_bok7").hide();
        $("#kalk_bok7").hide();
        $("#tekst_bok8").hide();
        $("#kalk_bok8").hide();
        $("#bok3").show()
        $("#bok4").show()
        $("#bok5").show()
        $("#bok6").show()
        $("#bok7").hide()
        $("#bok8").hide()

    } else if(document.getElementById("opt4").checked == true){
        document.getElementById("zdjecie_srodek").setAttribute("src", "image/ksztalt4.png");
        $("#tekst_bok3").show();
        $("#kalk_bok3").show();
        $("#tekst_bok4").show();
        $("#kalk_bok4").show();
        $("#tekst_bok5").show();
        $("#kalk_bok5").show();
        $("#tekst_bok6").show();
        $("#kalk_bok6").show();
        $("#tekst_bok7").hide();
        $("#kalk_bok7").hide();
        $("#tekst_bok8").hide();
        $("#kalk_bok8").hide();
        $("#bok3").show()
        $("#bok4").show()
        $("#bok5").show()
        $("#bok6").show()
        $("#bok7").hide()
        $("#bok8").hide()

    }
}

$(document).ready(function(){
    $("input#kalk_bok1").change(function(){
        var liczba = $("input#kalk_bok1").val();
        if(liczba>400){
            $("input#kalk_bok1").val(0);
            alert("Maksymalna wielkość: 400cm")
        } else {
            $('#bok1').text(`${liczba} cm`);
        }
    });
    $("input#kalk_bok2").change(function(){
        var liczba = $("input#kalk_bok2").val();
        if(liczba>400){
            $("input#kalk_bok2").val(0);
            alert("Maksymalna wielkość: 400cm")
        } else {
            $('#bok2').text(`${liczba} cm`);
        }
    });
    $("input#kalk_bok3").change(function(){
        var liczba = $("input#kalk_bok3").val();
        if(liczba>400){
            $("input#kalk_bok3").val(0);
            alert("Maksymalna wielkość: 400cm")
        } else {
            $('#bok3').text(`${liczba} cm`);
        }
    });
    $("input#kalk_bok4").change(function(){
        var liczba = $("input#kalk_bok4").val();
        if(liczba>400){
            $("input#kalk_bok4").val(0);
            alert("Maksymalna wielkość: 400cm")
        } else {
            $('#bok4').text(`${liczba} cm`);
        }
    });
    $("input#kalk_bok5").change(function(){
        var liczba = $("input#kalk_bok5").val();
        if(liczba>400){
            $("input#kalk_bok5").val(0);
            alert("Maksymalna wielkość: 400cm")
        } else {
            $('#bok5').text(`${liczba} cm`);
        }
    });
    $("input#kalk_bok6").change(function(){
        var liczba = $("input#kalk_bok6").val();
        if(liczba>400){
            $("input#kalk_bok6").val(0);
            alert("Maksymalna wielkość: 400cm")
        } else {
            $('#bok6').text(`${liczba} cm`);
        }
    });
    $("input#kalk_bok7").change(function(){
        var liczba = $("input#kalk_bok7").val();
        if(liczba>400){
            $("input#kalk_bok7").val(0);
            alert("Maksymalna wielkość: 400cm")
        } else {
            $('#bok7').text(`${liczba} cm`);
        }
    });
    $("input#kalk_bok8").change(function(){
        var liczba = $("input#kalk_bok8").val();
        if(liczba>400){
            $("input#kalk_bok8").val(0);
            alert("Maksymalna wielkość: 400cm")
        } else {
            $('#bok8').text(`${liczba} cm`);
        }
    });
});

$(document).ready(function(){
    $("select#rodzaj_grafika").change(function(){
        if($("select#rodzaj_grafika").val()=="2"){
            $("#blok_rodzaj_hartowanie").hide();
            $("#blok_rodzaj_szkla").hide();
        } else {
            $("#blok_rodzaj_hartowanie").show();
            $("#blok_rodzaj_szkla").show();
        }
    })
})