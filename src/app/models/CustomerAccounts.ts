export class Accounts{
    constructor(private _aid:number, private _acnumber:number, private _balance:number,private _branch:string,private _ifsc:string){

    }

    get aid():number{
        return this._aid;
    }
    get acnumber():number{
        return this._acnumber;
    }
    get balance():number{
        return this._balance;
    }

    get branch():string{
        return this._branch;
    }

    get ifsc():string{
        return this._ifsc;
    }
}