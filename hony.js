function flax(){

    var brhon = dool.value;
    var hotest = gosta.value;
    var stan = londer.value;

    console.log(brhon)
    console.log(hotest)
    console.log(stan)

    let block;
    if(localStorage.srod != null){
        block = JSON.parse(localStorage.srod)
    }else{
        block = [];
    }

    block.push("name: "+brhon, "price: " +hotest, "xpier: "+stan)


    localStorage.setItem("srod", JSON.stringify(block))

    console.log(block)

}

function snow(){

    let block;
    if(localStorage.srod != null){
            block = JSON.parse(localStorage.srod)
    }else{
        block = [];
    }

    let stone = document.getElementById("fantom");
    let hony = document.getElementById("wanom");
    let tony = document.getElementById("rantom");


    stone.append(block.slice(0,3))
    hony.append(block.slice(3,6))
    tony.append(block.slice(6,9))

    console.log(block)

}