import { useId } from "react"
import Card from "./Card"

const Main =(props)=> {

    // console.log(props)

    const cardComponents = props.data.map(item => {

        const id = useId()

        return (
            <Card
                key={id}
                location={item.location}
                imgUrl={item.imgUrl}
                year={item.year}
                description={item.description}
                alt={item.alt}
                isFavorite={item.isFavorite}
            />

        )
    })

    return (
        <main className="main" id="main">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    { cardComponents }
                </div>
            </div>
        </main>
    )
}

export default Main