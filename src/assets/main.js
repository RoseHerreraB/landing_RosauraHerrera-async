const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCyNugzr3N16b6RqRvXB-YPw&part=snippet%2Cid&order=date&maxResults=9'

const content = null || document.getElementById ('content'); // traer el elemento id content del html

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '373b5edccfmshf5c56c2caa1ab39p1bdcd2jsnd02977a9b20d',   //la key no se debe compartir con nadie
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};
 
async function fechData (urlApi){
    const response = await fetch(urlApi, options); 
    const data = await response.json();
    return data;
}


(async () => { 
    try{
        const videos = await fechData(API);   
        let view = `
        ${videos.items.map(video =>`
        <div class="group relative">
      <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>
        
        `).slice(0,4).join('')}   
              `;
              //.SLice para mencionar desde y hasta donde se muestra el array (videos)  .join para  iterar un irlos 

      content.innerHTML = view;
      


    } catch (error){
      console.log(error);
        

    }

})();