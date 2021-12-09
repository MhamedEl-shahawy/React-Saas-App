import { useState, useEffect } from 'react';
const useMusicFetch = (url) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://api.spotify.com/v1/users/31nxsoupil7czd3ctdiqenqg44zm/playlists/1iUx0jzuOZElf4HrXs21vk/tracks", {
  "method": "GET",
  "headers": {
            'Authorization': 'Bearer ' + "BQCBfab43EYiOvK3aLXY5_E78aRrzEp2an9RRmgLY2nR0PN2QNDqRWatQD1T8BXqJBpm5jlIXCzZDQ61FRzBNrAdMJ7lzyUhBTvShHtk8l1NlQrx5ssUTwC1NuFAZLALHYPJb69RNn2YDFj-WRZPoykLU2_TkObCRWBt9kW-FCITDh64j8ypV-k"
  }
})
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setData(data.items);;
        setError(null);
      })
      .catch(err => {
        // auto catches network / connection error
        setIsPending(false);
        setError(err.message);
      })
    }, 1000);
  }, [url])
  return { data,isPending, error };
}
 
export default useMusicFetch;