import { Button, Typography } from "@mui/material";

interface Iprops {

    props2: () => void,
    props3: number
}

export function Child({ props2, props3 }: Readonly<Iprops>) {

    console.log('Child render');
    return (
        <>
            <Typography>{props3}</Typography>
            <Button onClick={props2} variant='outlined'>Random</Button>
        </>


    )
}