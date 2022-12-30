import React from 'react'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import MyDayCard from '../../component/card/MyDayCard'

function Story() {
  return (
    <div className="storiesa">
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
            // slidesPerGroup: 3,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
            // slidesPerGroup: 3,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="stories w-full md:max-w-md lg:max-w-xl  absolute "
      >
        <SwiperSlide>
          <MyDayCard />
        </SwiperSlide>
        <SwiperSlide>
          <MyDayCard />
        </SwiperSlide>
        <SwiperSlide>
          <MyDayCard />
        </SwiperSlide>
        <SwiperSlide>
          <MyDayCard />
        </SwiperSlide>
        <SwiperSlide>
          <MyDayCard />
        </SwiperSlide>
        <SwiperSlide>
          <MyDayCard />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Story
