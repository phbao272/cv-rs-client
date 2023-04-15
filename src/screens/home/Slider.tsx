// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import './swiper.css'

import { Box, Grid } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import React, { useMemo } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { IJobDjango } from '@/libs/types'
import { ICompany } from '@/libs/types/company'
import { TextHeader } from '@/styles'
import { colors } from '@/styles/colors'

import { HotCompany } from './components/HotCompany'
import { HotJob } from './components/HotJob'

interface Props {
  dataJob: IJobDjango[]
}

export const Slider: React.FC<Props> = ({ dataJob }) => {
  const jobSlider = useMemo(() => {
    if (!dataJob) return []

    return dataJob.reduce((acc, cur, index) => {
      if (index % 3 === 0) {
        acc.push([cur])
      } else {
        acc[acc.length - 1].push(cur)
      }
      return acc
    }, [] as IJobDjango[][])
  }, [dataJob])

  // console.log('dataSlider', jobSlider)

  const { isFetching: isFetchingHotCompany, data: hotCompany } = useQuery<ICompany[]>(
    ['hot-company'],
    {
      onSuccess: (data) => {
        console.log('data', data)
      },
    },
  )

  return (
    <Grid
      container
      spacing={2}
      sx={{
        backgroundColor: '#fff',
        paddingBottom: '16px',
        paddingRight: '16px',
        borderRadius: '8px',
        marginTop: '30px',
      }}
    >
      <Grid item xs={8}>
        <TextHeader
          sx={{ marginBottom: '20px', fontSize: '20px', marginTop: 0, textTransform: 'capitalize' }}
        >
          <span style={{ color: colors.primary }}>Công ty</span> nổi bật
        </TextHeader>

        <Box>
          <Swiper
            loop={true}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="swiper-hot-company"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {hotCompany?.map((item, index) => (
              <SwiperSlide key={index}>
                <HotCompany company={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <TextHeader
          sx={{ marginBottom: '20px', fontSize: '20px', marginTop: 0, textTransform: 'capitalize' }}
        >
          <span style={{ color: colors.primary }}>Công việc</span> hot hôm nay
        </TextHeader>

        <Box>
          <Swiper
            pagination={{
              clickable: true,
            }}
            loop={true}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="swiper-hot-job"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={30}
            centeredSlides={true}
          >
            {jobSlider?.map((item, index) => (
              <SwiperSlide key={index}>
                <HotJob jobs={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Grid>
    </Grid>
  )
}
