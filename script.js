window.addEventListener("load", kezdofuggveny);
function kezdofuggveny(){
    /**generálunk egy véletlen számot, egész szám, [-20, 20] 
     * között eltároljuk egy változóba
     * Írjuk ki, hogy negatív vagy pozitív
     */
    let vel=Math.floor(Math.random()*(20+20+1))-20;
    /**hogy irjuk ki hogy neagtív vagy pozitív */
    if (vel > 0){
        console.log("Pozitív");
    }else if (vel < 0){
        console.log("Negatív");
    }else{
        console.log("nulla");
        }
    /**Listák */
    const veletlenLista = [];
    /**Azonos títulusú elemeket tároljunk! */
    /** 10 véletlen számot tárolunk a listában */
    for (let index = 0; index < 10; index++){
        let vel = Math.floor(Math.random() *(20 + 20 + 1)) - 20;
    veletlenLista.push(vel);
    }
    console.log(veletlenLista);
    console.log(veletlenLista.length);
    console.log("3. elem", veletlenLista[2]);
    veletlenLista[2]=100;
    console.log(veletlenLista);
    for (let index = 0; index < veletlenLista.length; index++) {
        console.log(veletlenLista[index]);
        osszeg += veletlenLista[index];
    }
    /**Figyeéj arra mekkora a listában a maximális
     * index, és a feletti érték
     */
    /**Írjuk ki a listában lévő számok összegét! */
    console.log("összeg", osszeg);
    let utolsoElem=veletlenLista.pop()/**Utolsó elem elvétele */
    console.log(utolsoElem);
    console.log(veletlenLista.length);
    console.log(veletlenLista);
}
/**let var const közötti különbségek */
