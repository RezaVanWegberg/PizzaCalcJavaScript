InputTextLabelKlein = 0
InputTextLabelMedium = 0
InputTextLabelLarge = 0


document.getElementById("KleineButton").onclick = function () {

    InputTextLabelKlein = document.getElementById("InputTextKlein").value;
    console.log("value of klein =", InputTextLabelKlein);
    document.getElementById("NumberKlein").innerHTML = InputTextLabelKlein;

    BerekenTotaal()


}

document.getElementById("MediumButton").onclick = function () {

    InputTextLabelMedium = document.getElementById("InputTextMedium").value;
    console.log("value of medium =", InputTextLabelMedium);
    document.getElementById("NumberMedium").innerHTML = InputTextLabelMedium;

    BerekenTotaal()

}

document.getElementById("LargeButton").onclick = function () {

    InputTextLabelLarge = document.getElementById("InputTextLarge").value;
    console.log("value of large =", InputTextLabelLarge);
    document.getElementById("NumberLarge").innerHTML = InputTextLabelLarge;

    BerekenTotaal()

}

function BerekenTotaal() {
    KleinePrijs = 5 * InputTextLabelKlein
    MediumPrijs = 9 * InputTextLabelMedium
    LargePrijs = 13 * InputTextLabelLarge
    TotalePrijs = KleinePrijs + MediumPrijs + LargePrijs

    document.getElementById("PrijsTotaalBerekend").innerHTML = TotalePrijs
}

