const getGifs = async (category) => {
  const url = `http://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(
    category
  )}&api_key=rIi9ma7bAf1k6IBrO2AyxS4UpXyAf07F`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.fixed_height_downsampled.url,
    };
  });
  return gifs;
};

export default getGifs;
