const { spotify_base_url } = require("../../config");
const request = require("../../utils/request");

module.exports = {
  artist: async (args, req) => {
    try {
      const options = {
        url: spotify_base_url + "/artists/" + args.id,
        headers: {
          Authorization: "Bearer " + req.token
        }
      };

      const artist = await request(req, options);
      return artist;
    } catch (err) {
      console.log(err);
      throw new Error(err.message);
    }
  },

  artists: async (args, req) => {
    try {
      const options = {
        url: spotify_base_url + "/artists/?ids=" + args.ids,
        headers: {
          Authorization: "Bearer " + req.token
        }
      };

      const result = await request(req, options);
      return result.artists;
    } catch (err) {
      console.log(err);
      throw new Error(err.message);
    }
  },

  artistTopTracks: async (args, req) => {
    try {
      const options = {
        url: `${spotify_base_url}/artists/${args.id}/top-tracks?country=${
          args.country
        }`,
        headers: {
          Authorization: "Bearer " + req.token
        }
      };

      const result = await request(req, options);
      return result.tracks;
    } catch (err) {
      console.log(err);
      throw new Error(err.message);
    }
  },

  artistAlbums: async (args, req) => {
    try {
      const options = {
        url: `${spotify_base_url}/artists/${args.id}/albums?market=${
          args.market
        }&include_groups=${args.include_groups}`,
        headers: {
          Authorization: "Bearer " + req.token
        }
      };

      const result = await request(req, options);
      return result.items;
    } catch (err) {
      console.log(err);
      throw new Error(err.message);
    }
  },

  artistRelated: async (args, req) => {
    try {
      const options = {
        url: spotify_base_url + "/artists/" + args.id + "/related-artists",
        headers: {
          Authorization: "Bearer " + req.token
        }
      };

      const result = await request(req, options);
      return result.artists;
    } catch (err) {
      console.log(err);
      throw new Error(err.message);
    }
  }
};
