let $=document;

let autoCompleteWrapper=$.querySelector('.search-input')
let searchInputElem=$.querySelector('input')
let autoCompleteBox=$.querySelector('.autocom-box')

searchInputElem.addEventListener('keyup',function(){
    let searchValue=searchInputElem.value

    if(searchValue){
        autoCompleteWrapper.classList.add('active')
        let filteredWords=suggestions.filter(function(word){
            return word.toLowerCase().includes(searchValue.toLowerCase())
        })
        suggestionsListGenerator(filteredWords)

    }else{
        autoCompleteWrapper.classList.remove('active')

    }
})

function suggestionsListGenerator(filteredArray){
    let listItemArray=filteredArray.map(function(word){
        return `<li>${word}</li>`
    })
    let customListItem
    if(!listItemArray.length){
        customListItem=`<li>${searchInputElem.value}</li>`
    }else{
        customListItem=listItemArray.join('')
    }
    autoCompleteBox.innerHTML=customListItem
    select()
}

function select(){
    let allListItems=autoCompleteBox.querySelectorAll('li')
    allListItems.forEach(function(Item){
        Item.addEventListener('click',function(event){
            searchInputElem.value=event.target.textContent
            autoCompleteWrapper.classList.remove('active')
        })
    })
}
