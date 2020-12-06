export class Electrovalvula {
    private _dispositivoId: number;

    private _electrovalvulaId: number;

    private _electrovalvulaNombre: string;

    private _apertura: boolean;


  constructor(dispositivoId, electrovalvulaId,  electrovalvulaNombre, apertura) {
    this._dispositivoId = dispositivoId;
    this._electrovalvulaId = electrovalvulaId;
    this._electrovalvulaNombre = electrovalvulaNombre;
    this._apertura = apertura;
  }

  public get dispositivoId(): number {
    return this._dispositivoId;
  }
  public set dispositivoId(value: number) {
    this._dispositivoId = value;
  }
  public get electrovalvulaId(): number {
    return this._electrovalvulaId;
  }
  public set electrovalvulaId(value: number) {
    this._electrovalvulaId = value;
  }
  public get electrovalvulaNombre(): string {
    return this._electrovalvulaNombre;
  }
  public set electrovalvulaNombre(value: string) {
    this._electrovalvulaNombre = value;
  }
  public get apertura(): boolean {
    return this._apertura;
  }
  public set apertura(value: boolean) {
    this._apertura = value;
  }
}