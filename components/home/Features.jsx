import React from 'react'
import style from './Features.module.css'
import { LocalShipping,AccountBalanceWallet, HeadsetMic } from '@material-ui/icons'
export default function Features() {
  return (
    <div className={style.container}>
        <ul className={style.items}>
          <li>
            <p><LocalShipping className={style.icon} /></p>
            <p className={style.content}>ارسال به تمام نقاط کشور</p>
          </li>
          <li>
            <p><AccountBalanceWallet  className={style.icon} /></p>
            <p className={style.content} >پرداخت امن از درگاه بانکی</p>
          </li>
          <li>
            <p><HeadsetMic className={style.icon}/></p>
            <p className={style.content}>پشتیبانی آنلاین و تلفنی</p>
          </li>
        </ul>
    </div>
  )
}
