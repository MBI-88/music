
export interface Autor {
    artists: [{
        strArtist: string,
        strLabel: string,
        intFormedYear: string,
        intBornYear: string,
        intDiedYear: string | null,
        strStyle: string,
        strGenre: string,
        strWebSite: string,
        strBiographyEN: string,
        strCountry:string,
        strGender:string,
        strArtistThumb: string
    }]

}

export interface Music {
    lyrics: string | null

}