
import { Injectable } from '@angular/core';
import { Pedido } from '../model/pedido';
import { Suplemento } from '../model/suplementos';


@Injectable()
export class StorageService{



    setCart(obj : Pedido){
        localStorage.setItem('carrinho', JSON.stringify(obj));
    }

    getCart() : Pedido{
        
        let str = localStorage.getItem("carrinho");


        if(str==null || str==""){
            
            let pedido : Pedido = {itens : []};
            localStorage.setItem("carrinho",JSON.stringify(pedido));
            return pedido;           
            
            
        }else{
            console.log("ok 2");
            return JSON.parse(str);
            
        }
        //return null;
        
    }


    setRemoveCart(produto : Suplemento){
        let lista : Pedido = this.getCart();
        
       let pos = lista.itens.findIndex(
           x=>x.produto.id == produto.id);

       if(pos!= -1){ // -1 -> Não existe
            lista.itens.splice(pos,1);
        }
        
        localStorage.setItem('carrinho', JSON.stringify(lista));
    }


}
