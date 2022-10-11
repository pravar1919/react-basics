const movies = [
  {
    _id: "633bdbabfc13ae7bff00008e",
    title: "It's Impossible to Learn to Plow by Reading Books",
    genere: { _id: "633be0d2fc13ae118d00113a", name: "Drama" },
    numberInStock: 1,
    dailyRentalRate: 2.5,
    like: true,
    publishedDate: "2022-08-30T18:09:09Z",
  },
  {
    _id: "633bdbabfc13ae7bff00008f",
    title: "Lovely Molly",
    genere: { _id: "633be0d2fc13ae118d00113a", name: "Sci-Fi" },
    numberInStock: 2,
    dailyRentalRate: 3.6,
    like: true,
    publishedDate: "2021-10-20T22:31:09Z",
  },
  {
    _id: "633bdbabfc13ae7bff000090",
    title: "West Point Story, The",
    genere: { _id: "633be0d2fc13ae118d00113a", name: "Romance" },
    numberInStock: 3,
    dailyRentalRate: 4.2,
    like: false,
    publishedDate: "2022-09-18T23:37:16Z",
  },
  {
    _id: "633bdbabfc13ae7bff000091",
    title: "Stuck Between Stations",
    genere: { _id: "633be0d2fc13ae118d00113a", name: "Comedy" },
    numberInStock: 4,
    dailyRentalRate: 3.3,
    like: false,
    publishedDate: "2021-10-27T14:59:22Z",
  },
  {
    _id: "633bdbabfc13ae7bff000092",
    title: "Examined Life",
    genere: { _id: "633be0d2fc13ae118d00113a", name: "Drama" },
    numberInStock: 5,
    dailyRentalRate: 2.0,
    like: false,
    publishedDate: "2022-02-23T04:58:08Z",
  },
  {
    _id: "633bdbabfc13ae7bff000093",
    title: "Kevin Nealon: Whelmed, But Not Overly",
    genere: { _id: "633be0d2fc13ae118d00113a", name: "Romance" },
    numberInStock: 6,
    dailyRentalRate: 1.9,
    like: true,
    publishedDate: "2022-02-23T18:21:31Z",
  },
  {
    _id: "633bdbabfc13ae7bff000094",
    title: "In Cold Blood",
    genere: { _id: "633be0d2fc13ae118d00113a", name: "Drama" },
    numberInStock: 7,
    dailyRentalRate: 4.6,
    like: false,
    publishedDate: "2022-07-23T19:39:49Z",
  },
  {
    _id: "633bdbabfc13ae7bff000095",
    title: "Air America",
    genere: { _id: "633be0d2fc13ae118d00113a", name: "Romance" },
    numberInStock: 8,
    dailyRentalRate: 2.6,
    like: true,
    publishedDate: "2022-08-19T16:42:46Z",
  },
  {
    _id: "633bdbabfc13ae7bff000096",
    title: "Early Spring (Soshun)",
    genere: { _id: "633be0d2fc13ae118d00113a", name: "Sci-Fi" },
    numberInStock: 9,
    dailyRentalRate: 1.5,
    like: false,
    publishedDate: "2022-07-23T09:16:46Z",
  },
  {
    _id: "633bdbabfc13ae7bff000097",
    title: "The Mark of Cain",
    genere: { _id: "633be0d2fc13ae118d00113a", name: "Comedy" },
    numberInStock: 10,
    dailyRentalRate: 3.8,
    like: true,
    publishedDate: "2021-10-09T18:49:01Z",
  },
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.filter((m) => m._id === id);
}

export function saveMovie(id) {
  movies.filter((m) => m._id === id);
}
