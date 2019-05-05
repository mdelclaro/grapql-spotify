# Spotify GraphQL API

## Auth

In order to retrieve the auth data, go to `http://server:port/login` and perform the OAuth login.

## Types

```js
type PrivateUser {
  id: String
  country: String
  display_name: String
  email: String
  href: String
  images: [Image]
  product: String
  uri: String
}

type PublicUser {
  id: ID
  display_name: String
  href: String
  uri: String
  playlists: [Playlist]
  images: [Image]
}

type Track {
  id: ID
  album: Album
  artists: [Artist]
  available_markets: [String]
  disc_number: Int
  duration_ms: Int
  explicit: Boolean
  href: String
  is_playable: Boolean
  name: String
  popularity: Int
  preview_url: String
  track_number: Int
  type: String
  uri: String
}

type Album {
  id: ID
  album_type: String
  artists: [Artist]
  available_markets: [String]
  genres: [String]
  href: String
  images: [Image]
  label: String
  name: String
  popularity: Int
  release_date: String
  release_date_precision: String
  tracks: [Track]
  type: String
  uri: String
}

type Artist {
  id: ID
  genres: [String]
  href: String
  images: [Image]
  name: String
  popularity: Int
  type: String
  uri: String
}

type Playlist {
  id: ID
  collaborative: Boolean
  description: String
  href: String
  images: [Image]
  name: String
  owner: PublicUser
  uri: String
  tracks: [PlaylistTrack]
  public: Boolean
}

type PlaylistTrack {
  added_at: String
  added_by: PublicUser
  track: Track
}

type Image {
  height: Int
  url: String
  width: Int
}
```

## Queries

```js
type RootQuery {
  me: PrivateUser
  user(id: String!): PublicUser
  track(id: String, name: String): Track
  tracks(ids: String!): [Track]
  artist(id: String, name: String): Artist
  artists(ids: String!): [Artist]
  album(id: String!): Album
  albums(ids: String!): [Album]
  playlist(id: String!): Playlist
  userPlaylists(userId: String!): [Playlist]
  myPlaylists: [Playlist]
}
```

## Queries examples

### User

```javascript
// Get current user
query {
  me {
    id
    display_name
  }
}

// Get current user's playlist
query {
  myPlaylists {
    name
  }
}

// Get a user's playlist
query {
  userPlaylists(userId: "12144136536") {
    name
  }
}
```