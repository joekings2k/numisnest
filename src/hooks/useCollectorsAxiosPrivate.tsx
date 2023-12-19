import React, { useEffect } from 'react'
import useAppContext from './useAppContext';
import { axiosPublic } from 'src/axios/axios';

const useCollectorsAxiosPrivate = () => {
  const { state } = useAppContext();
  const { token } = state;
  // console.log(token)
  useEffect(() => {
    const requestIntercept = axiosPublic.interceptors.request.use(
      (config) => {
        if (!config.headers["collector-auth"]) {
          config.headers["collector-auth"] = `${token}`;
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
}

export default useCollectorsAxiosPrivate