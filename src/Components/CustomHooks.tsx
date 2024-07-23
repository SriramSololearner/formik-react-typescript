import React, { useCallback, useState, useRef, MutableRefObject, useEffect, useMemo } from 'react';
import { Child } from './Child';
import { Box, Button, Typography } from '@mui/material';
import useFetch from "./useFetch"

const CustomHooks = () => {


    const [data] = useFetch('https://dummyjson.com/products');
    console.log(data)

    const [nums, setNums] = useState<number[]>([]);
    const [val, setValue] = useState(0);
    const [inputvalue, setInputvalue] = useState('hello');

    const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
    const [dark, setDark] = useState(false);

    // 
    const addRandom = useCallback(() => {
        const randomNumber = Math.round(Math.random() * 1000);
        setNums([...nums, randomNumber])
    }, [nums]);

    // console.log(addRandom, "callBack")


    const fun = () => {
        console.log('rendered!!')
    }
    fun()

    // console.log(Random, 'useMemmo')

    useEffect(() => {
        inputRef.current.value = inputvalue;
        inputRef.current.style.color = 'black';
    }, [inputvalue])


    const handler = () => {
        inputRef.current.focus();

    }



    const handlerSet = () => {
        inputRef.current.value = 'welcome';
        inputRef.current.style.background = inputvalue;
        inputRef.current.style.border = "2px solid red";
        inputRef.current.style.color = 'white';
    }



    return (
        <Box sx={styles.main_container}>

            <Box sx={styles.input_button_Container}>
                <Box sx={styles.input_container}>
                    <Box component={'input'}
                        placeholder='enter text' type="text" ref={inputRef}
                        value={inputvalue}
                        onChange={(evnt) => setInputvalue(evnt.target.value)}
                        sx={styles.input}
                    />
                    <Typography>CurrentValue: {inputvalue}</Typography>
                </Box>

                <Button variant="contained" onClick={handler}>Focus</Button>
                <Button variant="contained" onClick={handlerSet}>SetValue</Button>
            </Box>

            <Box sx={styles.child_Container}>
                {nums.map((num, ind) => <Box key={ind} component={'span'} sx={styles.child_Container_Item}>
                    {num + ' '}

                </Box>)}
                <Box><Child props2={addRandom} props3={val} /></Box>

                <Box>

                    <Button onClick={() => setValue(val + 1)}>Click Here!</Button>
                </Box>

            </Box>
        </Box>

    )
}




export default CustomHooks


const styles = {
    main_container: {
        display: 'flex', flexDirection: 'column', height: '100vh',
        alignItems: 'center',
        gap: '20px',
    },

    input_button_Container: {
        my: '20px', display: "flex", gap: 3, justifyContent: 'center',
        alignItems: 'flex-start',
    },
    input_container: { display: "flex", flexDirection: "column" },
    input: { py: '10px', border: "2px solid blue", fontWeight: 900, fontSize: '15px', color: "blue" },
    child_Container: { mb: "20px", },
    child_Container_Item: { fontSize: '20px', mt: '20px' }


} 