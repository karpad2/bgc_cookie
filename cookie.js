function $ (id){
    return document.getElementById(id);
}
function saveconsent(_t)
{
    if(_t==true) localStorage.setItem("cookie-warner","1");
    document.getElementById("cookie_banner").style.display="none";
}
window.addEventListener('load', ()=>{
    let styleSheet=document.createElement("link");
    styleSheet.href="http://dev.bgcteambuilding.hu/themes/bgc_cookie/cookie.css";
    styleSheet.type="text/css";
    styleSheet.rel="stylesheet";
    let x = localStorage.getItem("cookie-warner");
    document.head.appendChild(styleSheet);

    if(x!=null){
      //  $("cookie_banner").style.display="none";
        }
    else {
        let warner=document.createElement("div");
        warner.id="cookie_banner";
        warner.className="sp-banner-show lower";
        document.body.appendChild(warner);
        //console.log(warner);
        $("cookie_banner").innerHTML="<div id=\"grouped-pageload-Banner\">\n" +
            "        <div style=\"overflow: auto; background-color:#00965d; color: #ffffff;\">\n" +
            "            <div class=\"sp-introduction-banner\" style=\"margin:0 auto;overflow:auto;padding: 10px 0px;\">\n" +
            "                <div class=\"group-content-text\">\n" +
            "                    <div class=\"sp-cookie-banner-2\"\n" +
            "                         style=\"line-height:25px;color:#ffffff;font-size: 16px;color:#ffffff\">\n" +
            "                        <p class=\"consent-text\">Sütiket használunk az oldalunk megfelelő működésének biztosításához, a tartalmak és hirdetések személyre szabásához, közösségi média funkciók felkínálásához és az oldalunk látogatottságának elemzéséhez. Oldalhasználattal kapcsolatos információkat is megosztunk a közösségi média területén tevékenykedő, a hirdetési és elemzési szolgáltatásokat nyújtó partnereinkkel.</p>\n" +
            "                        </div>\n" +
            "                    <div class=\"sp-cookie-banner-3\">\n" +
            "                        <button class=\"intro-banner-btn\" tabindex=\"1\"\n" +
            "                                onclick=\"saveconsent(true)\"\n" +
            "                                style=\"background-color: #7ebf4b; color:#ffffff\">OK\n" +
            "                        </button>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "    </div>";
        document.getElementById("cookie_banner").style.display = "block";
    //custom form
    }
    let form=$("webform-submission-contact-block-content-8-add-form");
    console.log(form);
    $("edit-submit").remove();
    let iform=document.createElement("div");
    iform.id="iform-content-8";
    form.insertBefore(iform,$("edit-actions--2"));
    iform.innerHTML="<div class=\"field field--name-field-contact-form field--type-webform field--label-hidden field__item\">" +
        "<div class=\"form-group custom-form-group col-md-12 js-form-item form-item js-form-type-one-page form-type-one-page js-form-item-message form-item-message form-no-label\">\n" +
        "        <input style=\"color: #aaa;border-radius: 30px; box-shadow: none; height: 52px; border: none;width: 100%; padding-left: 25px;padding-right: 25px;\" data-drupal-selector=\"edit-firstname\" type=\"text\" id=\"edit-name\" name=\"nev\" value=\"\" size=\"60\" maxlength=\"255\" placeholder=\"Név\" class=\"form-text\">\n" +
        "\n" +
        "        </div>\n" +
        "<div class=\"form-group custom-form-group col-md-12 js-form-item form-item js-form-type-one-page form-type-one-page js-form-item-message form-item-message form-no-label\">\n" +
        "        <input style=\"color: #aaa;border-radius: 30px; box-shadow: none; height: 52px; border: none;width: 100%; padding-left: 25px;padding-right: 25px;\" data-drupal-selector=\"edit-email\" type=\"email\" id=\"edit-email\" name=\"email_cim\" value=\"\" size=\"60\" maxlength=\"254\" placeholder=\"Email cím\" class=\"form-email\">\n" +
        "\n" +
        "        </div>\n" +
        "<div class=\"form-group custom-form-group col-md-12 js-form-item form-item js-form-type-one-page form-type-one-page js-form-item-message form-item-message form-no-label\">\n" +
        "        <div class=\"form-textarea-wrapper\">\n" +
        "  <textarea data-drupal-selector=\"edit-message\" id=\"edit-message\" name=\"uzenet\" rows=\"7\" cols=\"60\" placeholder=\"Üzenet\" class=\"form-textarea resize-vertical\"></textarea>\n" +
        "</div>\n" +
        "\n" +
        "        </div>\n" +
        "<div class=\"form-group custom-form-group col-md-12 js-form-item form-item js-form-type-one-page form-type-one-page js-form-item-message form-item-message form-no-label\">\n" +
        "<input class=\"webform-button--submit custom-button contact-btn button button--primary js-form-submit form-submit\" style=\"border-radius: 30px; box-shadow: none; height: 52px; border: none;width: 100%; padding-left: 25px;padding-right: 25px;\" data-drupal-selector=\"edit-actions-submit\" type=\"submit\" id=\"edit-actions-submit-form\" name=\"op\" value=\"Üzenet küldése\">\n" +
        "\n" +
        "</div>"+
    "";
    $("webform-submission-contact-block-content-8-add-form").action="#";
    //let form_token= $("webform-submission-contact-block-content-8-add-form").childNodes[3];
    //console.log(form_token);
    let message_= new XMLHttpRequest();
    message_.open("GET","http://dev.bgcteambuilding.hu/hu/form/uzenetek");
    message_.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    let token=null;
    message_.onreadystatechange = function() { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            token = this.responseXML.getElementById("webform-submission-uzenetek-add-form").childNodes[3];
            console.log("token:"+token);
        }
    }
    $("webform-submission-contact-block-content-8-add-form").addEventListener("submit",(e)=>{
        e.preventDefault();
        var xhr = new XMLHttpRequest();
        xhr.open("POST", 'http://dev.bgcteambuilding.hu/hu/form/uzenetek?ajax_form=1&_wrapper_format=drupal_ajax', true);
        //Send the proper header information along with the request
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.onreadystatechange = function() { // Call a function when the state changes.
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                // Request finished. Do processing here.
                console.log("Form sended");
            }
        }
        let message="nev="+$("edit-name").value + "&email="+$("edit-email").value +"&uzenet=" + $("edit-message").value + "&form_build_id=form-gX00IKWAGENyGN3-GRr9cNz--PwTQRnUsFf7z27pMRs&form_id=webform_submission_uzenetek_add_form&form_token="+form_token.value;
        xhr.send(message);
        console.log(message);
    });

})
