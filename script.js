const albums = [
    { month: 'January', image: 'path/to/image1.jpg', song: 'path/to/song1.mp3' },
    { month: 'February', image: 'path/to/image2.jpg', song: 'path/to/song2.mp3' },
    { month: 'March', image: 'path/to/image3.jpg', song: 'path/to/song3.mp3' },
    { month: 'April', image: 'path/to/image4.jpg', song: 'path/to/song4.mp3' },
    { month: 'May', image: 'path/to/image5.jpg', song: 'path/to/song5.mp3' },
    { month: 'June', image: 'path/to/image6.jpg', song: 'path/to/song6.mp3' },
    { month: 'July', image: 'path/to/image7.jpg', song: 'path/to/song7.mp3' },
    { month: 'August', image: 'path/to/image8.jpg', song: 'path/to/song8.mp3' },
    { month: 'September', image: 'path/to/image9.jpg', song: 'path/to/song9.mp3' },
    { month: 'October', image: 'path/to/image10.jpg', song: 'path/to/song10.mp3' },
    { month: 'November', image: 'path/to/image11.jpg', song: 'path/to/song11.mp3' },
    { month: 'December', image: 'path/to/image12.jpg', song: 'path/to/song12.mp3' }
];

const albumContainer = document.getElementById('albums');

albums.forEach(album => {
    const albumDiv = document.createElement('div');
    albumDiv.classList.add('album');

    const img = document.createElement('img');
    img.src = album.image;
    img.alt = album.month;
    img.onclick = () => openGallery(album.image, album.month);

    const audio = document.createElement('audio');
    audio.controls = true;
    audio.src = album.song;

    const title = document.createElement('div');
    title.classList.add('album-title');
    title.textContent = album.month;

    albumDiv.appendChild(img);
    albumDiv.appendChild(audio);
    albumContainer.appendChild(title);
    albumContainer.appendChild(albumDiv);
});

function openGallery(image, month) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    modal.style.display = "block";
    modalImg.src = image;
    captionText.innerHTML = month;
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}
