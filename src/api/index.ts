// src/api/apiClient.ts
import axios, { AxiosInstance } from "axios";
import { useAuthStore } from "@/store/authStore";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

if (!BASE_URL) {
  throw new Error("환경 변수 에러.");
}

class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: BASE_URL,
      headers: { "Content-Type": "application/json" },
    });

    // 요청 인터셉터 설정 (토큰 적용)
    this.client.interceptors.request.use(
      (config) => {
        const { token } = useAuthStore.getState();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // 응답 인터셉터 설정
    this.client.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error("API 오류:", error);
        return Promise.reject(error);
      }
    );
  }

  public async get<T>(
    url: string,
    params?: Record<string, unknown>
  ): Promise<T> {
    const response = await this.client.get<T>(url, { params });
    return response.data;
  }

  public async post<T, D = unknown>(url: string, data?: D): Promise<T> {
    const response = await this.client.post<T>(url, data);
    return response.data;
  }

  public async put<T, D = unknown>(url: string, data?: D): Promise<T> {
    const response = await this.client.put<T>(url, data);
    return response.data;
  }

  public async patch<T, D = unknown>(url: string, data?: D): Promise<T> {
    const response = await this.client.patch<T>(url, data);
    return response.data;
  }

  public async delete<T>(
    url: string,
    params?: Record<string, unknown>
  ): Promise<T> {
    const response = await this.client.delete<T>(url, { params });
    return response.data;
  }
}

export const apiClient = new ApiClient();
