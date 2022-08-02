import React from 'react';
import Head from 'next/head';
import Image from 'next/image'
import style from '../styles/Statement.module.css'

export default function Logo() {
  return (
    <div className={style.container}>
        <h3 className={style.content}>بهترین برندهای دنیا</h3>
        <Image />
    </div>
  )
}
