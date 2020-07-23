function $ (id){
    return document.getElementById(id);
}

window.addEventListener('load', ()=>{
    let styleSheet=document.createElement("link");
    styleSheet.href="https://karpad2.github.io/bgc_cookie/cookie.css";
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
    let iform=document.createElement("div");
    iform.id="iform-content-8";
    form.insertBefore(iform,$("edit-actions--2"));
    iform.innerHTML="<div class=\"field field--name-field-contact-form field--type-webform field--label-hidden field__item\">" +
        //"<form class=\"webform-submission-form webform-submission-add-form webform-submission-contact-form webform-submission-contact-add-form webform-submission-contact-block_content-8-form webform-submission-contact-block_content-8-add-form formcontact row form-inputs contact-css js-webform-details-toggle webform-details-toggle\" data-drupal-selector=\"webform-submission-contact-block-content-8-add-form\" action=\"/\" method=\"post\" id=\"webform-submission-contact-block-content-8-add-form\" accept-charset=\"UTF-8\" data-drupal-form-fields=\"edit-lastname,edit-firstname,edit-message,edit-email,edit-actions-submit\">\n" +
        "<div class=\"form-group custom-form-group col-md-12 js-form-item form-item js-form-type-one-page form-type-one-page js-form-item-message form-item-message form-no-label\">\n" +
        "        <input style=\"color: #aaa;border-radius: 30px; box-shadow: none; height: 52px; border: none;width: 100%; padding-left: 25px;padding-right: 25px;\" data-drupal-selector=\"edit-firstname\" type=\"text\" id=\"edit-firstname\" name=\"firstname\" value=\"\" size=\"60\" maxlength=\"255\" placeholder=\"Név\" class=\"form-text\">\n" +
        "\n" +
        "        </div>\n" +
        "<div class=\"form-group custom-form-group col-md-12 js-form-item form-item js-form-type-one-page form-type-one-page js-form-item-message form-item-message form-no-label\">\n" +
        "        <input style=\"color: #aaa;border-radius: 30px; box-shadow: none; height: 52px; border: none;width: 100%; padding-left: 25px;padding-right: 25px;\" data-drupal-selector=\"edit-email\" type=\"email\" id=\"edit-email\" name=\"email\" value=\"\" size=\"60\" maxlength=\"254\" placeholder=\"Email cím\" class=\"form-email\">\n" +
        "\n" +
        "        </div>\n" +
        "<div class=\"form-group custom-form-group col-md-12 js-form-item form-item js-form-type-one-page form-type-one-page js-form-item-message form-item-message form-no-label\">\n" +
        "        <div class=\"form-textarea-wrapper\">\n" +
        "  <textarea data-drupal-selector=\"edit-message\" id=\"edit-message\" name=\"message\" rows=\"7\" cols=\"60\" placeholder=\"Üzenet\" class=\"form-textarea resize-vertical\"></textarea>\n" +
        "</div>\n" +
        "\n" +
        "        </div>\n" +
        "<div class=\"form-group custom-form-group col-md-12 js-form-item form-item js-form-type-one-page form-type-one-page js-form-item-message form-item-message form-no-label\">\n" +
        "<input class=\"webform-button--submit custom-button contact-btn button button--primary js-form-submit form-submit\" style=\"border-radius: 30px; box-shadow: none; height: 52px; border: none;width: 100%; padding-left: 25px;padding-right: 25px;\" data-drupal-selector=\"edit-actions-submit\" type=\"submit\" id=\"edit-actions-submit\" name=\"op\" value=\"Üzenet küldése\">\n" +
        "\n" +
        "</div>"+
    "";
    $("edit-actions--2").style.display="none";

})
function saveconsent(_t)
{
    if(_t==true) localStorage.setItem("cookie-warner","1");
    document.getElementById("cookie_banner").style.display="none";
}
