import React from 'react'
import ItemsList from './ItemsList';

const Content2 = ({ items, handleCheck, handleDelete }) => {

    // const [items, setItems] = useState(
    //     [
    //         {
    //             id: 1,
    //             checked: true,
    //             item: "Practice Coding"
    //         },
    //         {
    //             id: 2,
    //             checked: false,
    //             item: "Play Cricket"
    //         },
    //         {
    //             id: 3,
    //             checked: false,
    //             item: "Read about AI"
    //         }
    //     ]
    // );

    // const handleCheck = (id) => {
    //     // console.log(`id: ${id}`)
    //     const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
    //     setItems(listItems)
    //     localStorage.setItem("todo_list", JSON.stringify(listItems))
    // }

    // const handleDelete = (id) => {
    //     const listItems = items.filter((item) => item.id !== id)
    //     setItems(listItems)
    //     localStorage.setItem("todo_list", JSON.stringify(listItems))

    // }

    return (
        <main>
            {(items.length) ? (
                <ItemsList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (
                <p style={{ marginTop: '2rem' }}> Your list is empty </p>
            )}
        </main>
    )
}

export default Content2