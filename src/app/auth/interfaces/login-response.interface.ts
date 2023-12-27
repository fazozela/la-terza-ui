export interface LoginResponse {
    message:  string;
    response: Response;
}

export interface Response {
    id:          string;
    firstName:   string;
    lastName:    string;
    pathPhoto:   null;
    subsidiary:  Rol;
    rol:         Rol;
    permissions: string[];
    token:       string;
    iat:         number;
    exp:         number;
}

export interface Rol {
    id:   string;
    name: string;
}
