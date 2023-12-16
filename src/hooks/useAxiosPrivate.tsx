
import { useEffect } from "react";
import { axiosPublic } from "src/axios/axios";
import useAppContext from "./useAppContext";


const useAxiosPrivate = () => {
  const {state } =useAppContext()
  const { token } = state 
  // console.log(token)
  useEffect(() => {
    const requestIntercept = axiosPublic.interceptors.request.use(
      (config) => {
        if (!config.headers["seller-auth"]) {
          config.headers["seller-auth"] = `${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
    return () => {
      axiosPublic.interceptors.request.eject(requestIntercept);
    };
  }, []);
  return axiosPublic;
};

export default useAxiosPrivate;
