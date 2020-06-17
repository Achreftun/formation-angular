export class Personne {

    constructor(private _num?: number, private _nom?: string, private _prenom?: string) {
    }

    get num(): number {
        return this._num;
    }
    set num(num: number) {
        this._num = num;
    }
    get nom(): string {
        return this._nom;
    }
    set nom(nom: string) {
        this._nom = nom;
    }
    get prenom(): string {
        return this._prenom;
    }
    set prenom(prenom: string) {
        this._prenom = prenom;
    }
}
