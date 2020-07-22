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
        console.log(warner);
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
        document.getElementById("cookie_banner").style.display = "block";}
})
function saveconsent(_t)
{
    if(_t==true) localStorage.setItem("cookie-warner","1");
    document.getElementById("cookie_banner").style.display="none";
}
