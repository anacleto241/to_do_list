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

    removeFist(){
        // salvar dado a ser removido para retornar
        // head = head.prox
        // se for o ultimo elemento, fazer tail = null
        // senao head.ant = null
        // decrementar length
        // retornar elemento
    }

}