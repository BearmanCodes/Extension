
/*(window.location.href.indexOf("amazon.com") != -1){
    
    $("#nav-link-accountList-nav-line-1").text("Hello, Bearman"); //Change the thing above account and lists to say Hello, Bearman

    
    $("#nav-flyout-anchor > div.nav-signin-tt.nav-flyout").css('display', 'none'); //Hide the pop up that says sign in
    $("#nav-al-signin").hide(); //Hide the banner that pops up with Sign in when you hover over your account details in Account & Lists
    $("#nav-al-your-account").append(`<a href="#" class="nav-link nav-item"><span class="nav-text">Switch Accounts</span></a>`); //Add switch accounts button
    $("#nav-al-your-account").append(`<a href="#" class="nav-link nav-item"><span class="nav-text">Sign Out</span></a>`); //Add Sign out button
   

    $("#glow-ingress-line1").text("Deliver to Bearman"); //Change Hello to Deliver to Bearman
    $("#glow-ingress-line2").text("New York, NY"); //Change address text to New York, NY

    $("#desktop-grid-1-D1").css('display', 'none'); //Hide the sign in ad

    //Start buy it now crap
    
    $("#add-to-cart-button").click(function(e) { //Disable add to cart button
        e.preventDefault();
    }); 

    function buyItNowBanner(){
        alert("BOUGHT!");
    }

    $("#buy-now-button").click(function(e) { //Disable but it now button
        e.preventDefault();
        buyItNowBanner();
    }); 
}
*/

if(window.location.href.indexOf("whatsmyip.com") != -1){
    $("#shownIpv4").text("71.159.22.100"); //Change huge public IP Address
    $("#ipv4").text("71.159.22.100"); //Change the ip address on the side
    $(`#contact > div > div > div > div.col-lg-3.col-md-12.text-left.no-padding.fs19.details > div > 
    span:nth-child(5)`).text("Michigan"); //Change the Region on the side
    $(`#contact > div > div > div > div.col-lg-3.col-md-12.text-left.no-padding.fs19.details > div > 
    span:nth-child(7)`).text("Detroit"); //Change the City on the side
    $(`#contact > div > div > div > div.col-lg-3.col-md-12.text-left.no-padding.fs19.details > div > 
    span:nth-child(9)`).text("48226"); //Change the Zip code
    $(`#contact > div > div > div > div.col-lg-3.col-md-12.text-left.no-padding.fs19.details > div > 
    span:nth-child(11)`).text("42.332296/-83.050948"); //Change the Lat and Long
    $(`#contact > div > div > div > div.col-lg-3.col-md-12.text-left.no-padding.fs19.details > div > 
    span:nth-child(13)`).text("America/Detroit"); //Change the Time Zone
    $("body > div.container.full-width.background-grey.p-b-20 > div > div:nth-child(2)").remove();
}

$(document).ready(function() {
    if((window.location.href.toLowerCase().includes("ip") && window.location.href.toLowerCase().includes("my")) 
    || (window.location.href.toLowerCase().includes("my") && window.location.href.toLowerCase().includes("pi"))){

        window.location.href = "https://www.google.com";
    } else{
        document.getElementsByTagName("html")[0].style.visibility = "visible";
    }
})



 
