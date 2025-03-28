import data from "../data/allArtists.json"

type Release = {
    artist: string,
    title: string,
    releaseDate: string,
    promoType: string,
    songType: string
}

export type ArtistReleases = Record<string, Release[]>;

export const filterJSONParser = (): ArtistReleases => {
    const artistMap: ArtistReleases = {};

    
    data.all.forEach((group) => {
        Object.entries(group).forEach(([artistGroup, releases]) => {
          (releases as Release[]).forEach((release) => {
            if (!artistMap[artistGroup]) {
              artistMap[artistGroup] = [];
            }
            artistMap[artistGroup].push(release);
          });
        });
      });

    console.dir(artistMap);
    
    return artistMap;
}

