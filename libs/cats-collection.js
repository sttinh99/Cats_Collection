import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
});

const getListCatPhotos = async () => {
  const data = await unsplash.search.getPhotos({
    query: "cat",
    page: 1,
    perPage: 10,
  });
  const listPhotos = data.response.results.map((item) => item.urls.small);
  return listPhotos;
};

const urlFetch = (name, latLong, limit) => {
  return `https://api.foursquare.com/v3/places/search?query=${name}&${latLong}&limit=${limit}`;
};

export const fetchCatsCollection = async () => {
  const listCatPhotos = await getListCatPhotos();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.FOURSQUARE_API_KEY,
    },
  };

  const response = await fetch(
    urlFetch(
      "cats collection",
      "ll=51.56524879751176%2C-0.09474406102619118",
      6
    ),
    options
  );
  const dataJSON = await response.json();
  return dataJSON.results.map((item, index) => ({
    id: item.fsq_id,
    name: item.name,
    address: item.location.address,
    timezone: item.timezone,
    imgUrl: listCatPhotos[index],
  }));
};
