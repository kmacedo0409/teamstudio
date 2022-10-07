let list=document.querySelectorAll('.list');
let itemFotos=document.querySelectorAll('.itemFotos');

for(let i =0; i<list.length; i++){
    list[i].addEventListener('click',function(){
        for(let j = 0; j<list.length; j++){
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');
        for(let k = 0; k<itemFotos.length; k++){
            itemFotos[k].classList.remove('active');
            itemFotos[k].classList.add('hide');


            if(itemFotos[k].getAttribute('data-item')==dataFilter || dataFilter == "todos"){
                itemFotos[k].classList.remove('hide');
                itemFotos[k].classList.add('active');
            }

        }

    })
}