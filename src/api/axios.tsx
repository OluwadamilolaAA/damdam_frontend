import axios, { type AxiosResponse, type InternalAxiosRequestConfig } from "axios";
import type {
  RegisterResponse,
  GetCurrentUserResponse,
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  ForgotPasswordResponse,
  ForgotPasswordRequest,
  ResetPasswordRequest,
  ResetPasswordResponse,
} from "./types";
import { useUserStore } from "@/store/userStore";

const authApi = axios.create({
  baseURL: import.meta.env.VITE_AUTH_API_URL || "http://localhost:4000/api/auth",
  withCredentials: true,
});

const userApi = axios.create({
  baseURL: import.meta.env.VITE_USER_API_URL || "http://localhost:4000/api/users",
  withCredentials: true,
});

const withAuthHeader = (config: InternalAxiosRequestConfig) => {
  const accessToken = useUserStore.getState().accessToken;
  if (accessToken) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
};

authApi.interceptors.request.use(withAuthHeader);
userApi.interceptors.request.use(withAuthHeader);

export const register = (payload: RegisterRequest) => 
    authApi.post<RegisterResponse, AxiosResponse<RegisterResponse>, RegisterRequest>("/register", payload);

export const login = (payload: LoginRequest) => 
    authApi.post<LoginResponse, AxiosResponse<LoginResponse>, LoginRequest>("/login", payload);

export const getCurrentUser = () =>
    userApi.get<GetCurrentUserResponse, AxiosResponse<GetCurrentUserResponse>>("/me");

export const forgotPassword = (payload: ForgotPasswordRequest) =>
  authApi.post<ForgotPasswordResponse, AxiosResponse<ForgotPasswordResponse>, ForgotPasswordRequest>(
    "/forgot-password",
    payload
  );

export const resetPassword = (payload: ResetPasswordRequest) =>
  authApi.post<ResetPasswordResponse, AxiosResponse<ResetPasswordResponse>, ResetPasswordRequest>(
    "/reset-password",
    payload
  );

export const refresh = () =>
  authApi.post<LoginResponse, AxiosResponse<LoginResponse>>("/refresh");
