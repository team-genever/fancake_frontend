import axios from "axios";

const getAdress = (getOriginal) => {
  const location = window.location.hostname;
  if (location.includes("localhost") || location.includes("fancake")) {
    return getOriginal ? "https://psj2867.com/" : "https://psj2867.com/api/";
  } else {
    return getOriginal ? "/" : "/api/";
  }
};

//let backend_ip_address = "http://localhost:80/api/";
let backend_ip_address = getAdress();

export const GetBackendIP = (getOriginal) => {
  try {
    return getAdress(getOriginal);
  } catch (error) {
    console.error(error);
  }
};

export const api = axios.create({ baseURL: backend_ip_address }); // axios 인스턴스 생성

// api.get("user", {}); 이렇게 상대경로로 사용하면 될 거 같아요!
