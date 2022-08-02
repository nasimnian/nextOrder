import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import style from './categories.module.css'
import photo1 from '../../public/jeens.jpg'
import photo2 from '../../public/shoses.jpg'
import photo3 from '../../public/glasse.jpg'
import photo4 from '../../public/Tshert.jpg'
export default function Categories() {
  return (
    <div className={style.container}>
        <div className={`card ${style.items}`} style={{width:"18rem"}}>
            <Image src={photo1} alt="..." width={800} height={1000} />
            <div className={`card-body ${style.buttonParent}`}>
                <button className={style.buttonCart}>بازار شلوار</button>
            </div>
        </div>
        <div className={`card ${style.items}`} style={{width:"18rem"}}>
            <Image src={photo2} className={`card-img-top ${style.ImageTop}`} alt="..." width={800} height={1000}/>
            <div className={`card-body ${style.buttonParent}`}>
                <button className={style.buttonCart}>بازار عینک</button>
            </div>
        </div>
        <div className={`card ${style.items}`} style={{width:"18rem"}}>
            <Image src={photo3} className={`card-img-top ${style.ImageTop}`} alt="..." width={800} height={1000}/>
            <div className={`card-body ${style.buttonParent}`}>
                <button className={style.buttonCart}>بازار کفش</button>
            </div>
        </div>
        <div className={`card ${style.items}`} style={{width:"18rem"}}>
            <Image src={photo4} className={`card-img-top ${style.ImageTop}`} alt="..." width={800} height={1000}/>
            <div className={`card-body ${style.buttonParent}`}>
                <button className={style.buttonCart}>بازار تیشرت</button>
            </div>
        </div>


    </div>
  )
}
