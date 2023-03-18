import { useState } from "react"

export const useForm = (initialState) => {
    const [value, setValue] = useState(initialState);

    return [
        value, (event) => {
            event ?
                setValue({ ...value, [event.target.name]: event.target.value })
                : setValue(initialState)
        }
    ]

}