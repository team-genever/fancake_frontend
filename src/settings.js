let backend_ip_address = "http://localhost:80"
//let backend_ip_address = "http://psj2867.com";

export const GetBackendIP = () => {
  try {
    return backend_ip_address;
  } catch (error) {
    console.error(error);
  }
};
