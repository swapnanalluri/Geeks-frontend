export class Banker {
    constructor(private _username:string, private _password:string){}

   
    get username():string{
        return this._username;
    }
    get password():string{
        return this._password;
    }
}