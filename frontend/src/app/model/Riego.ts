export class Riego {
    private _logRiegoId: number;
    private _fecha: string;
    private _apertura: boolean;
    private _electrovalvulaId: number;

    constructor(electrovalvulaId, fecha, apertura, logRiegoId) {
        this._logRiegoId=logRiegoId;
        this._fecha=fecha;
        this._apertura=apertura;
        this._electrovalvulaId=electrovalvulaId;
    }

    public get electrovalvulaId_1(): number {
        return this._electrovalvulaId;
    }
    public set electrovalvulaId_1(value: number) {
        this._electrovalvulaId = value;
    }

    public get fecha(): string {
        return this._fecha;
    }
    public set fecha(value: string) {
        this._fecha = value;
    }

    public get apertura(): boolean {
        return this._apertura;
    }
    public set apertura(value: boolean) {
        this._apertura = value;
    }

    public get logRiegoId(): number {
        return this._logRiegoId;
    }
    public set logRiegoId(value: number) {
        this._logRiegoId = value;
    }

}