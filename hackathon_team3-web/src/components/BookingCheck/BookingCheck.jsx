import React from 'react'
import BookingBar from '../BookingBar/BookingBar'

import * as S from './BookingCheck.styles'
import { IconCalender, IconClock, IconUsers } from '../../assets/index'

const BookingCheck = () => {
  return (
    <BookingBar>
        <S.BookingCheckHeading>내일 방문이 맞으신가요?</S.BookingCheckHeading>
        <div style={{background: '#D9D9D9', height: '3px',}}></div>
        <S.BookingCheckSubheading>방문 일정을 다시 한 번 확인해 주세요.</S.BookingCheckSubheading>
        <S.BookingCheckName>센시티브서울</S.BookingCheckName>
        <S.BookingCheckLabel>한남동 · 이탈리아 음식</S.BookingCheckLabel>
        <S.BookingCheckContainer>
            <S.Icon>
                <IconCalender></IconCalender>
                <S.IconLabel>1.06(금)</S.IconLabel>
            </S.Icon>
            <S.Icon>
                <IconClock></IconClock>
                <S.IconLabel>오후 6:30</S.IconLabel>
            </S.Icon>
            <S.Icon style={{'marginRight': '0px'}}>
                <IconUsers></IconUsers>
                <S.IconLabel>2명</S.IconLabel>
            </S.Icon>
        </S.BookingCheckContainer>
        <S.BookingCheckWarning>당일취소 및 노쇼는 레스토랑 뿐만 아니라
            다른 고객님께도 피해가 될 수 있으므로 신중히 예약 부탁드립니다 :)
        </S.BookingCheckWarning>
    </BookingBar>
  )
}

export default BookingCheck