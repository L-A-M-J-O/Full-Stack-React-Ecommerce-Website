import {useState, useEffect} from 'react'

export const Clock = () => {

  const [dias, setDias] = useState ();
  const [horas, setHoras] = useState ();
  const [minutos, setMinutos] = useState ();
  const [segundos, setSegundos] = useState ();

  let interval;

  const  countDown = () => {
    const destination = new Date('January 01, 2023').getTime()

    interval = setInterval(() => {
      const now = new Date().getTime()
      const different = destination - now
      const dias = Math.floor(different/ (1000 * 60 * 60 * 24))
      const hours = Math.floor(different % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
      const minutos = Math.floor(different % (1000 * 60 * 60) / (1000 * 60))
      const segundos = Math.floor(different % (1000 * 60) / 1000)
      if(destination < 0) clearInterval(interval.current);
      else {
        setDias(dias);
        setHoras(hours);
        setMinutos(minutos);
        setSegundos(segundos);
      }
    })
  }

  useEffect(() => {
    countDown();
  })

  return (
    <div className='clock__wrapper d-flex aling-items-center gap-4'>
        <div className='clock__data d-flex aling-items-center gap-4'>
            <div className='text-center'>
                <h1 className='fs-3 mb-2'>{dias}</h1>
                <h5 className='fs-6'>Dias</h5>
            </div>
            <span className='f-3'>:</span>
        </div>
        <div className='clock__data d-flex aling-items-center gap-4'>
            <div className='text-center'>
                <h1 className='fs-3 mb-2'>{horas}</h1>
                <h5 className='fs-6'>Horas</h5>
            </div>
            <span className='f-3'>:</span>
        </div>
        <div className='clock__data d-flex aling-items-center gap-4'>
            <div className='text-center'>
                <h1 className='fs-3 mb-2'>{minutos}</h1>
                <h5 className='fs-6'>Minutos</h5>
            </div>
            <span className='f-3'>:</span>
        </div>
        <div className='clock__data d-flex aling-items-center gap-4'>
            <div className='text-center'>
                <h1 className='fs-3 mb-2'>{segundos}</h1>
                <h5 className='fs-6'>Segundos</h5>
            </div>
            <span className='f-3'>:</span>
        </div>
    </div>
  )
}
