var songs = [
  {
    id: 1,
    type: "Chill",
    artist: "Rebelution",
    title: "Feeling Alright",
    album: "Courage to Grow",
    length: "4:24",
    artwork: "https://i.ytimg.com/vi/qVOvZDgrWGo/hqdefault.jpg",
    heard: false
  },
  {
    id: 2,
    type: "Chill",
    artist: "Jack Johnson",
    title: "Inaudible Melodies",
    album: "Brushfire Fairytales",
    length: "3:28",
    artwork:
      "https://jackjohnsonmusic.com/images/ugc/uploads/albumArt/album_bfft.jpg",
    heard: false
  },
  {
    id: 3,
    type: "Chill",
    artist: "Incubus",
    title: "Acqueous Transmission",
    album: "Morning View",
    length: "7:46",
    artwork:
      "https://upload.wikimedia.org/wikipedia/en/6/68/Incubus_-_Morning_View.jpg",
    heard: false
  },
  {
    id: 4,
    type: "Motivation",
    artist: "Nico & Vinz",
    title: "Am I Wrong",
    album: "Am I Wrong - Single",
    length: "4:08",
    artwork: "https://i1.sndcdn.com/artworks-000069408177-ffyj6h-crop.jpg",
    heard: false
  },
  {
    id: 5,
    type: "Motivation",
    artist: "2Pac",
    title: "Ambitionz Az A Ridah",
    album: "All Eyez On Me (Book One)",
    length: "4:39",
    artwork:
      "https://img.discogs.com/nf81GKPlbqjW5U5tD_Bod87i0F8=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-238369-1490362449-5582.jpeg.jpg",
    heard: false
  },
  {
    id: 6,
    type: "Motivation",
    artist: "Alicia Keys",
    title: "Fallin'",
    album: "Songs In A Minor",
    length: "3:30",
    artwork:
      "https://i.pinimg.com/736x/9a/30/f5/9a30f5f78b9ffa39434838244c5ca92d--alicia-keys-albums-alicia-keys-songs.jpg",
    heard: false
  },
  {
    id: 7,
    type: "Dance",
    artist: "Cut Copy",
    title: "Take Me Over",
    album: "Zonoscope",
    length: "5:50",
    artwork:
      "https://upload.wikimedia.org/wikipedia/en/1/1c/Cut_Copy_-_Zonoscope.png",
    heard: false
  },
  {
    id: 8,
    type: "Dance",
    artist: "Benny Benassi & The Biz",
    title: "Satisfaction (RL Grime Remix)",
    album: "Ultra Dance 14",
    length: "3:45",
    artwork:
      "https://img.discogs.com/GPtROVlZDuH-Xoe2WEMIGmJL8_E=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-5016301-1382210473-1916.jpeg.jpg",
    heard: false
  },
  {
    id: 9,
    type: "Dance",
    artist: "The Chainsmokers",
    title: "Closer (feat. Halsey) [R3hab Remix]",
    album: "Closer (feat. Halsey)[Remixes] - EP",
    length: "2:41",
    artwork:
      "https://upload.wikimedia.org/wikipedia/en/a/a5/Closer_%28featuring_Halsey%29_%28Official_Single_Cover%29_by_The_Chainsmokers.png",
    heard: false
  },
  {
    id: 10,
    type: "Up",
    artist: "Backstreet Boys",
    title: "Larger Than Life",
    album: "Millenium",
    length: "3:53",
    artwork:
      "https://upload.wikimedia.org/wikipedia/en/f/f5/Millennium_cover.jpg",
    heard: false
  },
  {
    id: 11,
    type: "Up",
    artist: "Capital Cities",
    title: "I Sold My Bed, But Not My Stereo",
    album: "In a Tidal Wave of Mystery",
    length: "3:55",
    artwork:
      "https://upload.wikimedia.org/wikipedia/en/f/f5/In_a_Tidal_Wave_of_Mystery_by_Capital_Cities_artwork.jpg",
    heard: false
  },
  {
    id: 12,
    type: "Up",
    artist: "Daft Punk",
    title: "Get Lucky",
    album: "Random Access Memories",
    length: "6:09",
    artwork: "http://cdn.pitchfork.com/albums/2120/homepage_large.524ba9cb.jpg",
    heard: false
  },
  {
    id: 13,
    type: "Down",
    artist: "Florence + the Machine",
    title: "Shake It Out",
    album: "Ceremonials",
    length: "5:01",
    artwork: "https://upload.wikimedia.org/wikipedia/en/e/eb/Shake_it_Out.png",
    heard: false
  },
  {
    id: 14,
    type: "Down",
    artist: "John Legend",
    title: "All of Me",
    album: "Love in the Future",
    length: "5:07",
    artwork:
      "https://shortcut-test2.s3.amazonaws.com/uploads/project/attachment/4904/default_John-Legend-All-Of-Me2.jpg",
    heard: false
  },
  {
    id: 15,
    type: "Down",
    artist: "The Killers",
    title: "Mr. Brightside",
    album: "Hot Fuss",
    length: "3:43",
    artwork:
      "https://img.discogs.com/rgSk7NhIqyoy1doXx0w7WflltOc=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1311284-1208650443.jpeg.jpg",
    heard: false
  },
  {
    id: 16,
    type: "In-Between",
    artist: "Ghostland Observatory",
    title: "Give Me The Beat",
    album: "Codename: Rondo",
    length: "3:30",
    artwork:
      "https://img.discogs.com/tQsZjIu5kxMCgwyBNlFy3gsACWM=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-4071887-1457214930-7037.jpeg.jpg",
    heard: false
  },
  {
    id: 17,
    type: "In-Between",
    artist: "Minus The Bear",
    title: "Pachuca Sunrise",
    album: "Menos El Osa",
    length: "3:35",
    artwork:
      "https://media.pitchfork.com/photos/5929c559eb335119a49ed9b2/1:1/w_320/bff01869.jpg",
    heard: false
  },
  {
    id: 18,
    type: "In-Between",
    artist: "Hanson",
    title: "MMMBop",
    album: "MMMBop",
    length: "3:53",
    artwork:
      "http://images.genius.com/94b23992ddbd564608e6a87fe01b7f38.300x300x1.jpg",
    heard: false
  }
];

module.exports = {
  addSong(req, res) {
    const { type, artist, title, album, length, artwork } = req.body;
    songs.push({
      id: songs.length + 1,
      type: type,
      artist: artist,
      title: title,
      album: album,
      length: length,
      artwork: artwork,
      heard: false
    });
    res
      .status(200)
      .json(songs)
  },
  read(req, res) {
    res.status(200).json(songs);
  },
  bringBeats(req, res) {
    const { type } = req.params;
    let list = songs.filter(element => {
          {type}
      if (element.type === type) {
        return element;
      }
    });
    res.status(200).json(list);
  },
  deleteBeat(req, res) {
    const deleteId = req.params.id;
    const deleteIndex = songs.forEach((element, i, arr) => {
      if (element.id == deleteId) {
        songs.splice(i, 1);
      }
    });
    res.status(200).json(songs);
  },
  editBeat(req, res) {
    const editId = req.params.id;
    const editIndex = songs.forEach((element, i, arr) => {
      if (element.id == editId) {
        return (songs[i].heard = true);
      }
    });
    res.status(200).json(songs);
  }
};
