export interface CheckTokenResponse {
    message:  string;
    response: TokenResponse;
}

export interface TokenResponse {
    id:          string;
    firstName:   string;
    lastName:    string;
    pathPhoto:   null;
    subsidiary:  TokenRol;
    rol:         TokenRol;
    permissions: string[];
    token:       string;
    iat:         number;
    exp:         number;
}

export interface TokenRol {
    id:   string;
    name: string;
}
