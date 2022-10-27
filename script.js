
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

const sleep = ms => new Promise(r => setTimeout(r, ms));

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

if(window.location.href.indexOf("play.google.com") != -1){
    async function thing(){
        await sleep(2000);
        const list = $(`#yDmH0d > c-wiz.SSPGKf.glB9Ve.nI07g > div > div > div:nth-child(2) > 
        div.QNJc5c > ul`);
        
        list.empty();
        list.append(`<li class="IFOh3c ">
        <button class="wtAAs FJcfob"><span class="eiNd8b">
        <img src="https://play-lh.googleusercontent.com/NXIlvcvdFgCsaePpQn12_24M0ANTjJTsEr5zr8i_21WTTLieGFrFmBywe_i05TB8I3N5kQ" 
        class="T75of cn8Ate" aria-hidden="true" data-iml="2731.800000011921"></span>
        <span class="yqsZud">
        <div class="HgYqic">Add PayPal</div></span></button></li>`);
        list.append(`<li class="IFOh3c ">
        <button class="wtAAs FJcfob"><span class="eiNd8b">
        <img src="https://play-lh.googleusercontent.com/Sy-qD8BSR4BY5bwfx_ptzE1utvlH9jXr1S8V7LBM4VKlDwyOLQp-tyYConlAm44T0bgsOw" 
        class="T75of cn8Ate" aria-hidden="true" data-iml="2202.699999988079"></span>
        <span class="yqsZud">
        <div class="HgYqic">Add credit or debit card</div></span></button></li>`);
        list.append(`<li class="IFOh3c ">
        <button id="redeem-button" class="wtAAs FJcfob"><span class="eiNd8b">
        <img src="https://play-lh.googleusercontent.com/cLoY1LUlKHXk6U2Rrko1-ICqFRkpW8fv45wSuPEH5-D9qQhJfF5KXo2mL8-zy6PplCyZ" 
        class="T75of cn8Ate" aria-hidden="true" data-iml="2408.4000000059605"></span>
        <span class="yqsZud">
        <div class="HgYqic">Redeem code</div></span></button></li>`);
        await sleep(250);
        $("#redeem-button").click(function (e) { 
            alert("Redeem");
        });
    }
    thing();
}

//button class .wtAAs FJcfob
//list class IFOh3c 
*/

if (window.location.href.indexOf("app.sycamoreschool") != -1){
    $("#theForm > div > div > div.row.loginDiv > div.span8.schoolPicture.hidden-tablet.hidden-phone.hidden-mid").remove();
    $("#theForm > div > div > div.row.loginDiv").prepend(`<div class=span8>
    <img src="https://raw.githubusercontent.com/BearmanCodes/Extension/main/Kiryu.jpg" height="426px" width="770px">
    </div>`);
}