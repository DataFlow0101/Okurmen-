import React from 'react'
import "./PassiveIncome.scss"
import Block1 from './Block1/Block1'

function PassiveIncome() {
  return (
    <section className='PassiveIncomeContainer'>
      <h1 className='PassiveIncomeText'>Публичный трейдинг</h1>
      <p className='PassiveIncomeParagraf'>платформа управления инвестициями на рынке криптовалют, которая позволяет частным инвесторам копировать реальные сделки успешных профессиональных трейдеров.</p>
      <div>
        <Block1/>
      </div>
    </section>
  )
}

export default PassiveIncome