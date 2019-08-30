export class Transactions{
    constructor(private _fromAccountNo:number,private _toAccountNo:number,private _amount:number,private _status:boolean){

    }
    get fromacc():number{
        return this._fromAccountNo;
    }
    get toacc():number{
        return this._toAccountNo;
    }
    get amount():number{
        return this._amount;
    }
    get status():boolean{
        return this._status;
    }
    
}