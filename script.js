var btn1 = document.querySelector("#bt1")
var btn2 = document.querySelector("#bt2")
var btns = [btn1, btn2]


var x = document.getElementById("parent")
// btns.forEach(element => {
//     element.addEventListener("click", openDescription)
// });

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
        console.log(document.getElementById(this.id).parentNode.childNodes)
        // let divOldButn = document.getElementById(this.id).parentNode.childNodes[1].id
        let details = document.getElementById(document.getElementById(this.id).parentNode.childNodes[7].id)
        let oldBtn = document.getElementById(document.getElementById(this.id).parentNode.childNodes[1].id)
        let newBtn = document.getElementById(document.getElementById(this.id).parentNode.childNodes[3].id)
        let tam = document.getElementById(document.getElementById(this.id).parentNode.id)
        let img = document.getElementById(document.getElementById(this.id).parentNode.childNodes[5].id)

        let tamImg = img.clientWidth
        console.log(tamImg)
        tam.style.height = '40vh';
        tam.style.transition = "height 1s";
        img.style.height = '30vh';
        tam.style.alignItems = "initial";
        oldBtn.style.display = 'none';
        newBtn.style.display = 'block';
        details.style.cssText = `
            display: flex;
            aling-itens: bottom;
            position: absolute;
            margin-top: 32vh;
            `;
        newBtn.addEventListener("click", function(){
            tam.style.transition = "height 1s";
            tam.style.height = '30vh';
            oldBtn.style.cssText = `
                display : block;
                margin-left: (-127.54/2)px;
                margin-top: 123.54px;
            `;
            newBtn.style.display = 'none';
            img.style.height = '30vh';
            details.style.display = 'none';
        });
    })
}

function openDescription(){
    console.log('alo');
    // document.querySelector('.thisBox').appendChild(btn).setAttribute("class", "closeDetails");
    // let newBtn = document.querySelector('.closeDetails');
    let tam = document.querySelector(".thisBox");
    let img = document.querySelector(".imgBox");
    tam.style.transition = "height 1s";
    tam.style.height = '70vh';
    img.style.height = 'fit-content';
    tam.style.alignItems = "initial";
    oldBtn.style.display = 'none';
    // newBtn.style.cssText = `
    //     display : block;
    //     top: 2%;
    //     left: 90%;
    // `;
    // newBtn.addEventListener("click", closeDescription);

    linksDescription();
    // document.getElementById("descriptionProject").style.display = "block";
}

function closeDescription(){
    let newBtn = document.querySelector('.closeDetails');

    let tam = document.querySelector(".thisBox");
    let img = document.querySelector(".imgBox");

    // let oldBtn = document.getElementById('detailsButton');
    // let newBtn = document.getElementById('closeDetails');
    tam.style.transition = "height 1s";
    tam.style.height = '30vh';
    oldBtn.style.cssText = `
        display : block;
        left: 50%;
        margin-left: -21.5px;
        top: 50%;
        margin-top: -44.91px;
    `;
    newBtn.style.display = 'none';
    img.style.height = '30vh';
    getDetails.style.display = 'none';
}

function linksDescription(){
    getDetails.style.display = 'block';
}