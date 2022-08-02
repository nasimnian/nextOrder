import React from 'react'
import style from './Footer.module.css'
import {EmailOutlined, Instagram, LinkedIn, PhoneAndroid, RoomOutlined, Telegram, WhatsApp } from '@material-ui/icons'
export default function Footer() {
  return (
    <div className={style.container}>
      
      <div className={style.itemRight}>
        <h3>درباره‌ی ما</h3>
        <p>تاناکورای سنندج آنلاین است و تمام آنچه را كاربر از یک فضای آنلاين انتظار دارد به‌خوبی برآورده می‌کند. کاربری آسان، پرداخت امن از درگاه‌های بانکی، نماد اعتماد الکترونیک، ضمانت بازگشت پول، امانت‌داری، پشتیبانی حرفه‌ای برای راهنمایی و رفع مشکلات احتمالی. </p>
      </div>


      <div className={style.itemLeft}>
        <h3>ارتباط با ما</h3>
        <ul className={style.Uls}>
          <li><RoomOutlined /> کردستان سنندج تاناکورا غرفه ۴ غرفه ۳</li>
          <li><PhoneAndroid /> <a href="tel:09376990587" className={style.tagA}>09376990587</a></li>
          <li><EmailOutlined /> co.tanakorasanandaj.gmail.com</li>
        </ul>  
      </div>

      <div className={style.itemCenter}>
        <h3>نشان اعتماد الکترونیک</h3>
        <p>
          <img src="" alt="نماد اعتماد الکترونیک" />
        </p>
      </div>


    </div>
  )
}
