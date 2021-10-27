import axios from "axios";

const getAdress = () => {
  const location = window.location.hostname;
  if (location.includes("localhost") || location.includes("fancake")) {
    return "https://psj2867.com/api/";
  } else {
    return "/api/";
  }
};

//let backend_ip_address = "http://localhost:80/api/";
let backend_ip_address = getAdress();

export const GetBackendIP = () => {
  try {
    return backend_ip_address;
  } catch (error) {
    console.error(error);
  }
};

export const api = axios.create({ baseURL: backend_ip_address }); // axios 인스턴스 생성

// api.get("user", {}); 이렇게 상대경로로 사용하면 될 거 같아요!
