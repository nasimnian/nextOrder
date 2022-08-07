import React from 'react'
import style from './VeryfyOrder.module.css'

export default function VerifyOrder() {
  return (
    <div className='VerifyOrder container'>
         <div className={`'  card   mt-3 mb-5  ${style.shadowCard}' `}>
        <div className='row'>
            <div className={`' col-sm-7  col-11  mt-3 mb-5  `}>
                   <div className='row'>
                 <div className='col-sm-2'></div>
                 <div className={`'col-sm-10 col-12 ${style.maginRightCard} '`} >
            <h4 style={{marginRight:'15%',color:'red'}} className="mt-3">  اطلاعات شما</h4>
            {/* ردیف اول */}
            <div className='row'>
                <div className='col-sm col-11'>
                <div class="mb-2">
                   نام : نسیم
                    </div>
                </div>
                <div className='col-sm col-11'>
                <   div class="mb-2">
                      <label for="exampleFormControlInput1" class="form-label">نام خانوادگی : اسفندیاری </label>
                    </div>
                </div>
            </div>
            {/* ردیف دوم */}
            <div className='row '>
                <div className='col-sm col-11'>
                <div class="mb-2">
                 استان : تهران
                    </div>
                </div>
                <div className='col-sm col-11'>
                <   div class="mb-2">
                      <label for="exampleFormControlInput1" class="form-label">شهر  : تهران </label>
                      
                    </div>
                </div>
            </div>
           
    
            {/* ردیف پنجم */}
            <div className='row '>
            <div className='col-sm col-11'>
                <   div class="mb-2">
                      کد پستی: 3252651252
                    </div>
                </div>
            </div>
            {/* ردیف ششم */}
            <div className='row mb-2'>
            <div className='col-sm col-11'>
                شماره تلفن همراه: 09035895797
                </div>
            </div>
                 {/* ردیف چهارم */}
                 <div className='row mb-5'>
            <div className='col-sm col-11'>
                      آدرس دقیق : تهران، مینی سیتی ، انتهای خیابان شهید بابایی، شهرک لویزان 3، ، طبقه 2
                </div>
            </div>
               

                  {/* کد تخفیف */}
             <div  className= {`' row mt-3 ${style.showIcon}  '`}>
                    <div className='col-4'>
                    <div class="mb-3">
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="کد تخفیف" />
                    </div>

                    </div>
                    <div className='col-4'>
                    <button type="button" class="btn btn-primary" style={{fontSize:'14px'}}>اعمال کد تخفیف</button>
                    </div>
                    <div className='col-2'></div>
                    <div className='col-2'>
                    </div>
                 </div>

                  {/* کد تخفیف گوشی */}
               <div className= {`' col-11  ${style.showIconL}   '`}>
            <div className= {`' card mb-2  ${style.shadowCard}   ${style.border1} '`} >
            <div class="card-body">
            <div class="mb-3">
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=" کد تخفیف" />
            </div>
            <div className={ `' ${style.CenterTitle} ${style.maginRightCard}'  `}>
            <button type="button" class="btn btn-dark  "> اعمال کد تخفیف </button>
            </div>
            
                
            </div>
            </div>
            </div>

         </div>
         

         </div>

                

              
                 
            </div>

                {/* کارت  */}
                <div className='col-sm-4 col-11 '>
            <div class={`card mb-5 mt-3 ${style.shadowCard} ${style.maginRightCard}`}>
            <div class="card-body">
                <h4 class="card-title">جمع کل سبد خرید </h4>
               
                <div className='border'></div>
                <p>
                   

                 

                </p>
                <p>
                    <div className='row'>
                        <div className='col'>تخفیف شما</div>
                        <div className='col'>26.500</div>
                     </div>
                </p>
                <p>
                    <div className='row'>
                        <div className='col'>هزینه پست</div>
                        <div className='col'>30,000</div>
                     </div>
                </p>
                <p>
                    <div className='row'>
                        <div className='col'></div>
                        <div className='col'></div>
                     </div>
                </p>
                <div className='border'></div>
                <div className='row mt-2'>
                    <div className='col-6'>
                        <h5 > مجموع قابل پرداخت</h5>
                    </div>

                    <div className='col-1'>
                    </div>

                    <div className='col-5'>
                    <h5 style={{color:'red'}}> 107,000</h5>
                    </div>
                </div>

                <div className='row m-4'>
                    <button type="button" class="btn btn-primary">پرداخت</button>
                </div>
            </div>
            </div>
               </div>
            
        </div>
        </div>
    </div>
  )
}
