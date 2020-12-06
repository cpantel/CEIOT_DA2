export class Medicion {
    private _dispositivoId: number;
    private _electrovalvulaId: number;

    private _fecha: string;
    private _medicionId: number;
    private _nombre: string;

    ​​private _ubicacion: string;

    private _valor: string;    ​​

    constructor(dispositivoId, electrovalvulaId, fecha, medicionId,nombre , ubicacion, valor ) {
        this._dispositivoId=dispositivoId;
        this._electrovalvulaId = electrovalvulaId;
        this._fecha=fecha;
        this._medicionId=medicionId;
        this._nombre= nombre;
        this._ubicacion = ubicacion;
        this._valor=valor;

    }

    public get ubicacion(): string {
        return this._ubicacion;
    }
    public set ubicacion(value: string) {
        this._ubicacion = value;
    }
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    public get electrovalvulaId(): number {
        return this._electrovalvulaId;
    }
    public set electrovalvulaId(value: number) {
        this._electrovalvulaId = value;
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