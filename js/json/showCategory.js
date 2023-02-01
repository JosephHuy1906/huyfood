var url = "http://localhost:3000/categoies";
fetch(url).then( data => data.json()).then(categorys =>{
    cat_arr = categorys.forEach(cat => {
       
        document.querySelector("#category_menu").innerHTML+= `<li><a href="#">${cat.name}</a></li>`;
    })
 
      console.log(cat_arr);
})
