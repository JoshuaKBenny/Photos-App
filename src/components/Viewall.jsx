import React, { useState } from 'react';
import Navbar from './Navbar';
const Viewall = () => {
  const [data, changeData] = useState(
    [
        {
          "albumId": 1,
          "id": 1,
          "title": "accusamus beatae ad facilis cum similique qui sunt",
          "url": "https://via.placeholder.com/600/92c952",
          "thumbnailUrl": "https://via.placeholder.com/150/92c952"
        },
        {
          "albumId": 1,
          "id": 2,
          "title": "reprehenderit est deserunt velit ipsam",
          "url": "https://via.placeholder.com/600/771796",
          "thumbnailUrl": "https://via.placeholder.com/150/771796"
        },
        
        {
          "albumId": 15,
          "id": 724,
          "title": "facere qui natus qui ipsam",
          "url": "https://via.placeholder.com/600/253e88",
          "thumbnailUrl": "https://via.placeholder.com/150/253e88"
        },
        {
          "albumId": 15,
          "id": 725,
          "title": "in sed voluptatem rem eum consectetur tenetur",
          "url": "https://via.placeholder.com/600/9ba70d",
          "thumbnailUrl": "https://via.placeholder.com/150/9ba70d"
        },
       
       
      
        {
          "albumId": 100,
          "id": 4997,
          "title": "sunt amet autem exercitationem fuga consequatur",
          "url": "https://via.placeholder.com/600/13454b",
          "thumbnailUrl": "https://via.placeholder.com/150/13454b"
        },
        {
          "albumId": 100,
          "id": 4998,
          "title": "qui quo cumque distinctio aut voluptas",
          "url": "https://via.placeholder.com/600/315aa6",
          "thumbnailUrl": "https://via.placeholder.com/150/315aa6"
        },
        {
          "albumId": 100,
          "id": 4999,
          "title": "in voluptate sit officia non nesciunt quis",
          "url": "https://via.placeholder.com/600/1b9d08",
          "thumbnailUrl": "https://via.placeholder.com/150/1b9d08"
        },
        {
          "albumId": 100,
          "id": 5000,
          "title": "error quasi sunt cupiditate voluptate ea odit beatae",
          "url": "https://via.placeholder.com/600/6dd9cb",
          "thumbnailUrl": "https://via.placeholder.com/150/6dd9cb"
        }
      ]
  );

  return (
    <div>
      <div className="container">
        <div className="row">
          {
            data.map((value, index) => {
              return  <div className="container">
              <div className="row">
                {data.map((value, index) => (
                  <div key={index} className="col-12 mb-3">
                    <h5>Album ID: {value.albumId}</h5>
                    <p>ID: {value.id}</p>
                    <p>Title: {value.title}</p>
                    <img src={value.thumbnailUrl} alt={value.title} />
                  </div>
                ))}
              </div>
            </div>
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Viewall;