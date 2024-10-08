async function fetchPhoto() {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random/?&client_id=HNxX9akFofdKG57ojbfjiy4usW_i_Gm-gEwRwXDNhZo`);
        const photo = await response.json();

        return photo;
    } catch (error) {
        console.log('Error', error);
        return [];
    }
}

async function showData() {
    const photo = await fetchPhoto();
    if (photo != null) {
        const photoEL = document.createElement('div');
        photoEL.classList.add('photo');
        const img = document.createElement('img');
        img.src = photo.urls.small;
        img.alt = photo.alt_description;
        photoEL.append(img);
        photoContainer.append(photoEL);
        photoContainer.insertAdjacentHTML("beforeend", `
        <p>Author: ${photo.user.username}</p>
        <hr>
        <p>Author bio: ${photo.user.bio != null ? photo.user.bio : "no bio"}</p>
         <hr>
    <p id="LikeCount"style="display:flex; gap:200px;">Likes: ${photo.likes} <button id="LikeBtn">Лайк</button></p>
        
 `)

        document.querySelector("#LikeBtn").addEventListener("click", function (e) {
            document.querySelector("#LikeCount").textContent = `Likes: ${photo.likes + 1}`;
        });
    }
}

showData();