import 'swiper/css'
import 'swiper/css/pagination'
import './swiper.css'

import { Stack } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Autoplay, FreeMode } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import PhotoDefault from '@/assets/images/logo-default.png'
import { TextEllipsis } from '@/components/Text'
import { ICompany } from '@/libs/types/company'

export const SliderCompany = () => {
  const { data, isFetching } = useQuery<ICompany[]>(['company'])

  // console.log('Data company', data)

  return (
    <>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={6}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode, Autoplay]}
        className="swiper-list-company"
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index}>
            <SliderItem company_name={item.name} photo={item.photo as string} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

const SliderItem = ({ company_name, photo }: { company_name: string; photo: string }) => {
  return (
    <Stack
      sx={{
        justifyContent: 'center',
      }}
    >
      <img
        src={photo || PhotoDefault}
        alt="img"
        style={{
          width: '100%',
          height: '100px',
          objectFit: 'contain',
          background: '#fff',
        }}
      />

      <TextEllipsis
        sx={{
          paddingTop: '16px',
          fontWeight: '600',
          fontSize: '16px',
          color: '#444',
          textAlign: 'center',
        }}
        lineClamp={2}
      >
        {company_name}
      </TextEllipsis>
    </Stack>
  )
}
