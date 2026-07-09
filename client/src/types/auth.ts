export interface LoginRequest {
    email: string;
    password: string;
}

export interface RegisterRequest {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface User {
    id: string;
    fullName: string;
    email: string;
}

export interface AuthResponse {
    user: User;
    accessToken: string;
}

export interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
}