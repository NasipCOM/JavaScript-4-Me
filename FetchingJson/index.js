const fetching  = (handler) => {
    fetch('http://www.stat.kg/ru/opendata/category/30/json')
    .then(response => response.json())
    .then(handler);
}


const renderCard = items =>{

    items.forEach( item = () =>{
        console.log(item.title_ru)
    })

}
    
fetching(renderCard);