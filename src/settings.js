import axios from "axios";

let backend_ip_address = "http://localhost:80/";
//let backend_ip_address = "http://psj2867.com";

export const GetBackendIP = () => {
  try {
    return backend_ip_address;
  } catch (error) {
    console.error(error);
  }
};

export const api = axios.create({ baseURL: backend_ip_address }); // axios 인스턴스 생성

// api.get("api/user/", {}); 이렇게 상대경로로 사용하면 될 거 같아요!
