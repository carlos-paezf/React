export const getRandomImage = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min
}


export const helperInput = (data, setData) => {
    const handleChange = (e) => {
        const value = e.target.value
        setData({
            ...data,
            [e.target.name]: value
        }) 
    }

    return { handleChange }
}
