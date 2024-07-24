class No{
    constructor (novoDado){
        this.dado = novoDado;
        this.ant = null;
        this.prox = null;
    }
}
//-----------------------
class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addFirst(novoDado){
        const novoNo = new No(novoDado);
        if(novoNo===null)
            return false;
        if(this.head===null)// vazia
            this.tail = novoNo;
        else{
            novoNo.prox = this.head;
            this.head.ant = novoNo;
        }
        this.head = novoNo;
        this.length++;
        return true;
    }

    addLast(novoDado){
        const novoNo = new No(novoDado);
        if(novoNo===null)
            return false;

        if(this.head===null)// vazia
            this.head = novoNo;
        else{
           novoNo.ant = this.tail;
           this.tail.prox = novoNo;

        }
        this.tail = novoNo;
        this.length++;
        return true;
    }

    removeFirst(){
        const dadoRemovido = this.head.dado;
        this.head = this.head.prox;
        if(this.head!==null)
            this.head.ant = null;
        else
            this.tail = null;
        this.length--;
        return dadoRemovido;
    }

    // removeLast(){
    
    getLast(){
      return this.tail.dado;
    }
     getFirst(){
        return this.head.dado;
     }
    isEmpty(){
        //if(this.head===null)
        //    return true;
        //return false;
        return this.head === null;
    }

    //-------------------------------------
//Quando um objeto tem uma propriedade [Symbol.iterator], ele pode ser iterado com construções como [ for(const item of minhaLista)*/


[Symbol.iterator]() {         
    let currentNode = this.head;
          return {
            next: function() {
              if (currentNode!==null) {
                let value = currentNode.dado;
                currentNode = currentNode.prox;
                return { value: value, done: false };
              } else {
                return { done: true };
              }
            }
          };
        }
  //—----------------
    toString() {
          let result = "";
          let currentNode = this.head;
          while (currentNode !== null) {
              result += currentNode.dado + (currentNode.prox ? " -> " : "");
              currentNode = currentNode.prox;
          }
          return result;
      }
  

}// fim classe LinkedList