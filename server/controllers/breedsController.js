const fetch = require('node-fetch');

const breedsController = {};

breedsController.get = async (req, res, next) => {
  try {
    const rawData = await fetch('https://dog.ceo/api/breeds/list/all');
    const data = await rawData.json();
    const breedsList = [];
    for (let breed in data.message) {
      const updatedBreed = breed[0].toUpperCase() + breed.slice(1);
      breedsList.push(updatedBreed);
    }

    res.breeds = { breedsList };
    next();
  } catch (err) {
    console.error(err);
  }
};

breedsController.addSelected = async (req, res, next) => {
  try {
    const newCache = {};
    const breedsList = req.body.selectedList;
    const UrlMaker = breed =>
      `https://dog.ceo/api/breed/${breed.toLowerCase()}/images`;
    const breedsListUrls = breedsList.map(breed => UrlMaker(breed));
    const imagesList = await Promise.all(
      breedsListUrls.map(async url => {
        const breedName = await getBreedName(url);
        const rawData = await fetch(url);
        const imageList = await rawData.json();
        newCache[breedName] = imageList.message;
        return imageList.message;
      })
    );

    let images = flatten(imagesList);
    if (res.selectedImages.length > 0) {
      images = [...images, ...res.selectedImages];
    }

    res.updateCache = newCache;
    res.selectedImages = { images };
    next();
  } catch (err) {
    res.error = err;
    next();
  }
};

//utility functions
function flatten(array) {
  let flattened = [];

  for (let i = 0; i < array.length; i++) {
    const currentElement = array[i];

    if (Array.isArray(currentElement)) {
      flattened = flatten(currentElement).concat(flattened);
    } else {
      flattened.push(currentElement);
    }
  }

  return flattened;
}

function getBreedName(url) {
  const start = 26;
  let end = start;
  while (url[end] !== '/') {
    end += 1;
  }

  return url.slice(start, end);
}

module.exports = breedsController;
