export class Order
{
    
    public product? : string;
    public name? : string;
    public count? : number;
    public size? : string;
    public price? : number;
   
  
    constructor(product:string,name:string,count:number,size:string,price:number)
    {

        this.product = product;
        this.name = name;
        this.count = count;
        this.size = size;
        this.price = price;
      
       

    }
   
}