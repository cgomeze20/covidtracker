
    let dropdown = document.getElementById('locality-dropdown');
    dropdown.length = 0;

    let defaultOption = document.createElement('option');
    defaultOption.text = 'Choose State/Province';

    dropdown.add(defaultOption);
    dropdown.selectedIndex = 0;

//Cuando cargue todo el documento

document.addEventListener('DOMContentLoaded',()=>{

numeroConComas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")
}

// const search = document.getElementById('search');
dropdown.addEventListener('change',()=>{
    console.log(dropdown.value);
    let pais = dropdown.value;
    fetch(`https://corona.lmao.ninja/v2/countries/${pais}`)
    .then(response =>{
        return response.json();
    }).then(data=>{
        console.log(data);
        document.getElementById('country').innerHTML = (data.country);
        document.getElementById('active').innerHTML = numeroConComas(data.active);
        document.getElementById('cases').innerHTML = numeroConComas(data.cases);
        document.getElementById('deaths').innerHTML = numeroConComas(data.deaths);
        document.getElementById('tests').innerHTML = numeroConComas(data.tests);
        document.getElementById('recovered').innerHTML = numeroConComas(data.recovered);
        document.getElementById('critical').innerHTML = numeroConComas(data.critical);
    })

})

    fetchData()

})


    const fetchData = async ()=>{
        try {
            
            const res = await fetch('api.json')
            const data = await res.json()
    
    // SI QUIERES HACER LO MISMO CON FOREACH SOLO CAMBIA MAP POR FOREACH Y LISTO
        var datos = data.map(pais=>{
        console.log(pais.country);
            let optn = pais.country;
           let option = document.createElement('option');
           option.textContent = optn;
           option.value = optn;
           dropdown.appendChild(option)
        
        })
    
        } catch (error) {
            console.log(error);
        }
    }
