import { Avatar, Box, Grid, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'

import PhotoDefault from '@/assets/images/logo-default.png'
import { ButtonLiked } from '@/components/Button'
import { ButtonApplied } from '@/components/Button/ButtonApplied'
import { IJob, JobDetailParams } from '@/libs/types'
import { BoxAlignCenter, BoxAlignCenterVertical, ChipStyled } from '@/styles'
import { colors } from '@/styles/colors'

const InfoItem = ({ title, value, icon }: { title: string; value: string; icon: string }) => {
  return (
    <BoxAlignCenter>
      <Avatar src={icon} sx={{ width: '32px', height: '32px', marginRight: '12px' }} />
      <Box>
        <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>{title}</Typography>
        <Typography sx={{ fontSize: '14px' }}>{value}</Typography>
      </Box>
    </BoxAlignCenter>
  )
}

const JobDetail = () => {
  const params = useParams<JobDetailParams>()

  const { isLoading: isLoadingJob, data: job } = useQuery<IJob>([`get-job/${params.job_id}`], {
    enabled: !!params.job_id,
  })

  console.log('data', job)

  return (
    <Box sx={{ marginTop: '24px' }}>
      {isLoadingJob ? (
        <p>Loading...</p>
      ) : (
        <>
          <BoxAlignCenter sx={{ padding: '20px 25px', backgroundColor: '#fff' }}>
            <Avatar
              variant="rounded"
              src={job?.company.photo || PhotoDefault}
              sx={{
                border: '1px solid #e9eaec',
                width: '110px',
                height: '110px',
                borderRadius: '50%',
              }}
            />
            <BoxAlignCenterVertical
              sx={{
                flexGrow: 1,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                marginLeft: '32px',
                padding: '20px',
              }}
            >
              <Typography
                sx={{
                  color: colors.primary,
                  fontWeight: 'bold',
                  fontSize: 22,
                  marginBottom: '16px',
                }}
              >
                {job?.title}
              </Typography>

              <Typography
                sx={{
                  color: '#333',
                  fontWeight: 'bold',
                  fontSize: 17,
                  marginBottom: '8px',
                }}
              >
                {job?.company?.name}
              </Typography>

              <Typography sx={{ fontSize: 14 }}>Hạn nộp hồ sơ: {job?.deadline}</Typography>
            </BoxAlignCenterVertical>
            <BoxAlignCenterVertical sx={{ gap: '16px' }}>
              <ButtonApplied />
              <ButtonLiked />
            </BoxAlignCenterVertical>
          </BoxAlignCenter>

          <Box sx={{ padding: '20px 25px', backgroundColor: '#fff', marginTop: '32px' }}>
            <Typography
              sx={{
                borderLeft: `7px solid ${colors.primary}`,
                color: '#333',
                fontWeight: 'bold',
                paddingLeft: '12px',
                margin: '0 0 16px',
                fontSize: '22px',
              }}
            >
              Chi tiết tin tuyển dụng
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Box sx={{ padding: '0 16px 16px 16px' }}>
                  <Typography
                    sx={{
                      textDecoration: 'underline',
                      color: '#333',
                      fontWeight: 'bold',
                      marginBottom: '16px',
                      fontSize: '14px',
                    }}
                  >
                    Thông tin chung
                  </Typography>
                  <Grid container>
                    <Grid item xs={6} sx={{ marginBottom: '8px' }}>
                      <InfoItem
                        title={'Mức lương'}
                        value={job?.salary?.name as string}
                        icon={'https://www.topcv.vn/v4/image/job-detail/icon/1.svg'}
                      />
                    </Grid>
                    <Grid item xs={6} sx={{ marginBottom: '8px' }}>
                      <InfoItem
                        title={'Số lượng tuyển'}
                        value={job?.number_of_recruit as unknown as string}
                        icon={'https://www.topcv.vn/v4/image/job-detail/icon/5.svg'}
                      />
                    </Grid>
                    <Grid item xs={6} sx={{ marginBottom: '8px' }}>
                      <InfoItem
                        title={'Hình thức làm việc'}
                        value={job?.working_form?.name as string}
                        icon={'https://www.topcv.vn/v4/image/job-detail/icon/2.svg'}
                      />
                    </Grid>
                    <Grid item xs={6} sx={{ marginBottom: '8px' }}>
                      <InfoItem
                        title={'Giới tính'}
                        value={'Không yêu cầu'}
                        icon={'https://www.topcv.vn/v4/image/job-detail/icon/3.svg'}
                      />
                    </Grid>
                    <Grid item xs={6} sx={{ marginBottom: '8px' }}>
                      <InfoItem
                        title={'Kinh nghiệm'}
                        value={job?.experience?.name as string}
                        icon={'https://www.topcv.vn/v4/image/job-detail/icon/7.svg'}
                      />
                    </Grid>
                  </Grid>
                </Box>

                <Box sx={{ padding: '0 16px 16px 16px' }}>
                  <Typography
                    sx={{
                      textDecoration: 'underline',
                      color: '#333',
                      fontWeight: 'bold',
                      marginBottom: '16px',
                      fontSize: '14px',
                    }}
                  >
                    Địa điểm làm việc
                  </Typography>
                  <Typography sx={{ fontSize: '14px' }}>- {job?.location?.name}</Typography>
                </Box>

                <Box sx={{ backgroundColor: '#fff', marginTop: '32px' }}>
                  <Typography
                    sx={{
                      borderLeft: `7px solid ${colors.primary}`,
                      color: '#333',
                      fontWeight: 'bold',
                      paddingLeft: '12px',
                      margin: '0 0 16px',
                      fontSize: '22px',
                    }}
                  >
                    Mô tả công việc
                  </Typography>

                  <Typography sx={{ fontSize: '14px', width: '80%' }}>
                    {job?.description}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{ paddingBottom: '16px' }}>
                  <Typography
                    sx={{
                      textDecoration: 'underline',
                      color: '#333',
                      fontWeight: 'bold',
                      marginBottom: '16px',
                      fontSize: '14px',
                    }}
                  >
                    Trình độ học vấn
                  </Typography>
                  <Typography sx={{ fontSize: '14px' }}>- {job?.education_level?.name}</Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      textDecoration: 'underline',
                      color: '#333',
                      fontWeight: 'bold',
                      marginBottom: '16px',
                      fontSize: '14px',
                    }}
                  >
                    Kỹ năng
                  </Typography>
                  <BoxAlignCenter sx={{ gap: '4px', flexWrap: 'wrap' }}>
                    {job?.skills?.map((skill, index) => (
                      <ChipStyled key={index} label={skill.name} size="small" />
                    ))}
                  </BoxAlignCenter>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </>
      )}
    </Box>
  )
}

export { JobDetail }
