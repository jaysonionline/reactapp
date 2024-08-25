const UnorderedList = () => {

    const myUnorderedList = ["Jay", "Sanvi", "Aarav", "Dhweep", "DHruv"];

    const result = myUnorderedList.map((ele, index) => {
        return <li key={"nikhil" + index}> {ele}</li>
    })


    return (

        <>


            <h1> Unordered list Component</h1>

            <ol>
                <li>Nikhil </li>
                <li>Vidya </li>
            </ol>

            <ul>
                {result}

            </ul>


        </>
    )

}


export default UnorderedList;

