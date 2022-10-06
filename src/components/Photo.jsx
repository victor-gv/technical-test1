// Obtener una fotografía de https://picsum.photos/200 . Esta fotografía ha de ser de 200x200. Se mostrará centro de la pantalla y cambiara cada 4 segundos. Por una fotografía nueva de la misma página.
// Se implementará una funcionalidad por la que cuando el usuario haga click sobre la imagen esta no cambiara y si vuelve a hacer click volver a su funcionamiento anterior de cambio.


import React, { useState, useEffect } from 'react';

function Photo() {
    const [photo, setPhoto] = useState('https://picsum.photos/200');
    const [click, setClick] = useState(false);

    useEffect(() => {
        const timer = setInterval(() =>
            click ? null : setPhoto(`https://picsum.photos/200?random=${Math.floor(Math.random() * 1000)}`), 4000);
        return () => clearInterval(timer);
    }, [click]);


    return (
        <div className='flex flex-col justify-center items-center'>
            <img src={photo}
                alt=''
                className='w-64 h-64 rounded-full'
                onClick={() => setClick(!click)} />
        </div>
    );
}

export default Photo;