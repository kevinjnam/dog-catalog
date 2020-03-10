const fetch = require('node-fetch');

const breedsController = {};

breedsController.get = async (req, res, next) => {
  console.log('breedsController.get');
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
  console.log('breedsController.selected');
  try {
    const breedsList = req.body.selectedList;
    const UrlMaker = breed =>
      `https://dog.ceo/api/breed/${breed.toLowerCase()}/images`;
    const breedsListUrls = breedsList.map(breed => UrlMaker(breed));
    const imagesList = await Promise.all(
      breedsListUrls.map(async url => {
        const rawData = await fetch(url);
        const imageList = await rawData.json();
        return imageList.message;
      })
    );

    const images = flatten(imagesList);
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

module.exports = breedsController;
