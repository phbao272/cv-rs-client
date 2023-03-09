import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React from 'react'

const Guide = () => {
  return (
    <Box sx={{ maxWidth: '60%', margin: '20px 0' }}>
      <TextGuide>Hướng dẫn</TextGuide>
      <TextGuide>
        - Các trường thông tin có dấu (*) là trường thông tin quan trọng bắt buộc, giúp Nhà tuyển
        dụng đánh giá ứng viên.
      </TextGuide>
      <TextGuide>
        - Chỉ điền vào thông tin bạn muốn hiển thị trong hồ sơ của bạn (trừ các trường bắt buộc),
        các trường để trống sẽ không được hiển thị trên CV.
      </TextGuide>
      <TextGuide>
        - Các mục: Thông tin cá nhân, Giới thiệu bản thân, Kinh nghiệm làm việc, Kỹ năng lập trình
        và Học vấn là 05 mục mặc định, không được tùy chỉnh thứ tự hiển thị trên CV. Các mục ở phần
        Thông tin khác có thể tùy chỉnh thứ tự và chọn Thêm/ Xóa.
      </TextGuide>
      <TextGuide>
        - Chọn Xem trước để xem các mẫu CV của bạn, chọn Mẫu và Lưu CV. Bạn cũng có thể tải xuống CV
        dưới dạng PDF.
      </TextGuide>
    </Box>
  )
}

export { Guide }

const TextGuide = styled(Typography)({
  fontSize: '12px',
  fontStyle: 'italic',
  color: 'rgb(57, 62, 70)',
})
