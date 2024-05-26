const albums = [
    { month: 'January', image: 'memory-album/images/image1.jpg', song: 'memory-album/songs/song1.mp3' },
    { month: 'February', image: 'memory-album/images/image2.jpg', song: 'memory-album/songs/song2.mp3' },
    { month: 'March', image: 'memory-album/images/image3.jpg', song: 'memory-album/songs/song3.mp3' },
    { month: 'April', image: 'memory-album/images/image4.jpg', song: 'memory-album/songs/song4.mp3' },
    { month: 'May', image: 'memory-album/images/image5.jpg', song: 'memory-album/songs/song5.mp3' },
    { month: 'June', image: 'memory-album/images/image6.jpg', song: 'memory-album/songs/song6.mp3' },
    { month: 'July', image: 'memory-album/images/image7.jpg', song: 'memory-album/songs/song7.mp3' },
    { month: 'August', image: 'memory-album/images/image8.jpg', song: 'memory-album/songs/song8.mp3' },
    { month: 'September', image: 'memory-album/images/image9.jpg', song: 'memory-album/songs/song9.mp3' },
    { month: 'October', image: 'memory-album/images/image10.jpg', song: 'memory-album/songs/song10.mp3' },
    { month: 'November', image: 'memory-album/images/image11.jpg', song: 'memory-album/songs/song11.mp3' },
    { month: 'December', image: 'memory-album/images/image12.jpg', song: 'memory-album/songs/song12.mp3' }
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
