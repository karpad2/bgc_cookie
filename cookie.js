function _$ (id){
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
      //  _$("cookie_banner").style.display="none";
        }
    else {
        let warner=document.createElement("div");
        warner.id="cookie_banner";
        warner.className="sp-banner-show lower";
        document.body.appendChild(warner);
        //console.log(warner);
        _$("cookie_banner").innerHTML="<div id=\"grouped-pageload-Banner\">\n" +
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
    let box_form=_$("webform_submission_contact_block_content_8_add_form-ajax");
    if(box_form!=null) {
        //console.log(box_form);
        _$("webform-submission-contact-block-content-8-add-form").remove();
        let iform = document.createElement("div");
        iform.id = "iform-content-8";
        /*form.insertBefore(iform,_$("edit-actions--2"));
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
            " <div class=\"form-textarea-wrapper\">\n" +
            "  <textarea data-drupal-selector=\"edit-message\" id=\"edit-message\" name=\"uzenet\" rows=\"7\" cols=\"60\" placeholder=\"Üzenet\" class=\"form-textarea resize-vertical\"></textarea>\n" +
            "</div>\n" +
            "\n" +
            "        </div>\n" +
            "<div class=\"form-group custom-form-group col-md-12 js-form-item form-item js-form-type-one-page form-type-one-page js-form-item-message form-item-message form-no-label\">\n" +
            "<input class=\"webform-button--submit custom-button contact-btn button button--primary js-form-submit form-submit\" style=\"border-radius: 30px; box-shadow: none; height: 52px; border: none;width: 100%; padding-left: 25px;padding-right: 25px;\" data-drupal-selector=\"edit-actions-submit\" type=\"submit\" id=\"edit-actions-submit-form\" name=\"op\" value=\"Üzenet küldése\">\n" +
            "\n" +
            "</div>"+
        "";
       // _$("webform-submission-contact-block-content-8-add-form").action="#";
        //let form_token= _$("webform-submission-contact-block-content-8-add-form").childNodes[3];
        //console.log(form_token);*/
        let contact = new XMLHttpRequest();
        contact.open("GET", "http://dev.bgcteambuilding.hu/hu/form/uzenetek");
        contact.setRequestHeader("Content-Type", "text/xml");
        let parser = new DOMParser();
        let other_page = null;
        let other_form = null
        let token = null;
        contact.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                //console.log(this);
                other_page = parser.parseFromString(this.response, "text/html");
                other_form = other_page.getElementById("webform-submission-uzenetek-add-form");
                //console.log(other_form);
                box_form.appendChild(other_form);
                //stylok beállítása
                //onsole.log(_$("edit-nev").parentNode);
                _$("edit-nev").parentElement.className = "form-group custom-form-group col-md-12 js-form-item form-item js-form-type-one-page form-type-one-page js-form-item-message form-item-message form-no-label";
                //_$("edit-nev").style="color: #aaa;border-radius: 30px; box-shadow: none; height: 52px; border: none;width: 100%; padding-left: 25px;padding-right: 25px;"
                _$("edit-email").parentElement.className = "form-group custom-form-group col-md-12 js-form-item form-item js-form-type-one-page form-type-one-page js-form-item-message form-item-message form-no-label";
                //_$("edit-email").style="color: #aaa;border-radius: 30px; box-shadow: none; height: 52px; border: none;width: 100%; padding-left: 25px;padding-right: 25px;";
                _$("edit-uzenet").parentElement.className = "form-group custom-form-group col-md-12 js-form-item form-item js-form-type-one-page form-type-one-page js-form-item-message form-item-message form-no-label form-textarea-wrapper";
                _$("edit-submit").className = "webform-button--submit custom-button contact-btn button button--primary js-form-submit form-submit";
                //_$("edit-submit").style="border-radius: 30px; box-shadow: none; height: 52px; border: none;width: 100%; padding-left: 25px;padding-right: 25px;";

                /*var aform = $('#webform-submission-uzenetek-add-form');
                aform.submit(function(e) {
                    // prevent form submission
                    e.preventDefault();

                    // submit the form via Ajax
                    $.ajax({
                        url: aform.attr('action'),
                        type: aform.attr('method'),
                        dataType: 'html',
                        data: aform.serialize(),
                        success: function(result) {
                            // Inject the result in the HTML
                           // $('#form-result').html(result);
                        },
                        complete: function(result) {
                            $('html, body').animate({
                                scrollTop: $("#form-result").offset().top
                            }, 2000);

                        }
                    });
                });*/

            }
        }
        contact.send("");
    }
});


