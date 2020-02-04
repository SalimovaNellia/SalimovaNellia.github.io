window.onload = function(){
    createSelect();
};

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

let list = [];

function createSelect(){
    let selectWrap = document.querySelectorAll("[data-select='active']"),
        select_ = '';

    for (let e = 0; e < selectWrap.length; e++) {
        selectWrap[e].setAttribute('data-index-select', e);
        selectWrap[e].setAttribute('data-select-open','false');

        let ulContent = document.querySelectorAll("[data-index-select='"+e+"'] > .options-list-wrap > ul");

        select_ = document.querySelectorAll("[data-index-select='"+e+"'] >select")[0];

        if (isMobileDevice()) {
            select_.addEventListener('change', function () {
                selectOption(select_.selectedIndex, e);
            });
        }


        let selectOptions = select_.options;

        document.querySelectorAll("[data-index-select='"+e+"']  > .selected-option ")[0].setAttribute('data-n-select',e);
        document.querySelectorAll("[data-index-select='"+e+"']  > .select-icon ")[0].setAttribute('data-n-select',e);

        for (let i = 0; i < selectOptions.length; i++) {
            list[i] = document.createElement('li');
            if (selectOptions[i].selected == true || select_.value == selectOptions[i].innerHTML ) {
                list[i].className = 'active';
                document.querySelector("[data-index-select='"+e+"']  > .selected-option ").innerHTML = selectOptions[i].innerHTML;
            }

            list[i].setAttribute('data-index', i);
            list[i].setAttribute('data-select-index', e);
            list[i].addEventListener( 'click', function(){ selectOption(this.getAttribute('data-index'), this.getAttribute('data-select-index')); });

            list[i].innerHTML = selectOptions[i].innerHTML;
            ulContent[0].appendChild(list[i]);

        }
    }
}

function openSelect(index){
    let idx1 =  index.getAttribute('data-n-select');

    let ul_cont_li = document.querySelectorAll("[data-index-select='"+idx1+"'] .options-list > li");
    let hg = 0;
    let slect_open = document.querySelectorAll("[data-index-select='"+idx1+"']")[0].getAttribute('data-select-open');
    let slect_element_open = document.querySelectorAll("[data-index-select='"+idx1+"'] select")[0];

    if (isMobileDevice()) {
        if (window.document.createEvent) { // All
            let event = window.document.createEvent("MouseEvents");
            event.initMouseEvent("mousedown", false, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            slect_element_open.dispatchEvent(event);
        } else if (slect_element_open.fireEvent) { // IE
            slect_element_open.fireEvent("onmousedown");
        }else {
            slect_element_open.click();
        }
    }else {

        for (let i = 0; i < ul_cont_li.length; i++) {
            hg += ul_cont_li[i].offsetHeight;
        };
        if (slect_open == 'false') {
            document.querySelectorAll("[data-index-select='"+idx1+"']")[0].setAttribute('data-select-open','true');
            document.querySelectorAll("[data-index-select='"+idx1+"'] > .options-list-wrap > ul")[0].style.height = hg+"px";
            document.querySelectorAll("[data-index-select='"+idx1+"'] > .select-icon")[0].style.transform = 'rotate(180deg)';
        }else{
            document.querySelectorAll("[data-index-select='"+idx1+"']")[0].setAttribute('data-select-open','false');
            document.querySelectorAll("[data-index-select='"+idx1+"'] > .select-icon")[0].style.transform = 'rotate(0deg)';
            document.querySelectorAll("[data-index-select='"+idx1+"'] > .options-list-wrap > ul")[0].style.height = "0px";
        }
    }
}

function closeSelect(index){
    let select_ = document.querySelectorAll("[data-index-select='"+index+"'] > select")[0];
    document.querySelectorAll("[data-index-select='"+index+"'] > .options-list-wrap > ul")[0].style.height = "0px";
    document.querySelector("[data-index-select='"+index+"'] > .select-icon").style.transform = 'rotate(0deg)';
    document.querySelectorAll("[data-index-select='"+index+"']")[0].setAttribute('data-select-open','false');
}


function selectOption(indx,selc){
    if (isMobileDevice()) {
        selc = selc -1;
    }
    let select_ = document.querySelectorAll("[data-index-select='"+selc+"'] > select")[0];

    let li_s = document.querySelectorAll("[data-index-select='"+selc+"'] .options-list > li");
    let p_act = document.querySelectorAll("[data-index-select='"+selc+"'] > .selected-option")[0].innerHTML = li_s[indx].innerHTML;
    let select_optiones = document.querySelectorAll("[data-index-select='"+selc+"'] > select > option");
    for (let i = 0; i < li_s.length; i++) {
        if (li_s[i].className == 'active') {
            li_s[i].className = '';
        }
        li_s[indx].className = 'active';

    }
    select_optiones[indx].selected = true;
    select_.selectedIndex = indx;
    select_.onchange();
    closeSelect(selc);
}








