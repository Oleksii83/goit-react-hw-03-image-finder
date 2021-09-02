const getPhoto = (nextName, page) => {
  return fetch(
    `https://pixabay.com/api/?q=${nextName}&page=${page}&key=22354412-39f12e0c13d349d19862b3301&image_type=photo&orientation=horizontal&per_page=12
`,
    // `https://pixabay.com/api/?key=22354412-39f12e0c13d349d19862b3301&q=${nextName}&image_type=photo&per_page=12&page=1`,
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Нет такого имени ${nextName}`));
  });
};

export default { getPhoto };
