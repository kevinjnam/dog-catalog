const cache = {};

cache.breeds = {};

//check to see if breeds exist in cache
cache.checkBreeds = (req, res, next) => {
  const { selectedList } = req.body;
  let newSelectedList = [];
  let selectedImages = [];

  selectedList.forEach(breed => {
    let currentBreed = breed.toLowerCase();
    if (cache.breeds[currentBreed]) {
      if (selectedImages.length > 1) {
        selectedImages = [...cache.breeds[currentBreed], ...selectedImages];
      } else {
        selectedImages = [...cache.breeds[currentBreed]];
      }
    } else {
      newSelectedList.push(currentBreed);
    }
  });

  req.body.selectedList = newSelectedList;
  res.selectedImages = selectedImages;

  next();
};

//add new breeds to cache
cache.addBreeds = (req, res, next) => {
  const { updateCache } = res;
  for (let breed in updateCache) {
    cache.breeds[breed] = updateCache[breed];
  }
  next();
};

module.exports = cache;
