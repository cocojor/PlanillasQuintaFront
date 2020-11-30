export class Token {
  stateCode: string;
  tipoToken: number;
  requestAt: string;
  expiresIn: number;
  accessToken: string;
  refreshToken: string;
}

export class PayLoadToken {
  aud: string;
  exp: number;
  iss: string;
  nbf: number;
  scopes: Scopes;
}

export class Scopes {
  DocumentoEmpresa: string;
  DocumentoInvitado: string;
  DocumentoPersona: string;
  IdEntidadEmpresa: number;
  IdEntidadPersona: number;
  IdInvitado: number;
  IdUsuario: number;
  Servicios: Array<number>;
  Sucursales: Array<number>;
  TipoToken: number;
  Usuario: string;
  RolUsuario: string;
}
