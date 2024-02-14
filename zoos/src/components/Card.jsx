import  { useState, useEffect } from 'react';

function ImageWithLikes() {
  const [name, setName] = useState('nature');
  const [imageUrl, setImageUrl] = useState('');
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    fetch(`https://source.unsplash.com/400x400/?${name}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch image');
        }
        return response.url;
      })
      .then(url => {
        setImageUrl(url);
      })
      .catch(error => {
        console.error('Error fetching image:', error);
      });
  }, [name]);

  const increaseLike = () => {
    setLikeCount(prevCount => prevCount + 1);
  };

  const decreaseLike = () => {
    setLikeCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <button onClick={increaseLike}>Increase Like</button>
      <button onClick={decreaseLike}>Decrease Like</button>
      <p>Likes: {likeCount}</p>
      <img src={imageUrl} alt={name} />
    </div>
  );
}

export default ImageWithLikes;
