
interface Character {
    name: string;
    image: string;
    status: string;
    origin: {
      name: string;
    };
    episodes: {
      name: string;
      episode: string;
    }[];
    url: string;
    location: {
      name: string;
    };
    gender: string;
  }
const character: Character = 
    {
      name: "Rick Sanchez",
      image: "rick_sanchez.jpg",
      status: "Alive",
      origin: {
        name: "Earth (C-137)"
      },
      episodes: [
        { name: "Pilot", episode: "S01E01" },
        { name: "Lawnmower Dog", episode: "S01E02" },
        // Add more episodes as needed
      ],
      url: "https://rickandmortyapi.com/api/character/1",
      location: {
        name: "Earth (Replacement Dimension)"
      },
      gender: "Male"
    }
   
    // Add more characters as needed
  
  export default character;
  