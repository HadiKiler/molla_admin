import simpleRestDataProvider from "ra-data-simple-rest";
import {
  CreateParams,
  UpdateParams,
  DataProvider,
  fetchUtils,
} from "react-admin";


// export const dataProvider = simpleRestProvider(
//   import.meta.env.VITE_SIMPLE_REST_URL, httpClient
// );


const httpClient = (url: string, options: fetchUtils.Options = {}) => {
  const customHeaders = (options.headers ||
      new Headers({
          Accept: 'application/json',
      })) as Headers;    
  // add your own headers here    
  let user_id = null
  try{
    user_id = JSON.parse(localStorage.getItem('auth')).id
  }catch{
    user_id=null
  }
  customHeaders.set('user', user_id);
  options.headers = customHeaders;
  return fetchUtils.fetchJson(url, options);
}  



const endpoint = import.meta.env.VITE_SIMPLE_REST_URL
const baseDataProvider = simpleRestDataProvider(endpoint, httpClient);

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

type CategoryParams = {
  id: string;
  name: string;
  description: string;
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

const createCategoryFormData = (
  params: CreateParams<CategoryParams> | UpdateParams<CategoryParams>
) => {
  const formData = new FormData();
  params.data.name && formData.append("name", params.data.name);
  params.data.description && formData.append("description", params.data.description);
  params.data.image?.rawFile && formData.append("image", params.data.image.rawFile);

  return formData;
};

let user = null
try{
  user = JSON.parse(localStorage.getItem('auth')).id
}catch{
  user = null
}
const user_id = new Headers({"user":user})

export const dataProvider: DataProvider = {
  ...baseDataProvider,
  create: (resource, params) => {
    if (resource === "product") {
      const formData = createProductFormData(params);
      return fetchUtils
        .fetchJson(`${endpoint}/${resource}`, {
          method: "POST",
          body: formData,
          headers: user_id
        })
        .then(({ json }) => ({ data: json }));
    }
    else if (resource === "user") {
      const formData = createUserFormData(params);
      return fetchUtils
        .fetchJson(`${endpoint}/${resource}`, {
          method: "POST",
          body: formData,
          headers: user_id
        })
        .then(({ json }) => ({ data: json }));
    }
    else if (resource === "category") {
      const formData = createCategoryFormData(params);
      return fetchUtils
        .fetchJson(`${endpoint}/${resource}`, {
          method: "POST",
          body: formData,
          headers: user_id
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
          headers: user_id
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
          headers: user_id
        })
        .then(({ json }) => ({ data: json }));
    }
    else if (resource === "category") {
      const formData = createCategoryFormData(params);
      formData.append("id", params.id);
      return fetchUtils
        .fetchJson(`${endpoint}/${resource}/${params.id}`, {
          method: "PUT",
          body: formData,
          headers: user_id
        })
        .then(({ json }) => ({ data: json }));
    }
    return baseDataProvider.update(resource, params);
  },
};

