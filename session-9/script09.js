// document.querySelector(".creer-titre").addEventListener("click",function(){
    // const parent = document.querySelector(".section-1");
    // const titre =document.createElement("h1") ;
    // titre.innerHTML = "this is a title";
    // titre.style.backgroundColor = "aqua";
    // titre.style.color = "blue";
    // parent.append(titre);
    // const paragraphe =document.createElement("p");
    // paragraphe.innerHTML = "c'est une paragraphe";
    // paragraphe.style.backgroundColor ="red";
    // parent.append(paragraphe);
    
 
// })
//.querySelector(".btn-supp").addEventListener("click",function(){
    // const parent = document.querySelector(".section-1");
    // const enfant = document.querySelector(".paragraphe-1");

    // document.querySelector(".a-supprimer").remove();
    // parent.removeChild(enfant);

//})document
// document.querySelector(".btn-remplacer").addEventListener("click",function(){
//     const parent= document.querySelector(".section-1");
//     const ancElement = document.querySelector(".paraghraphe-1");
//     const nouvElement = document.querySelector(".titre-1");

//     parent.replaceChild(nouvElement,ancElement)

// })
document.querySelector(".btn-creer-conteneur").addEventListener("click",function(){
    const vConteneur = document.createElement("div");
    vConteneur.classList.add("container")
    //set attribut
    vConteneur.setAttribute("id","conteneur")
    vConteneur.setAttribute("name","conteneurName")
    document.body.append(vConteneur)

    vConteneur.classList.add("bordure")


    
    document.querySelector(".titre").classList.add("encadrer")
    
    
})