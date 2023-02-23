window.addEventListener("load", init);
function init(){
    fuggvenyVar();
    fuggvenyLet();
    fuggvenyConst();
}

var valt=12; /**globális változó - hatóköre olyan, hogy a teljesen fájlban bármely 
metódusból elérhető */
console.log("valt", valt);
let valt10=20;
console.log("valt10", valt10);

function fuggvenyVar(){
    /**varral a valtozok deklaracioja
     * barhol is van a metoduson belul 
     * ugy viselkedik, mintha a hatóköre tetején deklaráltuk volna.
     * HOISTING - felemelés
     */
    console.log=("valt1", valt1);
    var valt1 = 5; /**hatóköre a metódusban belül él */
    console.log=("valt1", valt1);
    var valt1=23;/**felül tudom írni a változó értékét */
    console.log=("valt1", valt1);
}
//console.log=("valt1", valt1);
//console.log=("valt", valt);

function fuggvenyLet(){
/** Let esetében nincs Hoisting */
    
    //console.log("valtLet", valtLet);
    let valtLet=30;/**akkor jön létre a változó amikor deklarálom nem emelkedik a htokore tetejere */
    console.log("valtLet", valtLet);
    
    //let valtLet=50/**nem lehet felül deklarálni */
    //console.log("valtLet", valtLet);

    let valt = 2000;
    console.log=("valt", valt);
    
    if(true){
        let x=5/** hatokore a blokkon belul érvényes */
        console.log("x", x);
        console.log("valtLet", valtLet);

    }
    //console.log("x", x);
    {
        let y=10;
        console.log("y", y);
    }
    //console.log("y", y);
    for (var index=0; index < 10; index++){
        console.log(index);
    }
    console.log(index);
}

function fuggvenyConst(){
    const valt =20;
    console.log(valt);
    //valt12;
    const lista=["alma","körte"];
    //lista=["béka","nyúl"]
    lista.push(lista);
    console.log(lista);
    lista[0]="szőlő";
    console.log(lista);
    lista.pop();
    lista.pop();
    lista.pop();
    console.log(lista);



    /**A constans lista újra nem deklarálható 
     * de az értékei megvátoztathatóak!
     * sőt, törölhetünk belőle elemeket!
     * hozzá is adhatunk elemeket!
     * 
     * miért van ez?
     * a lista deklarációjakor
     * 
     */
}