export class Medicion {
    private _medicionId: number;
    private _fecha: string;
    private _valor: string;
    private _dispositivoId: number;

    constructor(medicionId, fecha, valor, dispositivoId) {
        this._dispositivoId=dispositivoId;
        this._fecha=fecha;
        this._valor=valor;
        this._medicionId=medicionId;
    }

    public get medicionId_1(): number {
        return this._medicionId;
    }
    public set medicionId_1(value: number) {
        this._medicionId = value;
    }

    public get fecha(): string {
        return this._fecha;
    }
    public set fecha(value: string) {
        this._fecha = value;
    }

    public get valor(): string {
        return this._valor;
    }
    public set valor(value: string) {
        this._valor = value;
    }

    public get dispositivoId(): number {
        return this._dispositivoId;
    }
    public set dispositivoId(value: number) {
        this._dispositivoId = value;
    }

}