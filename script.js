if (window.location.href.indexOf("amazon.com") != -1){
    
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

    $("#buy-now-button").click(function(e) { //Disable but it now button
        e.preventDefault();
        buyItNowBanner();
    }); 
}