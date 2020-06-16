
//creando la clase Stack, cual usaremos para crear variables en forma de pilas
class Stack{

    constructor(){
        this.array =[];//aqui indico que todas las pilas que genere se crearan en forma de arreglo
    };

    push(element){//la funcion push recibe un parametro que se llama element el cual se insertara en la pira
        this.array.push(element);//aqui se inserta
    };

    pop(){

        return this.array.pop();//con this hago referencia a mi pila de Stack que contiene el metodo pop()
        //me regresara el ultimo elemento de mi pila y tambien lo sacara de ella

    };

    peek(){//regresa el ultimo valor de la pila sin sacarlo de esta
        return this.array[this.array.length-1];  //recordemos que dentro los corchetes va el numero de la posicion del elemento que queremos sacar
        //entonces indicamos que es nuestro array y con la propiedad lentgh sacar la cantidad de elementos que tiene
        //sin embargo le restamos 1 a esa cantidad por que recordemos que las posiciones del array van desde el 0
    };

    size(){
        return this.array.length;

    };

    print(){

        console.log(this.array);//imprime mi pila 

    };

}

var t = new Stack(); //creo una variable "t" que sera mi pila y pertenecera ami clase Stack ederando los metodos de dicha clase


//insertando elementos a mi pila con push
t.push(9);
t.push(6);
t.push(7);
t.push(2);
t.push(0);
t.push(6);
t.push(4);
t.push(1);
t.push(0);
console.log("nuestra pila inicial:")
t.print();


//variable que usare para almacenar mas adelante los valores que no sera ceros y se encuentre una posicion adelante de un valor que si sea cero
var acum=0;

//variable que uso mas adelante para almacenar el valor 0 encontrado en mi pila
var acumcero =0;

//aqui con la funcion size() me retorna o regresa la cantidad de elementos que tiene mi pila y esa cantidad de elementos se la signo a counter
var counter = t.size();

//counter me sirve para indicarle al ciclo for cuantas veces debe de etirar(repetirse)
for(var i =0; i<counter; i++){
   
   //buscaremos en cada posicion de la pila el valor "0"

    if(t.array[i]==0){//si en la posicion que vamos de la pila se encuentra un "0"

        for(var j=i+1; j<counter; j++){//entonces nos meteremos a este otro ciclo que buscara en las posiciones restantes de la pila numeros diferentes de "0"
            
              //si los encuentra intercambiara la posicion del valor diferente de 0 con el valor 0

             if(t.array[j]!=0){

                acum = t.array[j];

                acumcero= t.array[i];
    
                t.array[i] =acum;
                t.array[j] = acumcero;

            }
        }

   }


};
console.log("nuevo valor de la pila");
t.print();
console.log("ultimo valor sin sacarlo de la pila(peek):");
console.log(t.peek());

console.log("numero de elementos que tiene la pila:");
console.log(t.size());

console.log("de nuevo los valores de la pila:");
t.print();


console.log("ultimo valor de la pila y sacarlo de esta(pop):");
console.log(t.pop()); 

console.log("y la pila queda asi:");
t.print();