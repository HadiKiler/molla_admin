// import simpleRestProvider from "ra-data-simple-rest";

// export const dataProvider = simpleRestProvider(
//   import.meta.env.VITE_SIMPLE_REST_URL
// );

import { BlobOptions } from "buffer";
import simpleRestDataProvider from "ra-data-simple-rest";
import {
  CreateParams,
  UpdateParams,
  DataProvider,
  fetchUtils,
} from "react-admin";

const endpoint = "http://localhost:5000/";
const baseDataProvider = simpleRestDataProvider(endpoint);

type ProductParams = {
  id: string;
  category_id: string;
  name: string;
  description: string;
  price: string;
  image: {
    rawFile: File;
    src?: string;
    title?: string;
  };
};
type UserParams = {
  id: string;
  username: string;
  password: string;
  is_admin: string;
  email: string;
  image: {
    rawFile: File;
    src?: string;
    title?: string;
  };
};

const createProductFormData = (
  params: CreateParams<ProductParams> | UpdateParams<ProductParams>
) => {
  const formData = new FormData();
  params.data.category_id && formData.append("category_id", params.data.category_id);
  params.data.image?.rawFile && formData.append("image", params.data.image.rawFile);
  params.data.name && formData.append("name", params.data.name);
  params.data.description && formData.append("description", params.data.description);
  params.data.price && formData.append("price", params.data.price);

  return formData;
};

const createUserFormData = (
  params: CreateParams<UserParams> | UpdateParams<UserParams>
) => {
  const formData = new FormData();
  params.data.username && formData.append("username", params.data.username);
  params.data.password && formData.append("password", params.data.password);
  params.data.is_admin && formData.append("is_admin", params.data.is_admin);
  params.data.email && formData.append("email", params.data.email);
  params.data.image?.rawFile && formData.append("image", params.data.image.rawFile);

  return formData;
};



export const dataProvider: DataProvider = {
  ...baseDataProvider,
  create: (resource, params) => {
    if (resource === "product") {
      const formData = createProductFormData(params);
      return fetchUtils
        .fetchJson(`${endpoint}/${resource}`, {
          method: "POST",
          body: formData
        })
        .then(({ json }) => ({ data: json }));
    }
    else if (resource === "user") {
      const formData = createUserFormData(params);
      return fetchUtils
        .fetchJson(`${endpoint}/${resource}`, {
          method: "POST",
          body: formData
        })
        .then(({ json }) => ({ data: json }));
    }

    return baseDataProvider.create(resource, params);
  },
  update: (resource, params) => {
    if (resource === "product") {
      const formData = createProductFormData(params);
      formData.append("id", params.id);
      return fetchUtils
        .fetchJson(`${endpoint}/${resource}/${params.id}`, {
          method: "PUT",
          body: formData,
        })
        .then(({ json }) => ({ data: json }));
    }
    else if (resource === "user") {
      const formData = createUserFormData(params);
      formData.append("id", params.id);
      return fetchUtils
        .fetchJson(`${endpoint}/${resource}/${params.id}`, {
          method: "PUT",
          body: formData,
        })
        .then(({ json }) => ({ data: json }));
    }
    return baseDataProvider.update(resource, params);
  },
};