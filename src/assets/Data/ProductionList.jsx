import starwarV from '../Videos/star-wars.mp4'
import disneyV from '../Videos/disney.mp4'
import marvelV from '../Videos/marvel.mp4'
import nationalGeographicV from '../Videos/national-geographic.mp4'
import pixarV from '../Videos/pixar.mp4'
import disney from '../Images/disney.png'
import marvel from '../Images/marvel.png'
import nationalG from '../Images/nationalG.png'
import pixar from '../Images/pixar.png'
import starwar from '../Images/starwar.png'
const ProductionList = [
    {
        id: 1,
        image: disney,
        video: disneyV
    },
    {
        id: 2,
        image: pixar,
        video: pixarV
    },
    {
        id: 3,
        image: marvel,
        video: marvelV
    },
    {
        id: 4,
        image: starwar,
        video: starwarV
    },
    {
        id: 5,
        image: nationalG,
        video: nationalGeographicV
    },

]

export default ProductionList