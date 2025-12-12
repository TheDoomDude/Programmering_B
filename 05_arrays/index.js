var currentPage ='#page2'
var listeInput, listeHeading, listeButton, listeContainer

function preload(){

}
//P5 setup() bliver kaldt en gang føre siden vises
function setup(){
    console.log('P5 setup kaldt')

    //skift til current page
    shiftPage(currentPage)

    //Vi opretter et array me firkantede paranteser
    var klassen2T = ["Balder", "Asta", "Viggo", "Bertram","Tobias","Selma","Toke","Victor"]


    //Hvor mange elementer
    console.log(klassen2T.length, "Elementer i listen")
    //sådan bruger vi et element
    console.log(klassen2T[0], 'er den første i listen')
    //Sådan lægger vi nye elementer til
    klassen2T.push("Mollie")
    klassen2T.push("Mads")
    klassen2T.push("Nikolai")
    klassen2T.push("Asbjørn")
    klassen2T.push("Julemand")
    klassen2T.push("Gilbert")
    klassen2T.push("John")
    klassen2T.push("Lisbet")
    klassen2T.push("Silas")
    klassen2T.push("Milas")
    klassen2T.push("Ludvig")
    klassen2T.push("Sebastian")
    klassen2T.push("Flóki")
    klassen2T.push("Amadeus")

    console.log(klassen2T, klassen2T.length)

    //sådan looper vi igennem et array:
    klassen2T.map((e) => {
        console.log('Denne person i klassen heder ' + e)
    
    })


    //page2 - Liste basics
    // DOM BINDING
    listeButton = select('#listeButton')
    listeHeading = select('#listeHeading')
    listeInput = select('#listeInput')
    listeContainer = select('#listeContainer')

    //der er et input felt en container og en knap til at tilføje nye elementer på siden.
    createElever(klassen2T, listeContainer)

    //Sørg for at indsætte Astrid når der trykkes på knappen
    listeButton.mousePressed( () => {
        if(listeInput.value() != 'Astrid'){
            confirm('Du er blevet til ingenting')
        }else{
            klassen2T.push(listeInput.value())
            createElever(klassen2T, listeContainer)
            listeContainer.elt.scrollTop = listeContainer.elt.scrollHeight
        }
        listeInput.value('')
    })

    //Sæt menu op
    // hent alle sider som et array
  var allPages = selectAll('.page')
    // Løb listen igennem en for en
    allPages.map( 
        page => {
            // Lav et nyt <a> element 
            var menuItem = createElement('a')
            menuItem.html(page.attribute('title'))
            // sæt eventlistener på a tagget
            menuItem.mousePressed(
                ()=>shiftPage('#' + page.attribute('id'))      
            )
            // sæt a tagget ind i sidebaren
            select('.sidebar').child(menuItem)

        }
    )
}

function shiftPage(newPage){
    select(currentPage).removeClass('show')
    select(newPage).addClass('show')
    currentPage = newPage
}

//tager to argumenter - hvilken liste den skal gøre noget med og hvor den skal gøre af resultatet
function createElever(list, dest){
    //Først søger vi for at der er tomt i containeren
    dest.html('')
        list.map( e =>{
            var div = createDiv(e)
            div.addClass('elev')
            dest.child(div)
    })
}

