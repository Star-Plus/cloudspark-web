import type GoogleLoginRequest from "./Dtos/GoogleLoginRequest";
import type AuthLoginResponse from "./Dtos/AuthLoginResponse";
import api from "$lib/utils/api/appApi";

export default class AuthService {

    private static instance : AuthService;

    private constructor() {}

    public static getInstance() : AuthService {
        if (!AuthService.instance) {
            AuthService.instance = new AuthService();
        }

        return AuthService.instance;
    }

    async googleLogin(request: GoogleLoginRequest) : Promise<AuthLoginResponse> {
        try {
            const response = await api.post<AuthLoginResponse>("/auth/google", request);
            this.authenticateUser(response.data.token);
            return response.data;
        }
        catch (error) {
            throw error;
        }
    }

    private authenticateUser(token: string): void {
        localStorage.setItem("token", token);
    }

    private logoutUser(): void {
        localStorage.removeItem("token");
    }

    public isAuthenticated(): boolean {
        return localStorage.getItem("token") !== null;
    }

    public get token(): string | null {
        return localStorage.getItem("token");
    }

}