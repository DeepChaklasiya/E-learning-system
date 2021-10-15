import runtimeEnv from '@mars/heroku-js-runtime-env';
import axios from 'axios';
import React from 'react';
const env = runtimeEnv();

export default class FilesService {
  constructor() {
    this.apiHandler = axios.create({
      baseURL: `${env.REACT_APP_API_URL}/files`,
      withCredentials: true,
    });
  }

  uploadImage = (imageForm) => this.apiHandler.post('/upload', imageForm);
}
